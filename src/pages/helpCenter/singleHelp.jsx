import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./components/sideBar";

const SingleHelp = ({ data, activeLink, setActiveLink }) => {
    const hash = useLocation().hash.slice(1);
    const searchQuery = useLocation().search.slice(1).replaceAll("-", " ");

    useEffect(() => {
        setActiveLink(hash)
    })

    return (
        <div className="flex flex-col mx-4 lg:flex-row lg:mx-8 m-5 pt-20">
            <Sidebar data={data} activeLink={activeLink} setActiveLink={setActiveLink} />
            {
            data.filter(item => item.link === activeLink).map(contents => {
                return (
                <div className="flex-1">
                    <p className="text-gray-500 py-2 capitalize text-sm ml-2">{hash.replaceAll("_", " ")} <span className="text-2xl mx-1">&rsaquo;</span> {searchQuery}</p>

                    <div className="bg-gray-100 text-primary-800 md:px-16 md:py-10 p-4 w-full">
                        {
                            contents.contents.filter(element => element.question === searchQuery).map(content => {
                                return (
                                    <div className="">
                                        <h1 className="text-3xl font-semibold py-2">{content.question}</h1>
                                        <p className="font-semibold">{content.answer}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )})
            }
        </div>
    )
}

export default SingleHelp;