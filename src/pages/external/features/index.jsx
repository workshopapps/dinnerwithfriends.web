import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import {Footer} from "../../../components";
import F1 from "../../../assets/img/F1.png";
import F2 from "../../../assets/img/F2.png";
import F3 from "../../../assets/img/F3.png";
import F4 from "../../../assets/img/F4.png";
import Arrow from "../../../assets/img/arrow.png";

export const Features = () => {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col px-[32px] md:px-[0] gap-y-[64px] md:gap-y-[0] justify-center md:justify-start items-center md:items-stretch md:pt-[90px] md:pb-0 pb-[64px]">
        <div className="pt-32 md:hidden">
          <img src={F1} alt="mobile home" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:px-[180px] md:pb-[90px] md:pt-28 ">
          <div>
            <img className="hidden md:block w-80" src={F3} alt="Event Scheduling" />
          </div>
          <div className="flex flex-col items-center justify-center  md:items-start md:w-96">
            <h2 className="md:font-bold md:text-2xl text-[24px] font-medium text-center md:text-start mb-5">
              Event Scheduling
            </h2>
            <p className="text-gray-700 text-center md:text-start text-sm md:w-full">
            CatchUp makes hanging out with friends as easy as possible—no more waiting for someone to call you back or trying to remember exactly when they're free. It's also great for groups who want to plan ahead and coordinate their schedules so they can spend more time together.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#1070ff] mt-5 text-white px-5 py-2 rounded flex flex-row items-center justify-between space-x-5">
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="arrow" />{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col-reverse   md:flex-row md:items-center md:justify-between md:bg-[#FAFAFA] md:px-[180px] md:py-[90px]">
          <div className="flex flex-col items-center justify-center md:items-start md:w-96">
            <h2 className="md:font-bold mb-5 text-[24px] font-medium md:text-2xl text-center md:text-start">
              Availability Preferences
            </h2>
            <p className=" text-sm text-gray-700 text-center md:text-start">
            With this feature, you can specify a range of days on which you'll be available for a hangout and let those who have been invited choose the one that works best for them.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#1070ff] mt-5 text-white px-5 py-2 rounded flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="arrow" />{" "}
            </Link>
          </div>
          <div className="md:pb-20">
            <img className="hidden md:block w-80" src={F1} alt="Availability Preferences"/>
          </div>
        </div>
        <div className="flex md:px-[180px] md:py-[90px]  md:flex-row md:items-center md:justify-between">
          <div>
            <img className="hidden md:block w-80" src={F2} alt="Sync Calendar" />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:w-96">
            <h2 className="md:font-bold md:text-2xl text-[24px] font-medium text-center md:text-start mb-5">
              Sync Calendar
            </h2>
            <p className="text-sm text-center md:text-start text-gray-700">
            This is essential for staying organized. You can keep track of all events you create using our calendar sync feature.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#1070ff] mt-5 text-white px-5 py-2  rounded flex flex-row items-center justify-between space-x-5">
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="" />{" "}
            </Link>
          </div>
        </div>
        <div className="md:bg-[#FAFAFA] md:px-[180px] md:py-[90px] flex  md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center justify-center md:items-start md:w-96 ">
            <h2 className="md:font-bold md:text-2xl text-[24px] font-medium text-center md:text-start mb-5">
              Get Notifications
            </h2>
            <p className="text-sm text-center md:text-start text-gray-700">
              You'll never have to worry about forgetting an occasion or skipping a social gathering again. CatchUp will keep you informed.
            </p>
            <Link
              to="/sign_up"
              className="hidden md:flex bg-[#1070ff] mt-5 text-white px-5 py-2  rounded flex flex-row items-center justify-between space-x-5">
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="" />{" "}
            </Link>
          </div>
          <div className="md:pb-40">
            <img className="hidden md:block w-80" src={F4} alt="Sync Calendar" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
