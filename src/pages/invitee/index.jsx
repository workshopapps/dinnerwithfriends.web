import React from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { CiLocationOn, CiStopwatch, CiCalendar } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Invitee = () => {
  return (
    <div>
      <Navbar />
      <div className="my-28 mx-auto md:mx-32">
        <div className="mx-3 md:mx-0 text-center ">
          <h1 className="text-3xl mb-2 font-bold md:text-5xl md:mb-4">
            Hello, there.
          </h1>
          <p className="leading-6 text-gray-600 font-sm">
            You have been invited to dinner by{" "}
            <span className="text-[#0056D6] font-bold"> Mathew Mathais.</span>
            <br /> You can view the details below..
          </p>
        </div>
        <div className="w-[95%] my-10 mb-20 mx-4 md:flex md:mx-0">
          <div className="md:w-1/2">
            <h1 className="text-xl mb-2 font-bold md:text-2xl md:mb-4">
              Event Summary
            </h1>
            <p className="leading-6 text-gray-600 font-bold font-sm">Dinner</p>
            <div>
              <span className="flex mt-3">
                {" "}
                <CiLocationOn className="mr-4 text-[25px]" />
                Location:
                <span className="font-bold">
                  {" "}
                  Raddison blues, 21 Tunji Street, Ikeja, Lagos
                </span>{" "}
              </span>

              <span className="flex mt-3">
                {" "}
                <CiCalendar className="mr-4 text-[25px]" />
                Agreed Date:
                <span className="font-bold"> November 20, 2022</span>{" "}
              </span>

              <span className="flex mt-3">
                {" "}
                <CiStopwatch className="mr-4 text-[25px]" />
                Host Selected Time:
                <span className="font-bold"> 6:00 pm - 10:00 pm</span>{" "}
              </span>

              <span className="flex mt-3">
                {" "}
                <HiOutlineMenuAlt1 className="mr-4 text-[25px]" />
                Dinner with
                <span className="font-bold">
                  {" "}
                  Kolavic and few of his friends
                </span>{" "}
              </span>
            </div>
          </div>
          <div className="md:w-1/2 md:px-8">
            <form className=" my-10 md:mt-0 text-[#4B4B4C] font-normal [&>input]:mt-2 [&>input]:w-full [&>input]:mb-3.5">
              <div className="relative w-full mb-4 ">
                <label className="pb-0 mb-2 font-bold" htmlFor="email">
                  Full Name
                </label>

                <input
                  className="border border-gray-600 block w-full h-10 rounded-md px-3"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative w-full mb-4 ">
                <label className="pb-0 mb-2 font-bold" htmlFor="email">
                  Email
                </label>

                <input
                  className="border border-gray-600 block w-full h-10 rounded-md px-3"
                  placeholder="JohnDoe@gmail.com"
                />
              </div>

              <div className="flex">
                <button
                  className="mr-4 transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-white bg-[#0056D6] w-full h-11 rounded-lg"
                  type="submit"
                >
                  Accept Invite
                </button>
                <button
                  className="ml-4 transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-[#0056D6] border border-[#0056D6] w-full h-11 rounded-lg"
                  type="submit"
                >
                  Decline Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invitee;
