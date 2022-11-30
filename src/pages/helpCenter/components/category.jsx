import Sidebar from "./sideBar";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Category = ({ data, activeLink, setActiveLink, activeCategory }) => {
    const [open, setOpen] = useState(0)
    const location = useLocation();
    const searchQuery = location.search.slice(1) || "";

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    useEffect(() => {
        setActiveLink(location.hash.slice(1) || "get_started")
    })

    return (
        <div className="flex flex-col mx-4 lg:flex-row lg:mx-8 m-5 pt-20">
            <Sidebar data={data} activeLink={activeLink} setActiveLink={setActiveLink} />

            <div className="flex-1">
                <div className="flex p-6 items-center justify-between bg-blue-50 text-primary-800">
                    <div>
                        <h1 className="text-3xl font-semibold py-2">{activeCategory[0] && activeCategory[0].heading}</h1>
                        <p className="font-semibold">{activeCategory[0] && activeCategory[0].para}</p>
                    </div>
                    <img src={activeCategory[0] && activeCategory[0].icon} alt={activeCategory[0] && activeCategory[0].heading} />
                </div>

                <div className="md:p-8 p-4 bg-gray-100">
                    {
                        activeCategory[0] && 
                        
                        activeCategory[0].contents.filter(item => item.question.replaceAll(" ", "-").indexOf(searchQuery) !== -1)
                        .map((content, i) => {
                            return (
                                <Accordion key={i} open={open === i}>
                                    <AccordionHeader className='!font-semibold !text-sm !text-[#151517] !border-0 !border-[#fff] hover:!text-blue-700 !text-primary-900' onClick={() => handleOpen(i)} id={content.question.replaceAll(" ", "-")}>
                                        <p>{content.question}</p>
                                    </AccordionHeader>
                                    <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
                                        {content.answer}
                                    </AccordionBody>
                                </Accordion>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Category;
