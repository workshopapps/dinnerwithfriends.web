const CatchupNumbers = () => {
    return (
        <section className="text-[#151517] mt-8 md:mt-20 grid gap-10 lg:gap-20 w-[85%] mx-auto">
            <h2 className="text-2xl md:text-5xl font-bold justify-self-center">Catch Up in Numbers</h2>
            <div className="grid justify-center md:grid-cols-2 xl:flex md:justify-around pb-20 gap-8">
                <div className="justify-self-center grid text-center">
                    <span className="text-[#0056D6] text-xl md:text-5xl font-bold justify-self-center">9000+</span>
                    <p className="md:font-bold text-xl md:text-2xl">Active users</p>
                </div>
                <div className="justify-self-center grid text-center">
                    <span className="text-[#0056D6] text-xl md:text-5xl font-bold justify-self-center">100+</span>
                    <p className="md:font-bold text-xl md:text-2xl">countries using catchUp</p>
                </div>
                <div className="justify-self-center grid text-center">
                    <span className="text-[#0056D6] text-xl md:text-5xl font-bold justify-self-center">$5M</span>
                    <p className="md:font-bold text-xl md:text-2xl">in funding from firms & investors</p>
                </div>
                <div className="justify-self-center grid text-center">
                    <span className="text-[#0056D6] text-xl md:text-5xl font-bold justify-self-center">70%</span>
                    <p className="md:font-bold text-xl md:text-2xl">User retention rate</p>
                </div>
            </div>
        </section>
    )
}

export default CatchupNumbers;
