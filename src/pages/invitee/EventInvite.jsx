import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom/dist";
import moment from "moment/moment";
import fetchApi from "../../services/fetchApi";
import { BASE_URL, EVENT_BY_TOKEN, ADD_PARTICIPANTS } from "../../services/rootEndPoints";

const EventInvite = () => {
  const [eventData, setEventData] = useState(null);
  const { get } = fetchApi;
  const preferredDate = eventData ? eventData.data.host_prefered_time.replace("-", "") : "";
  const preferredTime = eventData ? moment(preferredDate, "DD-MM-YYYY HH:mm").format("YYYY-MM-DDTHH:mm") : "";
  const [inviteDetails, setInviteDetails] = useState({
    fullname: "",
    email: "",
    preferred_date_time: ""
  });
  const navigate = useNavigate();
  const [declinedInvite, setDeclinedInvite] = useState(false);
  const [resultMsg, setResultMsg] = useState("")
  let { eventToken } = useParams();
  const startDate = eventData ? moment(eventData.data.start_date, "DD-MM-YYYY").format("YYYY-MM-DDTHH:mm") : "";
  const endDate = eventData ? moment(eventData.data.end_date, "DD-MM-YYYY").format("YYYY-MM-DDTHH:mm") : "";
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const changeInviteDetails = (e) => {
    const {value, name} = e.target;

    setInviteDetails({
      ...inviteDetails,
      [name]: value
    })
  };

  const getEventDetails =  () => {
    get(`${BASE_URL}/${EVENT_BY_TOKEN}/${eventToken}`).then(res => setEventData(res));
  };

  const addParticipant = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...inviteDetails, event_id: eventData.data._id})
    }

    fetch(`${BASE_URL}/${ADD_PARTICIPANTS}`, requestOptions)
    .then(response => console.log(response.json()))
    .then((result) => {
      if(result.status === "success"){
        setTimeout(() => {
          setResultMsg(result?.message)
          navigate('/event_invite/event_invite_response')
        }, 2000)
      } else {
        setResultMsg(result?.message)
      }
    })
    .catch(error => {
      console.log(error.message);
      setResultMsg("An error has occured.")
    })
  }

  const declineInvite = () => {
    setDeclinedInvite(true);
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  useEffect(() => {
    getEventDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-28 mb-10 mx-auto md:mx-32">
        <div className="mx-2 md:mx-0 text-center w-full">
          <h1 className="text-2xl font-bold md:text-3xl">Hello, there.</h1>
          <p className="leading-6 text-gray-600 font-sm">
            You have been invited to {eventData ? eventData.data.event_type : ""} at
            <span className="text-blue-700 font-bold"> {eventData ? eventData.data.location : ""}</span>
            <br /> You can view the details below..
          </p>
          {declinedInvite ? <p className="font-bold text-red-900">You have succesfully declined this invite... Redirecting to your homepage soon</p> : null}
          {resultMsg ? <p className="text-red-500">{resultMsg}</p> : ""}
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
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
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
                className={emailRegex.test(inviteDetails.email) || inviteDetails.email === "" ? "outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium" : "border border-red-600 rounded outline-none md:w-[477px] w-full px-3 py-3 text-base font-medium"}
                required
                autoComplete="true"
              />
            </div>
            <div className="my-4 grid">
              <label className="text-base font-semibold mb-1">
                Preferred Date & Time
              </label>
              <input
                name="preferred_date_time"
                type="datetime-local"
                value={inviteDetails.preferred_date_time ? inviteDetails.preferred_date_time : preferredTime}
                onChange={changeInviteDetails}
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                min={startDate}
                max={endDate}
                required
              />
            </div>
            <div className="my-7 flex gap-8 md:justify-between">
              <button
                type="submit"
                className="rounded bg-[#0056D6] hover:bg-[#2563eb] text-white py-2.5 md:px-3 px-1.5 md:text-lg text-base"
                onClick={addParticipant}
              >
                Accept Invite
              </button>
              <button
                type="button"
                className="rounded border border-[#0056D6] text-[#0056D6] py-2.5 md:px-3 px-1.5 md:text-lg text-base"
                onClick={() => declineInvite()}
              >
                Decline Invite
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventInvite;
