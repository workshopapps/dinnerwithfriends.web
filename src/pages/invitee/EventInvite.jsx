import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom/dist";

const EventInvite = () => {
  const [inviteDetails, setInviteDetails] = useState({
    fullname: "",
    email: "",
    preferred_date_time: ""
  });
  const navigate = useNavigate();
  const [declinedInvite, setDeclinedInvite] = useState(false);
  let { eventId } = useParams();

  const changeInviteDetails = (e) => {
    const {value, name} = e.target;

    setInviteDetails({
      ...inviteDetails,
      [name]: value
    })
  }

  const addParticipant = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...inviteDetails, event_id: eventId})
    }
    fetch('https://prybar.onrender.com/api/v1/participant/addpart', requestOptions)
    .then(response => response.json())
    .then((result) => {
      if(result.status === "success"){
        setTimeout(() => {
          navigate('/event_invite/event_invite_response')
        }, 2000)
      }
    })
  }

  const declineInvite = () => {
    setDeclinedInvite(true);
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <div>
      <Navbar />
      <div className="mt-28 mb-10 mx-auto md:mx-32">
        <div className="mx-2 md:mx-0 text-center w-full">
          <h1 className="text-2xl font-bold md:text-3xl">Hello, there.</h1>
          <p className="leading-6 text-gray-600 font-sm">
            You have been invited to dinner by{" "}
            <span className="text-blue-700 font-bold"> Mathew Mathais.</span>
            <br /> You can view the details below..
          </p>
          {declinedInvite ? <p className="font-bold text-red-900">You have succesfully declined this invite... Redirecting to your homepage soon</p> : null}
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
              <input
                name="email"
                type="email"
                placeholder="JohnDoe@gmail.com"
                value={inviteDetails.email}
                onChange={changeInviteDetails}
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
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
                placeholder="17/11/2022 - 3pm"
                value={inviteDetails.date}
                onChange={changeInviteDetails}
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                required
              />
            </div>
            <div className="my-7 flex justify-between">
              <button
                type="submit"
                className="rounded bg-[#1070FF] text-white py-2.5 md:px-3 px-1.5 md:text-lg text-base"
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