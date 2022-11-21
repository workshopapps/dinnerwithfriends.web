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
      <article className="mt-32 flex flex-col  space-y-10">
        <section className=" flex flex-col  space-y-20  md:flex-row items-center justify-between  p-20">
          <div>
            <img className="w-80" src={F1} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center md:w-96 w-60  ">
            <h1 className="font-bold">Availability Preferences</h1>
            <p className="">
              One of our most important feautures at catch up, is the
              availability prefrences where your friends can notify you the host
              of there availabilty for the event you scheduled. You would get a
              notification in real time on our platform and in your mail.
            </p>
            <Link
              to="/sign_up"
              className="bg-blue-600 mt-5 text-white px-5 py-2  rounded  
flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className="w-3" src={Arrow} />{" "}
            </Link>
          </div>
        </section>
        <section className="flex flex-col-reverse space-y-40 md:flex-row items-center justify-between px-20 bg-slate-100 p-20">
          <div className="flex flex-col items-start justify-center md:w-96 w-60 ">
            <h1 className="font-bold">Sync Calendar</h1>
            <p>
              We have made it easier for our users to sync there google calendar
              to our platform through the channel we have created , users can
              set reminders on there google calendar and not miss out on events
              from there friends.
            </p>
            <Link
              to="/sign_up"
              className="bg-blue-600 mt-5 text-white px-5 py-2  rounded  
flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className="w-3 " src={Arrow} alt="" />{" "}
            </Link>
          </div>
          <div>
            <img className="w-80 mb-20 wd:mb-0" src={F2} alt="" />
          </div>
        </section>
        <section className="flex flex-col space-y-20 md:flex-row items-center justify-between p-20">
          <div className="">
            <img className="w-80" src={F3} alt="" />
          </div>
          <div className="flex flex-col items-start justify-center md:w-96 w-60">
            <h1 className="font-bold">Event Scheduling</h1>
            <p>
              Catch up enables you to schedule event for your friends, you set
              the preferred date and time, and send out invites to your friends,
              which they are later notified of the event seamlessly.
            </p>
            <Link
              to="/sign_up"
              className="bg-blue-600 mt-5 text-white px-5 py-2  rounded  
flex flex-row items-center justify-between space-x-5 "
            >
              <p>Get Started</p>
              <img className="w-3" src={Arrow} />{" "}
            </Link>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}

export default Features;
