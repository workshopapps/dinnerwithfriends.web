import { ReactComponent as Abeg } from "../assets/Abeg.svg";
import { ReactComponent as AbegWeb } from "../assets/Abeg-web.svg";
import { ReactComponent as AngelList } from "../assets/AngelList.svg";
import { ReactComponent as AngelListWeb } from "../assets/AngelList-web.svg";
import { ReactComponent as YCombinator } from "../assets/YCombinator.svg";
import { ReactComponent as YCombinatorWeb } from "../assets/Y Combinator-web.svg";
import { ReactComponent as Calendly } from "../assets/Calendly.svg";
import { ReactComponent as CalendlyWeb } from "../assets/Calendly-web.svg";

const Investors  = ({ dimension }) => {
    return (
        <section className="grid mb-20 w-[85%] mx-auto">
            <h4 className="font-bold text-2xl md:text-5xl justify-self-center">Our Investors</h4>
            <div className="flex flex-wrap gap-10 justify-around md:gap-5 md:justify-around items-center pt-11 md:pt-16">
                {dimension.width <= 1280 ? <Abeg /> : <AbegWeb /> }
                {dimension.width <= 1280 ? <AngelList /> : <AngelListWeb /> }
                {dimension.width <= 1280 ? <YCombinator /> : <YCombinatorWeb /> }
                {dimension.width <= 1280 ? <Calendly /> : <CalendlyWeb /> }
            </div>
        </section>
    )
}

export default Investors;