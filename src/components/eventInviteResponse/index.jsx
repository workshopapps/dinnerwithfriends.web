import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { Link } from "react-router-dom";

export const EventInviteResponse = ({modal}) => {
  return (
    <div className={`${modal ?'fixed top-0 right-0 left-0 bottom-0 w-screen z-20  bg-black bg-opacity-50': 'hidden'}`}>
      <div className='w-11/12 lg:w-2/5 ml-auto mr-auto relative mt-20 flex justify-center items-center flex-col bg-white py-4 rounded-2xl px-[20px] md:px-[40px]'>
        <div className="bg-[#00CC00] h-[55px] w-[55px] rounded-full flex justify-center items-center md:my-5 my-2 text-white">
          <IoCheckmark className="text-white text-3xl" />
        </div>
        <div className="my-2 flex flex-col justify-center items-center">
          <h2 className="text-xl text-center md:text-2xl my-3 font-semibold">
            Your response has been recorded
          </h2>
          <p className="max-w-[640px] text-base text-[#898989] text-center">
            You’ll receive a notification and updates to this event by mail. In
            the main time, you can try creating your own events with CatchUp
          </p>
          <Link to={"/"} className="my-5">
            <button className="my-8 bg-[#0056D6] rounded text-white text-lg px-4 py-2.5">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
