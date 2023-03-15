import React, { useEffect, useState } from "react";
import { CiLocationOn, CiStopwatch, CiCalendar } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineCrown } from "react-icons/ai";
import { EventInviteResponse } from "../../../components";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom/dist";
import userServices from "../../../services/userServices";

export const LinkInvite = () => {
  const [eventData, setEventData] = useState("");
  const [modal, setModal] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false)

  const preferredDate = eventData
    ? eventData?.host_prefered_time.replace("-", "")
    : "";
  const preferredTime = eventData
    ? moment(preferredDate, "DD-MM-YYYY HH:mm").format("YYYY-MM-DDTHH:mm")
    : "";
  const [inviteDetails, setInviteDetails] = useState({
    fullname: "",
    email: "",
    preferred_date_time: "",
  });

  const navigate = useNavigate();
  const [declinedInvite, setDeclinedInvite] = useState(false);
  const [resultMsg, setResultMsg] = useState("");

  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");
  // const [agreedDate, setAgreedDate] = useState("");
  let { id } = useParams();

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const decidedEvent = eventData
    ? moment(eventData?.final_event_date).format("MMMM DD YYYY HH:mm")
    : "";
  // const currentDate = moment(Date.now()).format("YYYY-MM-DDTHH:mm");
  // const hasPassed = eventData && moment(currentDate).isAfter(maxDate);

  useEffect(() => {
    const startDate = eventData
      ? moment(eventData?.start_date, "DD-MM-YYYY").format("YYYY-MM-DDTHH:mm")
      : "";
    const endDate = eventData
      ? moment(eventData?.end_date, "DD-MM-YYYY").format("YYYY-MM-DDTHH:mm")
      : "";
    // setAgreedDate(
    //   moment(eventData?.final_event_date, "YYYY-MM-DDTHH:mm").format(
    //     "MM/DD/YYYY"
    //   )
    // );
    setMinDate(startDate);
    setMaxDate(endDate);
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
    setEventData(result?.data);
    if (eventData?.host_prefered_time) {
      setInviteDetails({
        ...inviteDetails,
        preferred_date_time: preferredTime,
      });
    }

    if(result?.status === "fail") {
      setResultMsg({message: "This event does not exist"})
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const addParticipant = (e) => {
    setIsSubmit(true)
    e.preventDefault();
    const { fullname, email } = inviteDetails;
    if (!fullname || !email) {
      setResultMsg("Please fill all fields");
      setIsSubmit(false)
      return;
    }
    
    const participantsData = {
      ...inviteDetails,
      event_id: eventData.id,
      preferred_date_time: eventData.final_event_date
        ? eventData.final_event_date
        : preferredTime,
    };

    userServices
      .addParticipants(participantsData)
      .then((response) => {
        if (response.status === "error") {
          setIsSubmit(false)
          setTimeout(() => {
            setResultMsg({ message: "Successful!" });
          }, 2000);
        } else if(response.status === "success") {
          setIsSubmit(false)
          setTimeout(() => {
            setResultMsg({ message: "Successful!" });
          }, 2000);
        } else if(response.status === 'fail') {
          setIsSubmit(false)
          setResultMsg({ message: "You have already accepted this invite" });
        } else {
          setResultMsg(response.message);
        }
      })
      .catch((error) => {
        setResultMsg("An error has occured");
      });
  };
  useEffect(() => {
    if (resultMsg.message === "Successful!") {
        setModal(true)
    }
  }, [navigate, resultMsg]);

  const declineInvite = () => {
    setDeclinedInvite(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  useEffect(() => {
    getEventDetails();

    // if (hasPassed) {
    //   navigate("/closed_event");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <div>
      <div>
        <div className="mt-28 mb-10 mx-auto px-[20px]">
          <div className="mx-2 md:mx-0 text-center w-full">
            <h1 className="text-2xl font-bold md:text-3xl">Hello, there.</h1>
            <p className="leading-6 text-gray-600 font-sm">
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
          </div>
          <div className="my-8 w-fit md:w-[70%] mx-auto py-5 ">
            <div className="my-4 flex flex-col justify-start lg:justify-center items-start lg:items-center gap-[25px] lg:flex-row ">
              <div className="md:mx-auto flex-1 self-start">
              <h1 className="mb-2 font-medium text-[#151517] md:text-[24px] md:mb-4">
                {eventData?.event_type} with friends
              </h1>
                <div>
                  <span className="flex mt-3">
                    {" "}
                    <CiLocationOn className="mr-4 text-[25px]" />
                    Location:{" "}
                    <span className="font-bold">
                      {" "}
                      &#160;
                      {eventData?.location}
                    </span>
                  </span>
                   {
                    eventData.final_event_date ? (
                      <span className="flex mt-3">
                        <CiCalendar className="mr-4 text-[25px] font-bold" />
                          Agreed Date: { " "}
                           {moment(eventData?.final_event_date?.split(" - ")[0], "DD-MM-YYYY").format('Do MMMM YYYY')}
                        </span>
                       ) : (
                        <span className="flex mt-3">
                        <CiCalendar className="mr-4 text-[25px] font-bold" />
                        Host's preferred Date: { " "}
                        {moment(eventData?.host_prefered_time?.split(" - ")[0], "DD-MM-YYYY").format('Do MMMM YYYY')}
                      </span>
                       )
                   }
                  <span className="flex mt-3">
                    <CiStopwatch className="mr-4 text-[25px] font-bold" />
                    Host's Preferred time: { " "}
                    {moment(eventData?.host_prefered_time?.split(" - ")[1].replace(":", ""), "hmm").format('HH:mm a')}
                  </span>
                  <span className="flex mt-3">
                    <AiOutlineCrown className="mr-4 text-[25px]" />
                    Event type:{" "}
                    {eventData?.event_type}
                  </span>
                  <span className="flex mt-3">
                    <HiOutlineMenuAlt1 className="mr-4 text-[25px]" />
                    {eventData?.event_description}
                  </span>
                </div>
              </div>
              {resultMsg ? (
                <p
                  className={
                    resultMsg.message === "Successful!"
                      ? "text-green-600 text-center w-full"
                      : "text-red-600 text-center w-full"
                  }
                >
                  {resultMsg.message}
                </p>
              ) : (
                ""
              )}
              <form className="flex-1 w-full" onSubmit={addParticipant} id="form">
                <div className="my-4 flex flex-col">
                  <label className="text-base font-semibold mb-1">
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
                  <label className="text-base font-semibold mb-1">Email</label>
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
                {eventData?.final_event_date ? (
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
                        inviteDetails?.preferred_date_time
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
                )}
                <div className="my-[50px] md:mt-[70px] flex w-full md:w-[50%] md:mx-auto justify-center gap-8 md:justify-between">
                <button
                  type="submit"
                  form="form"
                  className="font-medium rounded-[4px] bg-[#1070ff] text-white py-[12px] md:px-[32px] px-1.5 md:text-[20px] text-base"
                  onClick={addParticipant}
                >
                  {isSubmit ? 'Please wait...' : 'Send Invite'}
                </button>
                <button
                  type="button"
                  className="rounded-[4px] border border-[#1070FF] text-[#1070FF] py-[12px] md:px-[32px] px-1.5 md:text-lg text-base"
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
    </div>
    {modal && <EventInviteResponse modal ={modal} />}
    </>
  );
};
