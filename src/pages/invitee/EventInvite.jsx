import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const EventInvite = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-28 mb-10 mx-auto md:mx-32">
        <div className="mx-2 md:mx-0 text-center w-full">
          <h1 className="text-2xl font-bold md:text-3xl">Hello, there.</h1>
          <p className="leading-6 text-gray-600 font-sm">
            You have been invited to dinner by{" "}
            <span className="text-[#0056D6] font-bold"> Mathew Mathais.</span>
            <br /> You can view the details below..
          </p>
        </div>
        <div className="my-8 border py-5 rounded-lg flex justify-center items-center ">
          <form>
            <div className="my-4 grid">
              <label className="text-base font-semibold mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                required
              />
            </div>
            <div className="my-4 grid">
              <label className="text-base font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="JohnDoe@gmail.com"
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                required
              />
            </div>
            <div className="my-4 grid">
              <label className="text-base font-semibold mb-1">
                Preferred Date & Time
              </label>
              <input
                type="datetime-local"
                placeholder="17/11/2022 - 3pm"
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                required
              />
            </div>
            <div className="my-7 flex justify-between">
              <Link
                to={"/event_invite/event_invite_response"}
                className="rounded bg-[#0056D6] text-white py-2.5 md:px-3 px-1.5 md:text-lg text-base"
              >
                Accept Invite
              </Link>
              <Link
                to={"/"}
                className="rounded border border-[#0056D6] text-[#0056D6] py-2.5 md:px-3 px-1.5 md:text-lg text-base"
              >
                Decline Invite
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventInvite;
