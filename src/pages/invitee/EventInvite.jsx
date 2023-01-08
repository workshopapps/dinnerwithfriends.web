import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom/dist";
import moment from "moment/moment";
import userServices from "../../services/userServices";

const EventInvite = () => {
  const [eventData, setEventData] = useState("");
  const preferredDate = eventData ? eventData?.event?.host_prefered_time.replace("-", "") : "";
  const preferredTime = eventData ? moment(preferredDate, "DD-MM-YYYY HH:mm").format("YYYY-MM-DDTHH:mm") : "";
  const [inviteDetails, setInviteDetails] = useState({
    fullname: "",
    email: "",
    preferred_date_time: "",
  });
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [resultMsg, setResultMsg] = useState("");
  const { token } = useParams();
  const startDate = eventData ? moment(eventData?.event?.start_date, "DD-MM-YYYY").format("YYYY-MM-DDTHH:mm") : null;
  const endDate = eventData ? moment(eventData?.event?.end_date, "DD-MM-YYYY").format("YYYY-MM-DDTHH:mm") : null;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const decidedEvent = eventData ? moment(eventData?.event?.final_event_date).format("MMMM DD YYYY HH:mm") : "";
  const currentDate = moment(Date.now()).format("YYYY-MM-DDTHH:mm");
  const hasPassed = eventData && moment(currentDate).isAfter(endDate);
  const [isLoading, setIsLoading] = useState(false);
  const [decliningInvite, setDecliningInvite] = useState(false);

  const changeInviteDetails = (e) => {
    const { value, name } = e.target;

    setInviteDetails({
      ...inviteDetails,
      [name]: value
    })
  };

  const getEventDetails = async () => {
    const result = await userServices.getEventsByToken(`${token}`);
    setEventData(result);
    if(eventData?.event?.host_prefered_time) {
      setInviteDetails({
        ...inviteDetails,
        preferred_date_time: preferredTime
      })
    }
    if(result.status === "success"){
      setTimeout(() => {
        setResultMsg({ message: "Successful!"})
        navigate('/event_invite/event_invite_response')
      }, 2000)
    } else if(result.status) {
      setResultMsg(result.message)
    }
  };

  const addParticipant = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const participantsData = { ...inviteDetails, event_id: eventData?.event._id };
    userServices.addParticipants(participantsData)
    .then((result) => {
      if(result.status === "success"){
        setSuccessMessage("Successful!");
        setResultMsg("");
        setIsLoading(false)
        setTimeout(() => {
          navigate('/event_invite/event_invite_response')
        }, 2000)
      } else if(result.status){
        setResultMsg(result.message)
        setIsLoading(false)
      }})
      .catch(error => {
        setResultMsg("An error has occured")
        setIsLoading(false)
      })
  }

  const declineInvite = () => {
    setDecliningInvite(true);
    setResultMsg("You have succesfully declined this invite... Redirecting to your homepage soon")
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  useEffect(() => {
    getEventDetails();

    if(hasPassed) {
      navigate("/closed_event")
    }

    if(eventData === undefined) {
      navigate("*")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPassed]);

  return (
    <div>
      {
        resultMsg === "jwt expired" ? <p className="text-red-900 text-4xl font-bold">Email invite has expired. Please contact the host for more info.</p> : (
          <>
            <Navbar />
            <div className="mt-28 mb-10 mx-auto md:mx-32">
              <div className="mx-2 md:mx-0 text-center w-full">
                <h1 className="text-2xl font-bold md:text-3xl">Hello, there.</h1>
                <p className="leading-6 text-gray-600 font-sm"> You have been invited to {eventData ? eventData?.event?.event_type : ""} by <span className="text-blue-700 font-bold"> {eventData ? eventData?.event?.host_info[0].name : ""}</span>
                <br /> You can view the details below..
                </p>
                {resultMsg ? <p className="text-red-500 font-bold">{resultMsg}</p> : ""}
                {successMessage ? <p className="text-green-700 font-bold">{successMessage}</p> : ""}
              </div>
              <div className="my-8 border py-5 rounded-lg flex justify-center items-center ">
                <form onSubmit={addParticipant}>
                  <div className="my-4 grid">
                    <label className="text-base font-semibold mb-1">Full Name</label>
                      <input
                        name="fullname"
                        type="text"
                        placeholder="John Doe"
                        value={inviteDetails.fullname}
                        onChange={changeInviteDetails}
                        className="outline-none border border-[#898989] bg-transparent rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                        required
                      />
                  </div>
                  <div className="my-4 grid">
                    <label className="text-base font-semibold mb-1">Email</label>
                    <p className="text-sm text-red-500">{emailRegex.test(inviteDetails.email) || inviteDetails.email === "" ? "" : "Please input a valid email"}</p>
                    <input
                      name="email"
                      type="email"
                      placeholder="JohnDoe@gmail.com"
                      value={inviteDetails.email}
                      onChange={changeInviteDetails}
                      className={emailRegex.test(inviteDetails.email) || inviteDetails.email === "" ? "outline-none border border-[#898989] bg-transparent rounded md:w-[477px] w-full px-3 py-3 text-base font-medium" : "border border-red-600 bg-transparent rounded outline-none md:w-[477px] w-full px-3 py-3 text-base font-medium"}
                      required
                      autoComplete="true"
                    />
                  </div>
                  { eventData?.event?.final_event_date ?
                    <p className="text-blue-500 font-semibold text-center w-[200px] md:w-[450px]">An event date has been chosen. Event to be hosted by {decidedEvent}</p> :
                    <div className="my-4 grid">
                      <label className="text-base font-semibold mb-1">
                        Preferred Date & Time
                      </label>
                      <input
                        name="preferred_date_time"
                        type="datetime-local"
                        value={inviteDetails.preferred_date_time ? inviteDetails.preferred_date_time : preferredTime}
                        onChange={changeInviteDetails}
                        className="outline-none border border-[#898989] bg-transparent rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                        min={startDate}
                        max={endDate}
                        required
                      />
                    </div>
                  }
                  <div className="my-7 flex gap-8 md:justify-between">
                    <button
                      type="submit"
                      className="rounded bg-[#0056D6] hover:bg-[#2563eb] text-white py-2.5 md:px-3 px-1.5 md:text-lg text-base"
                      onClick={addParticipant}
                    >
                    {isLoading ? "Loading..." : "Accept Invite"}
                    </button>
                    <button
                      type="button"
                      className="rounded border border-[#0056D6] text-[#0056D6] py-2.5 md:px-3 px-1.5 md:text-lg text-base"
                      onClick={() => declineInvite()}
                    >
                      {decliningInvite ? "Declining..." : "Decline Invite"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <Footer />
          </>
        )
      }
    </div>
  );
};

export default EventInvite;
