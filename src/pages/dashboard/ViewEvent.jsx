import React from "react";
import { useState } from "react";
import Navbar from "../../components/CreateEvent/CreateEventNavbar";
import arrow from "../../assets/icons/arrow-down.svg";
import inviteeImg1 from "../../assets/img/inviteeImg1.png";
import inviteeImg2 from "../../assets/img/inviteeImg2.png";
import inviteeImg3 from "../../assets/img/inviteeImg3.png";
import inviteeImg4 from "../../assets/img/inviteeImg4.png";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import AddParticipantModal from "../../components/AddParticipantModal";
import { BsPlus } from "react-icons/bs";

const ViewEvent = () => {
  const [isActive, setIsActive] = useState(false);
  const { setShowModal } = CatchUpEventContextUse();

  const invitees = [
    {
      id: 1,
      image: inviteeImg1,
      position: "1st Invitee",
      name: "Johnson Joshua",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
    {
      id: 2,
      image: inviteeImg2,
      position: "2nd Invitee",
      name: "John Maklinscout",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
    {
      id: 3,
      image: inviteeImg3,
      position: "3rd Invitee",
      name: "Felix Sydney",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
    {
      id: 4,
      image: inviteeImg4,
      position: "4th Invitee",
      name: "Felicia Scout",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
    {
      id: 5,
      image: inviteeImg3,
      position: "5th Invitee",
      name: "Johnson Joshua",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
    {
      id: 6,
      image: inviteeImg2,
      position: "6th Invitee",
      name: "Felix Sydney",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
    {
      id: 7,
      image: inviteeImg1,
      position: "7th Invitee",
      name: "Johnson Joshua",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
    {
      id: 8,
      image: inviteeImg4,
      position: "8th Invitee",
      name: "Felicia Scout",
      dateNdTime: "Friday, 21 November 2022 - 4pm",
      status: "Accepted",
    },
  ];
  const toggleShowAccordion = (id) => {
    if (isActive === id) {
      setIsActive();
    } else {
      setIsActive(id);
    }
  };
  return (
    <>
      <Navbar />
      <div className="font-['DM_Sans'] w-4/5 mx-auto my-4 sm:max-w-xl md:max-w-2xl sm:border sm:border-slate-300 sm:rounded-md">
        <main className="sm:p-8 mx-auto">
          <section className="text-center">
            <h1 className="text-blue-500 font-semibold text-3xl sm:border-b-2 sm:border-dashed sm:border-slate-300 sm:py-6">
              Team UEFA Champe
            </h1>
            <p className="text-gray-600 w-4/5 mx-auto my-7">
              Guys! It's been long we have gathered, let's try to make time for
              champions league next Tuesday. If you know your Goat no qualify,
              no bring yourself here.
            </p>
          </section>
          <div className="flex tablet:justify-between md:justify-start my-5">
            <button
              onClick={() => setShowModal(true)}
              className="bg-transparent flex items-center text-[#1070FF]"
            >
              <p className="mr-2 md:text-base text-sm">Add participant</p>
              <BsPlus />
            </button>
            <aside className="text-right font-medium my-3 text-sm ">
              Agreed Date
              <span className="bg-[#0056D6] text-[#0056D6] text-sm px-2 py-1 font-semibold rounded ml-1">
                21st Nov. 2022
              </span>
            </aside>
          </div>

          <section className="flex flex-col justify-center">
            <div className="max-h-[17em] overflow-y-scroll scroll-blue-500 pr-4">
              {invitees.map((invitee) => (
                <div
                  onClick={() => toggleShowAccordion(invitee.id)}
                  key={invitee.id}
                  className="py-3 border-b border-gray-200 transition-all"
                >
                  <div className="flex justify-between items-center transition-all">
                    <div className="flex items-center">
                      <img
                        className="h-fit w-10 mr-3"
                        src={invitee.image}
                        alt=""
                      />
                      <div className="space-y-[-3px]">
                        <h4 className="font-semibold text-sm">
                          {invitee.position}
                        </h4>
                        <p className="text-gray-600">{invitee.name}</p>
                      </div>
                    </div>
                    <img
                      className={
                        isActive === invitee.id
                          ? "w-3 sm:w-4 md:w-5 rotate-180 transition duration-250 ease-in-out"
                          : "w-3 sm:w-4 md:w-5 transition duration-250 ease-in-out"
                      }
                      src={arrow}
                      alt=""
                    />
                  </div>
                  {isActive === invitee.id && (
                    <div className="my-3 space-y-1 transition-all">
                      <h5 className="font-medium text-sm">
                        Selected Date/Time:{" "}
                        <span className="font-normal">
                          {invitee.dateNdTime}
                        </span>{" "}
                      </h5>
                      <p className="text-gray-500 text-sm font-medium ">
                        Status of Attendance:{" "}
                        <span className="bg-green-200 text-green-900 text-xs p-1 rounded ml-1">
                          {invitee.status}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className=" px-3 py-2 hover:bg- hover:text-white border-2 border-blue-500 rounded mx-auto mt-3 text-center text-blue-500 transition-all">
              Load more
            </button>
          </section>
        </main>
        <AddParticipantModal />
      </div>
    </>
  );
};

export default ViewEvent;
