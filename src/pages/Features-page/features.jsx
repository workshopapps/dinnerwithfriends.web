import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import F1 from "../../pages/Features-page/F1.png";
import F2 from "../../pages/Features-page/F2.png";
import F3 from "../../pages/Features-page/F3.png";
import Arrow from "../../pages/Features-page/arrow.png";
function Features() {
  return (
    <div>
        <Navbar />
      <article className=" flex flex-col items-center justify-center ">
        <section className=" flex flex-col px-10 py-32 space-y-20  md:flex-row md:items-center md:justify-center md:space-x-20  md:p-20">
          <div>
            <img className="w-80" src={F1} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start  md:w-96   ">
            <h1 className="font-bold mb-5 text-1xl md:text-2xl text-center md:text-start">Availability Preferences</h1>
            <p className=" text-sm text-gray-700 text-center  md:text-start">
              One of our most important feautures at catch up, is the
              availability prefrences where your friends can notify you the host
              of there availabilty for the event you scheduled. You would get a
              notification in real time on our platform and in your mail.
            </p>
            <Link
              to="/sign_up"
              className="bg-[#0056D6] mt-5 text-white px-5 py-2  rounded
flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="arrow" />{" "}
            </Link>
          </div>
        </section>
        <section className="flex flex-col-reverse  px-10 pb-32 space-y-40 md:flex-row md:items-center md:space-x-32 md:px-52 md:justify-center md:py-0 bg-gray-200 ">
          <div className="flex flex-col items-center justify-center md:items-start md:w-96 ">
            <h1 className="font-bold md:text-2xl text-1xl text-center md:text-start mb-5">Sync Calendar</h1>
            <p className="text-gray-800 text-sm text-center md:text-start">
              We have made it easier for our users to sync there google calendar
              to our platform through the channel we have created , users can
              set reminders on there google calendar and not miss out on events
              from there friends.
            </p>
            <Link
              to="/sign_up"
              className="bg-[#0056D6] mt-5 text-white px-5 py-2  rounded
flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className=" md:w-3   " src={Arrow} alt="" />{" "}
            </Link>
          </div>
          <div>
            <img className="w-80 mb-20 wd:mb-0" src={F2} alt="" />
          </div>
        </section>
        <section className="flex flex-col space-y-20 px-10 py-32 md:flex-row md:items-center md:justify-center md:space-x-12 md:pt-10 md:pb-40  ">
          <div className="">
            <img className="w-80" src={F3} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center md:items-start md:w-96 w-60">
            <h1 className="font-bold md:text-2xl text-1xl text-center md:text-start mb-5">Event Scheduling</h1>
            <p className="text-gray-700 text-center md:text-start text-sm md:w-56">
              Catch up enables you to schedule event for your friends, you set
              the preferred date and time, and send out invites to your friends,
              which they are later notified of the event seamlessly.
            </p>
            <Link
              to="/sign_up"
              className="bg-[#0056D6] mt-5 text-white px-5 py-2  rounded
flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className="w-3" src={Arrow} alt="arrow"/>{" "}
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}

export default Features;
