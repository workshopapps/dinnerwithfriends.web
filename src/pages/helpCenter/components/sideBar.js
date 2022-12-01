import HelpSearch from "./search";


const Sidebar = ({ data, activeLink, setActiveLink }) => {

<<<<<<< HEAD
    return (        
=======
    return (
>>>>>>> bc17d2e15654f702cfba459a10f2c5497fa31b70
        <div className="lg:w-80 sm:w-auto lg:sticky md:mr-8 lg:h-screen top-0 static px-2 mt-10 my-20">
            <div className="md:-mt-10">
                <HelpSearch />
            </div>
            <h3 className="text-xl font-bold my-8">Categories</h3>
            <ul>
            {data.map((category) => {
                return (
                <li className="my-5" key={category.id}>
                    <a
<<<<<<< HEAD
                    className={`my-4 font-medium text-sm hover:text-blue-800 ${
                        activeLink === category.link ? "text-blue-700" : ""
=======
                    className={`my-4 font-medium text-base hover:text-blue-800 ${
                        activeLink === category.link ? "text-[#0056D6]" : ""
>>>>>>> bc17d2e15654f702cfba459a10f2c5497fa31b70
                    }`}
                    href={`?${""}#${category.link}`}
                    onClick={() => setActiveLink(category.link)}
                    >
                    {category.heading}
                    </a>
                </li>
                );
            })}
            </ul>
        </div>
    )
}

<<<<<<< HEAD
export default Sidebar;
=======
export default Sidebar;
>>>>>>> bc17d2e15654f702cfba459a10f2c5497fa31b70
