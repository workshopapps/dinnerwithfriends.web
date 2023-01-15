import React, { useEffect, useState } from "react";
import { CiLocationOn, CiStopwatch, CiCalendar } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Navbar from "../../components/CreateEvent/CreateEventNavbar";
import Footer from "../../components/footer/index";
import { useNavigate, useParams } from "react-router-dom/dist";
import moment from "moment/moment";
import userServices from "../../services/userServices";

const EventInvite = () => {
  const [eventData, setEventData] = useState(null);
  // const preferredDate = eventData
  //   ? eventData.host_prefered_time.replace("-", "")
  //   : "";
  // const preferredTime = eventData
  //   ? moment(preferredDate, "DD-MM-YYYY HH:mm").format("YYYY-MM-DDTHH:mm")
  //   : "";
  const [inviteDetails, setInviteDetails] = useState({
    fullname: "",
    email: "",
    preferred_date_time: "",
  });
  // const [minDate, setMinDate] = useState("");
  // const [maxDate, setMaxDate] = useState("");
  const [agreedDate, setAgreedDate] = useState("");
  const navigate = useNavigate();
  const [declinedInvite, setDeclinedInvite] = useState(false);
  const [resultMsg, setResultMsg] = useState("");
  let { id } = useParams();

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // const decidedEvent = eventData
  //   ? moment(eventData.final_event_date).format("MMMM DD YYYY HH:mm")
  //   : "";
  // const currentDate = moment(Date.now()).format("YYYY-MM-DDTHH:mm");
  // const hasPassed = eventData && moment(currentDate).isAfter(maxDate);

  useEffect(() => {
    // const startDate = eventData
    //   ? moment(eventData?.start_date, "MM-DD-YYYY").format("YYYY-MM-DDTHH:mm")
    //   : "";
    // const endDate = eventData
    //   ? moment(eventData?.end_date, "MM-DD-YYYY").format("YYYY-MM-DDTHH:mm")
    //   : "";
    setAgreedDate(
      moment(eventData?.final_event_date, "YYYY-MM-DDTHH:mm").format(
        "MM/DD/YYYY"
      )
    );
    // setMinDate(startDate);
    // setMaxDate(endDate);
  }, [eventData]);

  const changeInviteDetails = (e) => {
    const { value, name } = e.target;

    setInviteDetails({
      ...inviteDetails,
      [name]: value,
    });
  };

  const getEventDetails = async () => {
    const result = await userServices.getEventsById(`${id}`);
    setEventData(result);
    if (eventData?.final_event_date) {
      setInviteDetails({
        ...inviteDetails,
        preferred_date_time: eventData.final_event_date,
      });
    }
  };

  const addParticipant = (e) => {
    e.preventDefault();
    const { fullname, email, preferred_date_time } = inviteDetails;
    if (!fullname || !email) {
      setResultMsg("Please fill all fields");
      return;
    }
    const participantsData = {
      ...inviteDetails,
      event_id: eventData.id,
      preferred_date_time: eventData.final_event_date
        ? eventData.final_event_date
        : preferred_date_time,
    };

    userServices
      .addParticipants(participantsData)
      .then((response) => {
        if (response.status === "success") {
          setTimeout(() => {
            setResultMsg({ message: "Successful!" });
          }, 2000);
        } else {
          setResultMsg(response);
        }
      })
      .catch((error) => {
        setResultMsg("An error has occured");
      });
  };
  useEffect(() => {
    if (resultMsg.message === "Successful!") {
      setTimeout(() => {
        navigate("/invitee/event_invite_response");
      }, 2000);
    }
  }, [navigate, resultMsg]);

  const declineInvite = () => {
    setDeclinedInvite(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  useEffect(() => {
    getEventDetails();

    // if (hasPassed) {
    //   navigate("/closed_event");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="mt-28 mb-10 mx-auto lg:mx-12 px-6">
          <div className="mx-2 md:mx-0 text-center w-full">
            <h1 className="text-2xl font-medium md:text-3xl">Hello, there.</h1>
            <p className="leading-6 text-gray-600 text-sm">
              You have been invited to {eventData ? eventData.event_type : ""}{" "}
              by
              <span className="text-blue-700 font-bold">
                {" "}
                {eventData ? eventData.host_info[0].name : ""}
              </span>
              <br /> You can view the details below..
            </p>
            {declinedInvite ? (
              <p className="font-bold text-red-900">
                You have succesfully declined this invite... Redirecting to your
                homepage soon
              </p>
            ) : null}
            {resultMsg ? (
              <p
                className={
                  resultMsg.message === "Successful!"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {resultMsg.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="my-8 w-fit mx-auto px-6 lg:px-12 py-5">
            <div className="my-4 flex flex-col justify-center lg:justify-center items-start lg:items-center gap-[25px] lg:gap-[15px] lg:flex-row">
              <div className="md:mx-auto flex-2 self-center">
                <h1 className="text-xl mb-2 font-medium md:text-2xl md:mb-4">
                  Event Summary
                </h1>
                <p className="leading-6 text-gray-600 font-medium font-sm">
                  Dinner
                </p>
                <div className="font-thin">
                  <span className="flex mt-3 md:gap-2 text-sm md:text-base">
                    <CiLocationOn className="mr-4 text-[25px]" />
                    Location:
                    <span className="text-sm md:text-base pl-2">
                      {eventData?.location}
                    </span>
                  </span>
                  <span className="flex mt-3 md:gap-2 text-sm md:text-base">
                    <CiCalendar className="mr-4 text-[25px] font-bold" />
                    Agreed Date:
                    {eventData?.final_event_date === null ? (
                      <span className="text-sm md:text-base pl-2">Not Available</span>
                    ) : (
                      agreedDate
                    )}
                  </span>
                  <span className="flex mt-3 md:gap-2 text-sm md:text-base">
                    <CiStopwatch className="mr-4 text-[25px]" />
                    Host Selected Time:
                    <span className="text-sm md:text-base pl-2">
                      {eventData?.host_prefered_time}
                    </span>
                  </span>
                  <span className="flex mt-3 gap-2 md:text-sm md:text-base">
                    <HiOutlineMenuAlt1 className="mr-4 text-[25px]" />
                    <span className="text-sm md:text-base pl-2">
                      {eventData?.event_description}
                    </span>
                  </span>
                </div>
              </div>
              <form className="flex-1 w-full md:border-l-2 md:pl-8" onSubmit={addParticipant}>
                <div className="my-4 flex flex-col">
                  <label className="text-base font-semibold mb-1 text-[#424245]">
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="John Doe"
                    value={inviteDetails.fullname}
                    onChange={changeInviteDetails}
                    className="outline-none border border-[#898989] bg-transparent rounded px-3 py-3 text-base font-medium"
                    required
                  />
                </div>
                <div className="my-4 flex flex-col">
                  <label className="text-base font-semibold mb-1 text-[#424245]">Email(optional)</label>
                  <p className="text-sm text-red-500">
                    {emailRegex.test(inviteDetails.email) ||
                    inviteDetails.email === ""
                      ? ""
                      : "Please input a valid email"}
                  </p>
                  <input
                    name="email"
                    type="email"
                    placeholder="JohnDoe@gmail.com"
                    value={inviteDetails.email}
                    onChange={changeInviteDetails}
                    className={
                      emailRegex.test(inviteDetails.email) ||
                      inviteDetails.email === ""
                        ? "outline-none border border-[#898989] bg-transparent rounded px-3 py-3 text-base font-medium"
                        : "border border-red-600 rounded outline-none px-3 py-3 text-base font-medium bg-transparent"
                    }
                    required
                    autoComplete="true"
                  />
                </div>
                {/* {eventData?.final_event_date ? (
                  <p className="text-blue-500 font-semibold text-center md:w-4/5 mx-auto">
                    An event date has been chosen. Event to be hosted by{" "}
                    {decidedEvent}
                  </p>
                ) : (
                  <div className="my-4 flex flex-col">
                    <label className="text-base font-semibold mb-1">
                      Preferred Date & Time
                    </label>
                    <input
                      name="preferred_date_time"
                      type="datetime-local"
                      value={
                        inviteDetails.preferred_date_time
                          ? inviteDetails.preferred_date_time
                          : preferredTime
                      }
                      onChange={changeInviteDetails}
                      className="outline-none border border-[#898989] bg-transparent rounded md:w-[477px] w-auto px-3 py-3 text-base font-medium"
                      min={minDate}
                      max={maxDate}
                      required
                    />
                  </div>
                    )} */}
                <div className="my-7 flex w-full justify-center gap-8 md:justify-between">
                  <button
                    type="submit"
                    className="rounded font-semibold bg-[#0056D6] hover:bg-[#2563eb] text-white py-2.5 md:px-3 px-1.5 md:text-lg text-base"
                    onClick={addParticipant}
                  >
                    Accept Invite
                  </button>
                  <button
                    type="button"
                    className="rounded font-semibold border border-[#0056D6] text-[#0056D6] py-2.5 md:px-3 px-1.5 md:text-lg text-base"
                    onClick={() => declineInvite()}
                  >
                    Decline Invite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventInvite;
