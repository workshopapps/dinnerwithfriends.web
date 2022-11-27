import CatchupNumbers from "./CatchupNumbers";
import CatchupPress from "./CatchupPress";
import GetStarted from "./GetStarted";
import Intro from "./Intro";
import Investors from "./Investors";

const AboutUs = ({ dimension }) => {
    return (
        <>
            <Intro />
            <CatchupNumbers />
            <CatchupPress dimension={dimension}/>
            <Investors dimension={dimension}/>
            <GetStarted />
        </>
    )
}

export default AboutUs;