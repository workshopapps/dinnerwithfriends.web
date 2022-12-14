import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import people from "./assets/people.jpg";
import blueArrow from "./assets/bluearrow.svg";
import curlyArrow from "./assets/mobilecurlyarrow.svg";
import arrowRight from "./assets/ArrowRightOutline.svg";

const AboutUsPage = () => {
  const [dimension, setDimension] = useState({
    width: 0,
  });

  const handleResize = () => {
    setDimension({
        width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="font-DMSans">
        <Navbar />
        <main dimension={dimension}>
          <section className="bg-[''] px-6 sm:px-10 md:px-16 mt-20 mb-12 md:grid md:grid-cols-2 md:gap-8 md:my-48">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-[2.4em] lg:text-[48px] md:leading-[1.1] text-[#1E1E1E] my-4">Helping you establish and maintain better relationships with <span className="text-[#0056D6]">those who matter most</span></h1>
            <div className="space-y-4">
              <h3 className="text-[#0056D6] lg:w-5/6 font-semibold text-lg sm:text-xl my-3">Relationships are everything</h3>
              <p className="text-gray-800">Life can quickly get in the way of maintaining these goals, from busy schedules to having kids and travelling for work. Getting together for dinner with your friends is becoming difficult these days.</p>
              <p className="text-gray-800">Because of this, we built CatchUp. By reimagining our communication platform, we make each friend's schedule accessible. CatchUp has given nearly 10,000 people the opportunity to manage their relationships.</p>
            </div>
          </section>
          {/* catchup in the press */}
          <section className="px-6 sm:px-10 md:px-16">
            <h1 className="text-center text-3xl md:text-xl my-6 font-bold">CatchUp in the Press</h1>
            <div className="flex gap-12 flex-col-reverse md:flex-row md:my-12">
              <div className="space-y-4 md:space-y-6 my-6 flex-1">
                <div className="space-y-1">
                  <span className="text-gray-800">8 November, 2022 . <span className="font-medium">Tech Crunch</span> </span>
                  <h3 className="font-semibold">6 Reasons CatchUp is THAT platform for keeping up with your friends</h3>
                  <button href="#" className="text-[#0056d6] flex items-center">Read Article <img className="w-4 ml-1" src={blueArrow} alt="" /></button>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-800">8 November, 2022 . <span className="font-medium">Techpoint Africa</span> </span>
                  <h3 className="font-semibold">The Future of Event Scheduling</h3>
                  <button href="#" className="text-[#0056d6] flex items-center">Read Article <img className="w-4 ml-1" src={blueArrow} alt="" /></button>
                </div>
                <div className="space-y-1">
                  <span className="text-gray-800">8 November, 2022 . <span className="font-medium">Tech Cabal</span> </span>
                  <h3 className="font-semibold">Platforms for you & your friends to keep up with</h3>
                  <button href="#" className="text-[#0056d6] flex items-center">Read Article <img className="w-4 ml-1" src={blueArrow} alt="" /></button>
                </div>
                <button className="bg-[#0056d6] flex items-center rounded text-white px-3 py-2">Read all <img className="ml-1" src={arrowRight} alt="" /></button>
              </div>
              <div className="flex-1">
                <div className="relative w-fit mx-auto my-8">
                  <img src={curlyArrow} className="absolute right-5 -top-8" alt="" />
                  <img className="w-full max-w-sm md:max-w-md" src={people} alt="" />
                </div>
              </div>
              
            </div>
            
          </section>
          <section className="px-6 sm:px-10 md:px-16 flex flex-col items-center justify-center text-center h-[60vh] bg-[#E7F0FF]">
            <h1 className="text-3xl md:text-5xl w-2/3 font-bold my-8">Organize your next social gathering, on <span className="text-[#0056d6]">Catch</span>Up</h1>
            <p className="text-[#717172]">Look no further, Get started today</p>
            <button className="bg-[#0056d6] flex items-center rounded text-white px-3 py-2 my-4 mx-auto">Get Started <img className="ml-1" src={arrowRight} alt="" /></button>
          </section>
        </main>
        <Footer />
    </div>

  );
}

export default AboutUsPage;