const Intro = () => {
    return (
        <section className="md:h-[532px] w-[85vw] m-auto mt-8 pt-28 pb-12 grid gap-8 md:flex md:justify-around md:items-center">
            <p className="text-2xl md:text-5xl font-bold md:w-[500px] md:h-[375px]">
                Helping you establish and maintain better relationships with
                <span className="text-[#0056D6]"> those who matter most</span>
            </p>
            <div className="text-base md:text-xl font-semibold md:font-bold md:w-[620px] grid gap-7">
                <h1 className="text-[#0056D6]">Relationships are everything. </h1>
                <p className="text-[#151517]"> Life can quickly get in the way of maintaining these goals, from busy schedules to having kids and travelling for work. Getting together for dinner with your friends is becoming difficult these days.
                </p>
                <p className="text-[#151517]">
                    Because of this, we built Catchup. By reimagining our communication platform, we make each friend's schedule accessible. CatchUp has given nearly 10,000 people the opportunity to manage their relationships.
                </p>
            </div>
        </section>
    )
};

export default Intro
