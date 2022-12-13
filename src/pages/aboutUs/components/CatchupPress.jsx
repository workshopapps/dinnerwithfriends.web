import people from "../assets/people.jpg";
import peopleWeb from "../assets/people-web.jpg";
import { ReactComponent as Arrow } from "../assets/ArrowRightOutline.svg";
import { ReactComponent as BlueArrow } from "../assets/bluearrow.svg";
import { ReactComponent as MobileCurlyArrow } from "../assets/mobilecurlyarrow.svg";
import { ReactComponent as WebCurlyArrow } from "../assets/webcurlyarrow.svg";

const CatchupPress = ({ dimension }) => {
    return (
        <section className="grid mt-20 pb-20 w-[85%] mx-auto">
            <h3 className="font-bold text-2xl justify-self-center md:text-5xl mb-12">Catch Up in the Press</h3>
            {dimension.width <= 1024 ?
                <div className="relative justify-self-center">
                    <MobileCurlyArrow className="absolute right-0 bottom-[310px] hidden md:block" />
                    <img src={people} alt="people" className="mb-12"/>
                </div>
            : null}
            <div className="flex justify-around justify-self-center">
                <div className="grid gap-3">
                    <div className="grid gap-3 h-28 md:h-40">
                        <span className="text-xs md:text-base text-[#1E1E1E]">8 November, 2022 . Tech Crunch</span>
                        <p className="font-bold text-sm md:text-2xl w-[70vw] md:w-[630px]">6 reasons Catch Up is  THAT platform for keeping up with your friends</p>
                        <button className="text-[#0056D6] text-sm lg:text-base flex gap-2"> Read article <BlueArrow /></button>
                    </div>
                    <div className="grid gap-3 h-28 md:h-40">
                        <span className="text-sm md:text-base text-[#1E1E1E]">8 November, 2022 . Tech Crunch</span>
                        <p className="font-bold text-sm md:text-2xl w-[70vw] md:w-[630px]">The Future of Event Scheduling</p>
                        <button className="text-[#0056D6] text-sm lg:text-base flex gap-2" >Read Article <BlueArrow /></button>
                    </div>
                    <div className="grid gap-3 h-28 md:h-40">
                        <span className="text-sm md:text-base text-[#1E1E1E]">8 November, 2022 . TechCabal</span>
                        <p className="font-bold text-sm md:text-2xl w-[70vw] md:w-[630px]">Platfroms for you & your friends to keep up with</p>
                        <button className="text-[#0056D6] text-sm lg:text-base flex gap-2">Read article <BlueArrow /></button>
                    </div>
                    <button type="button" className="bg-[#0056D6] justify-self-center  text-white w-28 h-11 md:w-40 md:h-14 flex justify-center items-center gap-3 mt-5 rounded-md">
                        Read All <Arrow />
                    </button>
                </div>
                {dimension.width >= 1024 ?
                    <div className="grid relative">
                        <WebCurlyArrow className="absolute right-2 bottom-[450px]"/>
                        <img src={peopleWeb} alt="people"className="self-center" />
                    </div>
                    : null}
            </div>
        </section>
    )
}

export default CatchupPress;
