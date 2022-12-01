import React, { useState } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineLike, AiOutlineDislike, AiOutlineUser } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import EventModal from "../../components/EventModal";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";

const EventSummary = () => {
  const { setShowModal } = CatchUpEventContextUse();

  const [email, setEmail] = useState("");
  const [participant, setParticipant] = useState([
    {
      email: "Damijoshua@gmail.com",
      value: "Yes",
    },
    {
      email: "SarahM32492@gmail.com",
      value: "No",
    },
    {
      email: "FaithBala2@gmail.com",
      value: "No",
    },
  ]);
  const addParticipant = (email) => {
    const newParticipant = [...participant, { email, value: "Yes" }];
    setParticipant(newParticipant);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    addParticipant(email);
    setEmail("");
  };
  return (
    <div>
      <CreateEventNavbar />
      <div className="mt-2 md:mx-14 mx-5 my-10">
        <h2 className="mt-10 text-3xl font-bold">Event Summary</h2>
        <div className="mt-4 border w-full p-5 rounded-lg shadow text-[#59595B]">
          <h5 className="text-2xl font-bold">Girls Monthly Trip</h5>
          <div className="grid gap-y-3 mt-4">
            <div className="flex items-center">
              <CiLocationOn className="text-xl" />
              <p className="text-base font-normal ml-2">
                21 Tunji Street, Lagos
              </p>
            </div>
            <div className="flex items-center">
              <CiCalendar className="md:text-xl text-5xl" />
              <p className="text-base font-normal ml-2">
                12th November 2022 - 20th November 2022 9:30 - 11:30
              </p>
            </div>
            <div className="flex items-center">
              <CgMenuLeftAlt className="md:text-xl text-5xl" />
              <p className="text-base font-normal ml-2">
                Highly anticipated girls weekend. Time away with the girls. Fun,
                frugal, no spend amazing Bring gifts, everyone.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between my-5">
          <p className="md:text-2xl text-xl font-bold">Availability</p>
          <div className="flex">
            <div className="flex mr-4 items-center">
              <AiOutlineLike className="text-2xl text-[#006600]" />
              <p className="text-xs ml-1.5">Yes</p>
            </div>
            <div className="flex items-center">
              <AiOutlineDislike className="text-2xl text-[#CC0000]" />
              <p className="text-xs ml-1.5">No</p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-start justify-between my-5">
          <p className="text-lg font-bold md:mr-7">Participant(3)</p>
          <button
            className="bg-transparent flex items-center text-[#1070FF]"
            onClick={() => {
              setShowModal(true);
            }}
          >
            <p className="mr-2 md:text-base text-sm">Add participant</p>
            <BsPlus />
          </button>
          <EventModal />
        </div>
        <div className="w-full my-5 bg-[#E7F0FF] flex justify-betweenn py-2 md:px-3 px-1">
          <input
            type="email"
            placeholder="Add a participant email"
            className="outline-none border-none h-full bg-transparent py-3 md:px-4 px-2 w-11/12 text-[#7A6F6F] md:text-base text-sm md:placeholder:text-base placeholder:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-[#1070FF] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
        <div className="my-12">
          {participant.map((invite, index) => (
            <div className="flex justify-between mb-4" key={index}>
              <div className="flex text-[#59595B] items-center">
                <AiOutlineUser className="text-xl" />
                <p className="font-normal md:text-base text-sm md:ml-3 ml-2">
                  {invite.email}
                </p>
              </div>
              <div className="flex items-center md:mr-8">
                <p className="text-xs ml-1.5">{invite.value}</p>
                {invite.value === "Yes" ? (
                  <AiOutlineLike className="text-2xl text-[#006600]" />
                ) : (
                  <AiOutlineDislike className="text-2xl text-[#CC0000]" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="my-6 flex justify-between items-center">
          <Link
            to="/dashboard/upcoming_events"
            className="text-xl font-semibold"
          >
            Back
          </Link>
          <Link
            to={"/create_event"}
            className="rounded flex md:px-6 px-4 py-2.5 bg-[#1070FF] text-white items-center"
          >
            <p className="md:text-xl text-base font-medium md:mr-2">
              Create invite
            </p>
            <BsPlus className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
