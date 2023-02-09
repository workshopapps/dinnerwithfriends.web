export const BottomBar = () => {
    return (
        <div className="p-12 py-10 bg-primary-900 text-white lg:mx-40 md:mx-12 m-4 -translate-y-32 mt-60 mb-0">
            <h1 className="md:w-1/2 text-5xl font-semibold">Couldn't get the help you need</h1>
            <div className="flex flex-wrap items-center justify-between">
                <p className="text-2xl md:my-5 my-12 md:w-4/6 w-full">Visit our FAQ page. You'll find answers to some of the most common questions we get.</p>
                <a href="/faq" className="text-center md:w-60 md:ml-6 w-full py-2 rounded border border-white">Visit FAQ</a>
            </div>
        </div>
    )
}
