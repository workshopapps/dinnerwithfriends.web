import Navbar from "../../components/Navbar";
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import Footer from "../../components/Footer";

const EventInviteResponse = () => {
  return (
    <div>
      <Navbar />
      <div className="my-20 flex flex-col items-center justify-center text-center">
        <div className="bg-[#00CC00] h-[55px] w-[55px] rounded-full flex justify-center items-center my-5 text-white">
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
          <button className="my-5 bg-[#1070FF] rounded text-white text-xl px-4 py-2.5">
            Give CatchUp a Try
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventInviteResponse;
