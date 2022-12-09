import React, { useState, useEffect } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CiLocationOn, CiStopwatch, CiCalendar } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom/dist";
import userServices from "../../services/userServices";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import dateTimeForCalender from "../../helpers/DateTimeConverter";
import moment from "moment/moment";

const Invitee = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [hostName, setHostName] = useState("");
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [declinedInvite, setDeclinedInvite] = useState(false);
  const [inviteDetails, setInviteDetails] = useState({});
  const [showCalendar3, setShowCalendar3] = useState(false);
  const [minimumDate, setMinimumDate] = useState("");
	const [maximumDate, setMaximumDate] = useState("");
  const [preferredDate, setPreferredDate] = useState("")
  const [time, setTime] = useState("7:00");

  let { id } = useParams();

  const changeInviteDetails = (e) => {
    const { value, name } = e.target;

    setInviteDetails({
      ...inviteDetails,
      [name]: value,
    });
  };

  const fetchEvent = async () => {
    const result = await userServices.getEventsById(id);
    setData(result);
    console.log(result);
    setHostName(result.host_info[0].name);
    setMinDate(result.start_date);
    setMaxDate(result.end_date);
    console.log(result.start_date);
    console.log(result.end_date);

  };

  useEffect(() => {
		const start = dateTimeForCalender(minDate, "00:00");
		const end = dateTimeForCalender(minDate, "00:00");
    const startDate = moment(maxDate, "MM/DD/YYYY").format("YYYY/MM/DDTHH:mm");
		console.log(startDate);
    setMinimumDate(start);
		setMaximumDate(end);
	}, [minDate, maxDate]);

  console.log(minimumDate)
  console.log(maximumDate)
  useEffect(() => {
    fetchEvent();
  }, []);

  const declineInvite = (e) => {
    e.preventDefault();
    setDeclinedInvite(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const addParticipant = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...inviteDetails, event_id: id }),
    };
    fetch(
      "https://prybar.onrender.com/api/v1/participant/addpart",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setTimeout(() => {
            navigate("/event_invite/event_invite_response");
          }, 2000);
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div className="my-28 mx-auto md:mx-32">
        <div className="mx-3 md:mx-0 text-center ">
          <h1 className="text-3xl mb-2 font-bold md:text-5xl md:mb-4">
            Hello, there.
          </h1>
          <p className="leading-6 text-gray-600 font-sm">
            You have been invited to {data.event_title} by{" "}
            <span className="text-[#0056D6] font-bold"> {hostName}</span>
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
                Location:{" "}
                <span className="font-bold">
                  {" "}
                  &#160;
                  {data.location}
                </span>
              </span>

              <span className="flex mt-3">
                {" "}
                <CiCalendar className="mr-4 text-[25px]" />
                Agreed Date:
                {data.final_event_date === !null ? (
                  <span className="font-bold">
                    {" "}
                    &#160; {data.final_event_date}
                  </span>
                ) : (
                  <span className="font-bold"> &#160; Not Available</span>
                )}
              </span>

              <span className="flex mt-3">
                {" "}
                <CiStopwatch className="mr-4 text-[25px]" />
                Host Selected Time:
                <span className="font-bold">
                  &#160; {data.host_prefered_time}
                </span>{" "}
              </span>

              <span className="flex mt-3">
                {" "}
                <HiOutlineMenuAlt1 className="mr-4 text-[25px]" />
                Dinner with
                <span className="font-bold">
                  {" "}
                  &#160;
                  {data.event_description}
                </span>{" "}
              </span>
            </div>
          </div>
          <div className="md:w-1/2 md:px-8">
            <form
              onSubmit={addParticipant}
              className=" my-10 md:mt-0 text-[#4B4B4C] font-normal [&>input]:mt-2 [&>input]:w-full [&>input]:mb-3.5"
            >
              <div className="relative w-full mb-4 ">
                <label className="pb-0 mb-2 font-bold" htmlFor="email">
                  Full Name
                </label>

                <input
                  className="border border-gray-600 block w-full h-10 rounded-md px-3"
                  placeholder="John Doe"
                  onChange={changeInviteDetails}
                  required
                  type="text"
                />
              </div>

              <div className="relative w-full mb-4 ">
                <label className="pb-0 mb-2 font-bold" htmlFor="email">
                  Email
                </label>

                <input
                  className="border border-gray-600 block w-full h-10 rounded-md px-3"
                  placeholder="JohnDoe@gmail.com"
                  onChange={changeInviteDetails}
                  required
                  type="email"
                />
              </div>
              {data.published === "not-decided" ? (
                <div className="relative w-full mb-4">
                  <label className="text-base font-semibold mb-1">
                    Preferred Date & Time
                  </label>
                  {/* <input
                name="preferred_date_time"
                type="datetime-local"
                max={maxDate}
                // max={maxDate}
                placeholder="17/11/2022 - 3pm"
                onChange={changeInviteDetails}
                className="border border-gray-600 block w-full h-10 rounded-md px-3"
                required
              /> */}
                  <div className="text-xs rounded-[8px] border border-[#D1D7DA]">
                    <div className="flex flex-col mb-4 relative">
                      <label
                        htmlFor="preferredDate"
                        className="text-sm font-semibold"
                      >
                        Preferred Date & Time
                      </label>
                      <div className="flex mt-3 items-center bg-white relative p-3 border border-[#0000004D] rounded-[4px] md:w-[50%]">
                        <input
                          required
                          id="preferredDate"
                          type="text"
                          disabled
                          value={preferredDate}
                          placeholder="17/11/2022 - 3:00"
                          className="flex-[5] bg-transparent  text-[#151517]  text-sm outline-none"
                        />
                        <span
                          onClick={() => setShowCalendar3(!showCalendar3)}
                          className="relative flex-[.5] justify-center flex cursor-pointer"
                        >
                          <IoCalendarOutline />
                        </span>
                      </div>
                      {/* <small className="text-red-600 text-[10px] mt-2">
                        {errors?.host_prefered_time}{" "}
                      </small> */}
                      <div
                        className={`md:w-[50%] transition-all duration-150 ${
                          showCalendar3
                            ? "flex absolute top-[75px] left-0 right-0 z-10"
                            : "hidden"
                        }`}
                      >
                        <Calendar
                          calendarType="US"
                          onChange={(e) => {
                            setPreferredDate(e);
                          }}
                          maxDate={maximumDate}
                          minDate={minimumDate}
                          value={preferredDate}
                        />
                        <div className="px-10 pb-8">
                          
                            <div className="mb-4">
                              <span className="mr-4">Time:</span>
                              <TimePicker
                                onChange={(e) => {
                                  setTime(e);
                                }}
                                value={time}
                                disableClock
                                clearIcon={null}
                              />
                            </div>
                        
                          <div className="flex justify-center">
                            <button
                              onClick={() => {
                                setShowCalendar3(!showCalendar3);
                              }}
                              className={`rounded-[4px] ${"bg-[#0056D6]"} p-2 text-white`}
                            >
                              Add date
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full mb-4">
                  <label className="text-base font-semibold mb-1">
                    Preferred Date & Time
                  </label>
                  <input
                    name="preferred_date_time"
                    type="datetime"
                    disabled
                    value={data.final_event_date}
                    placeholder="17/11/2022 - 3pm"
                    className="border border-gray-600 block w-full h-10 rounded-md px-3"
                  />
                  <span className="my-1">
                    Preferred date has already been chosen
                  </span>
                </div>
              )}
              <div className="flex">
                <button
                  className="mr-4 transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-white bg-[#0056D6] w-full h-11 rounded-lg"
                  type="submit"
                  onClick={addParticipant}
                >
                  Accept Invite
                </button>
                <button
                  className="ml-4 transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-[#0056D6] border border-[#0056D6] w-full h-11 rounded-lg"
                  onClick={declineInvite}
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
