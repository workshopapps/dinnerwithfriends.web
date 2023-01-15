import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer/index";
import F1 from "../../pages/Features-page/F1.png";
import F2 from "../../pages/Features-page/F2.png";
import F3 from "../../pages/Features-page/F3.png";
import F4 from "../../pages/Features-page/F4.png";
import Arrow from "../../pages/Features-page/arrow.png";

function Features() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center ">
        <div className="w-3/5 pt-32 md:hidden">
        <img src={F1} alt="mobile home" />
        </div>
      <section className="flex flex-col space-y-20 px-10 md:flex-row md:items-center md:justify-center md:space-x-12 md:pt-28">
          <div>
            <img className="hidden md:block w-80" src={F3} alt="Event Scheduling" />
          </div>
          <div className="flex flex-col items-center justify-center mb-20 md:items-start md:pb-20 md:w-96 w-60">
            <h1 className="font-bold md:text-2xl text-1xl text-center md:text-start mb-5">
              Event Scheduling
            </h1>
            <p className="text-gray-700 text-center md:text-start text-sm md:w-full">
            CatchUp makes hanging out with friends as easy as possible—no more waiting for someone to call you back or trying to remember exactly when they're free. It's also great for groups who want to plan ahead and coordinate their schedules so they can spend more time together.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#0056D6] mt-5 text-white px-5 py-2 rounded flex flex-row items-center justify-between space-x-5">
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="arrow" />{" "}
            </Link>
          </div>
        </section>
        <section className=" flex flex-col-reverse px-10 space-y-20 md:py-16 md:flex-row md:items-center md:justify-center md:space-x-20 md:pb-0">
          <div className="flex flex-col items-center justify-center md:items-start md:w-96">
            <h1 className="font-bold mb-5 text-1xl md:text-2xl text-center md:text-start">
              Availability Preferences
            </h1>
            <p className=" text-sm text-gray-700 text-center md:text-start">
            With this feature, you can specify a range of days on which you'll be available for a hangout and let those who have been invited choose the one that works best for them.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#0056D6] mt-5 text-white px-5 py-2 rounded flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="arrow" />{" "}
            </Link>
          </div>
          <div className="md:pb-20">
            <img className="hidden md:block w-80" src={F1} alt="Availability Preferences"/>
          </div>
        </section>
        <section className="flex px-10 pb-24 space-y-20 md:flex-row md:items-center md:space-x-32 md:justify-center">
        <div>
            <img className="hidden md:block w-80" src={F2} alt="Sync Calendar" />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:w-96 md:pb-40">
            <h1 className="font-bold md:text-2xl text-1xl text-center md:text-start mb-5">
              Sync Calendar
            </h1>
            <p className="text-sm text-center md:text-start text-gray-700">
            This is essential for staying organized. You can keep track of all events you create using our calendar sync feature.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#0056D6] mt-5 text-white px-5 py-2  rounded flex flex-row items-center justify-between space-x-5">
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="" />{" "}
            </Link>
          </div>
        </section>
        <section className="flex px-10 pb-16 space-y-20 md:flex-row md:items-center md:space-x-32 md:justify-center md:pb-0">
          <div className="flex flex-col items-center justify-center md:items-start md:w-96 ">
            <h1 className="font-bold md:text-2xl text-1xl text-center md:text-start mb-5">
              Get Notifications
            </h1>
            <p className="text-sm text-center md:text-start text-gray-700">
            You'll never have to worry about forgetting an occasion or skipping a social gathering again. CatchUp will keep you informed.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#0056D6] mt-5 text-white px-5 py-2  rounded flex flex-row items-center justify-between space-x-5">
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="" />{" "}
            </Link>
          </div>
          <div className="md:pb-40">
            <img className="hidden md:block w-80" src={F4} alt="Sync Calendar" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Features;
