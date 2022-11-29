import Navbar from "../../components/Navbar";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import Footer from "../../components/Footer";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 5c5a72cb448745edcd9260fe08fc8af53512a968

const EventInviteResponse = () => {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <div className="my-20 md:mx-0 mx-3  flex flex-col items-center justify-center text-center">
        <div className="bg-[#00CC00] h-[55px] w-[55px] rounded-full flex justify-center items-center md:my-5 my-2 text-white">
=======
      <div className="my-20 flex flex-col items-center justify-center text-center">
        <div className="bg-[#00CC00] h-[55px] w-[55px] rounded-full flex justify-center items-center my-5 text-white">
>>>>>>> 5c5a72cb448745edcd9260fe08fc8af53512a968
          <IoCheckmark className="text-white text-3xl" />
        </div>
        <div className="my-5">
          <h2 className="text-2xl my-3 font-semibold">
            Your available date has been recorded
          </h2>
          <p className="max-w-[640px] text-base text-[#898989]">
            You’ll receive a notification and updates to this event by mail. In
            the main time, you can try creating your own events with CatchUp
          </p>
<<<<<<< HEAD
          <Link to={"/"} className="my-10">
            <button className="my-8 bg-[#1070FF] rounded text-white text-lg px-4 py-2.5">
              Give CatchUp a Try
            </button>
          </Link>
=======
          <button className="my-5 bg-[#1070FF] rounded text-white text-xl px-4 py-2.5">
            Give CatchUp a Try
          </button>
>>>>>>> 5c5a72cb448745edcd9260fe08fc8af53512a968
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventInviteResponse;
