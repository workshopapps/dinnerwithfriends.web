import HelpSearch from "./components/search";

const HelpCenter = ({ data, setActiveLink }) => {

    return (
        <div className="lg:mx-40 md:mx-12 mx-4 lg:py-24 py-12">
            <div className="my-24">
                <h1 className="text-5xl font-black">Help Center</h1>
                <p className="w-2/3 my-4">If you're having trouble using Catch Up, there's a chance we've already adressed the issue. You can always come here to learn how best to use Catch Up.</p>

                <HelpSearch />
            </div>

            <div className="">
                <h4 className="text-xl font-bold my-6">Categories</h4>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 text-primary-900">
                    {
                        data.map(category => {
                            return (
                                <div className="p-3 px-4 bg-[#E7F0FF] hover:bg-green-50 hover:border hover:border-l-primary-500 pb-8">
                                    <div className="flex justify-end">
                                        <img src={category.icon} alt={category.heading} />
                                    </div>
                                    <h3 className="text-xl font-bold my-4">{category.heading}</h3>
                                    <p className="my-6 w-3/4">{category.para}</p>

                                    <a href={`/help/category#${category.link}`} onClick={() => setActiveLink(category.link)} className="p-2 border border-primary-900 rounded w-full flex justify-center hover:bg-primary-900 hover:text-white">Explore</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HelpCenter;
