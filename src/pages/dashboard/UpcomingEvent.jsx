import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import userServices from "../../services/userServices";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import calender from "../../assets/img/g-calendar.png";
import MediaQuery from "react-responsive";
import Event from "../../components/Event";
import add from "../../assets/img/add.png";
import Footer from "../../components/Footer";

const UpcomingEvent = () => {
  const [status, setStatus] = useState(false);
  const { events, setEvents } = CatchUpEventContextUse();

  // const event = [
  //   {
  //     id: 1,
  //     title: "Catch Up with Football (UEFA Championship)",
  //     description:
  //       "Guys! It’s been long we have gathered, let’s try to make time for champions league next week tuesday. If you know your GOAT no qualify, no bring yourself here.",
  //     status: false,
  //     date: "21st November",
  //     invitee: "2",
  //   },
  //   {
  //     id: 2,
  //     title: "Catch Up with Football (UEFA Championship)",
  //     description:
  //       "Guys! It’s been long we have gathered, let’s try to make time for champions league next week tuesday. If you know your GOAT no qualify, no bring yourself here.",
  //     status: false,
  //     date: "21st November",
  //     invitee: "3",
  //   },
  //   {
  //     id: 3,
  //     title: "Catch Up with Football (UEFA Championship)",
  //     description:
  //       "Guys! It’s been long we have gathered, let’s try to make time for champions league next week tuesday. If you know your GOAT no qualify, no bring yourself here.",
  //     status: true,
  //     date: "21st November",
  //     invitee: "5",
  //   },
  //   {
  //     id: 4,
  //     title: "Catch Up with Football (UEFA Championship)",
  //     description:
  //       "Guys! It’s been long we have gathered, let’s try to make time for champions league next week tuesday. If you know your GOAT no qualify, no bring yourself here.",
  //     status: true,
  //     date: "21st November",
  //     invitee: "7",
  //   },
  // ];

  useEffect(() => {
    async function fetchData() {
      const data = await userServices.getAllEvents()
      setEvents(data)
    }
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredEvents = events.length === 0 ? events : events.filter((event) => event.status === status);

  console.log(filteredEvents);
  const userEvents = filteredEvents.length === 0 ?
  (<Event
    filteredEvents={filteredEvents}
    status={status === false ? "upcoming" : "Rsvp"}
    />) :
    filteredEvents.map(
    ({ id, title, description, date, invitee }) => (
      <Event
        status={status}
        key={id}
        title={title}
        description={description}
        date={date}
        invitee={invitee}
        filteredEvents={filteredEvents}
      />
    )
  );

  console.log(userEvents)
  return (
    <>
      <section className="px-[22px] lg:px-20 pt-11 lg:pt-16 mb-16">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-x-4 mb-4 lg:mb-8">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-4">
            <h2 className="text-[#151517] text-2xl font-bold lg:text-[40px]">
              Welcome
            </h2>
            <p className="text-[#898989] text-center font-bold lg:font-normal text-sm lg:text-lg">
              Create events, send invites and keep up with your friends
            </p>
          </div>
          <Button
            type="button"
            className="hidden lg:flex justify-between items-center gap-x-3.5 rounded-lg border border-solid border-[#344054] px-4 outline-0"
          >
            <div className="w-[28px] h-[28px]">
              <img src={calender} alt="google-calender" />
            </div>
            <p className="text-[#344054] text-lg">Sync with Google Calendar</p>
          </Button>
        </div>
        <div className="flex flex-col p-8 gap-y-8 mt-9 justify-center items-center border border-solid border-[#CDCDCD] bg-[#FAFAFA] lg:bg-white">
          <Button
            type="button"
            className="font-bold text-sm lg:text-xl flex justify-between items-center gap-x-3.5 text-white bg-[#1070FF] rounded py-3 px-4 lg:px-8 outline-0"
          >
            <span>
              <img src={add} alt="add" />
            </span>
            <span>Create Event</span>
          </Button>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <span className="text-[#151517] font-bold lg:font-medium text-xl">
              New Catch Up Event
            </span>
            <span className="text-[#898989] font-bold lg:font-normal text-lg text-center">
              Create event and let people chip in
            </span>
          </div>
        </div>
        <div className="lg:border border-solid border-[#CDCDCD] px-[46px] py-9">
          <h3 className="text-[#151517] text-center lg:text-left font-bold lg:font-medium text-2xl lg:mb-[40px]">
            All Events
          </h3>
          <MediaQuery minWidth={1023}>
            <ul className="flex justify-start items-center gap-x-8">
              <li>
                <Button
                  className={`${
                    status === false
                      ? "pb-3 border-[#1070FF] border-b-4 "
                      : ""
                  }'pb-3 outline-0 border-0 text-[#717172] bg-inherit text-lg'`}
                  onClick={() => setStatus(false)}
                >
                  Upcoming Event
                </Button>
              </li>
              <li>
                <Button
                  className={`${
                    status === true ? "pb-3 border-[#1070FF] border-b-4 " : ""
                  }' pb-3 outline-0 border-0 text-[#717172] bg-inherit text-lg'`}
                  onClick={() => setStatus(true)}
                >
                  Reserved Event
                </Button>
              </li>
            </ul>
          </MediaQuery>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-8 lg:border border-solid border-[#CDCDCD] lg:pt-12 lg:pb-[200px] px-[20px] 8lg:px-12">
          <MediaQuery minWidth={1024}>
            {status === false && (
              <div className={`${events.length === 0 ? "" : "lg:grid lg:grid-cols-2 grid-flow-row content-start gap-4 px-8"}`}>
                {userEvents}
              </div>
            )}
            {status === true && (
              <div className={`${events.length === 0 ? "" : "lg:grid lg:grid-cols-2 grid-flow-row content-start gap-4 px-8"}`}>
                {userEvents}
              </div>
            )}
          </MediaQuery>
          <MediaQuery maxWidth={1023}>
            <div>
              <p className="text-[#424245] font-medium mb-4 text-center">
                Upcoming Events
              </p>
              {userEvents}
            </div>
            <div>
              <p className="text-[#424245] font-medium mb-4 text-center">
                Rsvp Events
              </p>
              {userEvents}
            </div>
          </MediaQuery>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UpcomingEvent;
