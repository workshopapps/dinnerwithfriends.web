import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/CreateEvent/CreateEventNavbar";
import arrow from "../../assets/icons/arrow-down.svg";
import profile from "../../assets/img/profile.svg";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import AddParticipantModal from "../../components/AddParticipantModal";
import { BsPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";
import userServices from "../../services/userServices";
const ViewEvent = () => {
  const [isActive, setIsActive] = useState(false);
  const { setShowModal } = CatchUpEventContextUse();
  const [singleEvent, setSingleEvent] = useState({});
  const [participants, setParticipants] = useState([]);

  const toggleShowAccordion = (id) => {
    if (isActive === id) {
      setIsActive();
    } else {
      setIsActive(id);
    }
  };

  useEffect(() => {
    const eArr = localStorage.getItem("eventsArr");
    const events = JSON.parse(eArr);
    const sEvent = events.find((event) => event._id === id);
    setSingleEvent(sEvent);
    console.log(sEvent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { id } = useParams();
  useEffect(() => {
    const getParticipants = async () => {
      const data = await userServices.getParticipants(id);
      setParticipants(data);
    };
    console.log(participants);
    getParticipants();
  }, []);

  return (
    <>
      <Navbar />
      <div className="font-['DM_Sans'] w-[90%] lg:w-4/5 mx-auto mt-[100px] my-4 sm:max-w-xl md:max-w-2xl sm:border sm:border-slate-300 sm:rounded-md">
        <main className="sm:p-8 mx-auto">
          <section className="text-center py-5 md:py-0">
            <div className="sm:border-b-2 sm:border-dashed sm:border-slate-300 py-5">
              <h1 className="text-[#0056D6] font-semibold text-[1.4rem] lg:text-3xl">
                {singleEvent?.event_title}
              </h1>
            </div>
            <p className="text-gray-600 mx-auto text-xs md:text-sm my-2">
              {singleEvent?.event_description}
            </p>
            <p className="text-gray-600 mx-auto text-xs md:text-sm my-2">
              <span className="font-semibold">Location:</span>{" "}
              {singleEvent?.location}
            </p>
            <p className="text-gray-600 mx-auto text-xs md:text-sm my-2">
              <span className="font-semibold">Event:</span>{" "}
              {singleEvent?.event_type}
            </p>
          </section>
          <div className="flex flex-row justify-between md:items-center my-10">
            <button
              onClick={() => setShowModal(true)}
              className="bg-transparent flex items-center text-[#0056D6]"
            >
              <p className="mr-2 text-sm">Add participant</p>
              <BsPlus />
            </button>

            <aside className="font-medium text-sm  md:mt-0">
              Agreed Date
              {singleEvent?.final_event_date === null ? (
                <span className="bg-[#E7F0FF] text-[#003585] text-xs px-2 py-1 font-semibold rounded ml-1">
                  Not Decided
                </span>
              ) : (
                <span className="bg-[#E7F0FF] text-[#003585] text-xs px-2 py-1 font-semibold rounded ml-1">
                  {singleEvent?.final_event_date}
                </span>
              )}
            </aside>
          </div>

          <section className="flex flex-col justify-center">
            <div className="max-h-[17em] overflow-y-scroll scroll-blue-500 pr-4">
              {participants.map((invitee) => (
                <div
                  onClick={() => toggleShowAccordion(invitee.id)}
                  key={invitee.id}
                  className="py-3 border-b border-gray-200 transition-all"
                >
                  <div className="flex justify-between items-center transition-all">
                    <div className="flex items-center">
                      <img
                        className="rounded-full h-fit w-8 lg:w-10 mr-3"
                        src={profile}
                        alt=""
                      />
                      <div className="space-y-[-3px]">
                        <h4 className="font-semibold text-sm">
                          {participants.indexOf(invitee) + 1}
                          {(participants.indexOf(invitee) + 1) % 10 === 1 ? (
                            <span>st</span>
                          ) : (participants.indexOf(invitee) + 1) % 10 === 2 ? (
                            <span>nd</span>
                          ) : (participants.indexOf(invitee) + 1) % 10 === 3 ? (
                            <span>rd</span>
                          ) : (
                            <span>th</span>
                          )}
                          &#160;
                          {""}
                          Invitee
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm">
                          {invitee.fullname}
                        </p>
                      </div>
                    </div>
                    <img
                      className={
                        isActive === invitee.id
                          ? "w-3 sm:w-4 md:w-5 rotate-180 transition duration-250 ease-in-out cursor-pointer"
                          : "w-3 sm:w-4 md:w-5 transition duration-250 ease-in-out cursor-pointer"
                      }
                      src={arrow}
                      alt=""
                    />
                  </div>
                  {isActive === invitee.id && (
                    <div className="my-3 space-y-1 transition-all">
                      <h5 className="font-medium text-xs mb-3">
                        Selected Date/Time:{" "}
                        <span className="font-normal">
                          {invitee.preferred_date_time}
                        </span>{" "}
                      </h5>
                      <p className="text-gray-500 text-xs font-medium ">
                        Status of Attendance:{" "}
                        <span className="bg-[#D0FFD0] text-[#006600] text-[10px] p-1 rounded ml-1">
                          Accepted
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
        <AddParticipantModal eventId={id} />
      </div>
    </>
  );
};

export default ViewEvent;
