import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Invitee = () => {
  return (
    <main>
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
<<<<<<< HEAD
            <div className="my-4 grid">
              <label className="text-base font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="JohnDoe@Gmail.com"
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                required
                autocomplete
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
                className="rounded bg-[#1070FF] text-white py-2.5 md:px-3 px-1.5 md:text-lg text-base"
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
=======
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
>>>>>>> bc17d2e15654f702cfba459a10f2c5497fa31b70
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Invitee;
