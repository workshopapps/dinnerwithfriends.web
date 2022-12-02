import Sidebar from "./sideBar";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";

const Category = ({ data, activeLink, setActiveLink, activeCategory }) => {
    const [open, setOpen] = useState(0)

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    }

    return (
        <div className="flex flex-col mx-4 lg:flex-row lg:mx-8 m-5 pt-20">
            <Sidebar data={data} activeLink={activeLink} setActiveLink={setActiveLink} />

            <div className="flex-1">
                <div className="flex p-6 items-center justify-between bg-[#0056D6] text-primary-800">
                    <div>
                        <h1 className="text-3xl font-semibold py-2">{activeCategory[0].heading}</h1>
                        <p className="font-semibold">{activeCategory[0].para}</p>
                    </div>
                    <img src={activeCategory[0].icon} alt={activeCategory[0].heading} />
                </div>

                <div className="md:p-8 p-4 bg-gray-100">
                    {
                        activeCategory[0].contents && activeCategory[0].contents.map((content, i) => {
                            return (
                                <Accordion key={i} open={open === i}>
                                    <AccordionHeader className='!font-semibold !text-xs !text-[#151517] !border-0 !border-[#fff] hover:bg-[#0056D6]' onClick={() => handleOpen(i)}>
                                        {content.question}
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
