import React, { useState } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CiLocationOn, CiStopwatch, CiCalendar } from "react-icons/ci";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom/dist";
import userServices from "../../services/userServices";

const Invitee = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [declinedInvite, setDeclinedInvite] = useState(false);
  let { id } = useParams();
  
  const [inviteDetails, setInviteDetails] = useState({
    fullname: "",
    email: "",
    preferred_date_time: "2pm"
  });
  const changeInviteDetails = (e) => {
    const {value, name} = e.target;

    setInviteDetails({
      ...inviteDetails,
      [name]: value
    })
  }
  const fetchEvent = async () => {
    const result = await userServices.getEventsById(id);
    setData(result);
  };
  fetchEvent();


  const declineInvite = () => {
    setDeclinedInvite(true);
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }
  const addParticipant = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...inviteDetails, event_id: id})
    }
    fetch('https://prybar.onrender.com/api/v1/participant/addpart', requestOptions)
    .then(response => response.json())
    .then((result) => {
      if(result.status === "success"){
        setTimeout(() => {
          navigate('/event_invite/event_invite_response')
        }, 2000)
      }
      console.log(result)
    })
  }
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
            <span className="text-[#0056D6] font-bold"> Mathew Mathais.</span>
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
                  {" "}&#160;
                  {data.location}
                </span>
              </span>

              <span className="flex mt-3">
                {" "}
                <CiCalendar className="mr-4 text-[25px]" />
                Agreed Date:
                {data.final_event_date === !null ? 
                <span className="font-bold"> &#160; {data.final_event_date}</span>
                : <span className="font-bold"> &#160; Not Available</span>}
              </span>

              <span className="flex mt-3">
                {" "}
                <CiStopwatch className="mr-4 text-[25px]" />
                Host Selected Time: 
                <span className="font-bold">&#160; {data.host_prefered_time}</span>{" "}
              </span>

              <span className="flex mt-3">
                {" "}
                <HiOutlineMenuAlt1 className="mr-4 text-[25px]" />
                Dinner with
                <span className="font-bold">
                  {" "}&#160;
                  {data.event_description}
                </span>{" "}
              </span>
            </div>
          </div>
          <div className="md:w-1/2 md:px-8">
            <form onSubmit={addParticipant} className=" my-10 md:mt-0 text-[#4B4B4C] font-normal [&>input]:mt-2 [&>input]:w-full [&>input]:mb-3.5">
              <div className="relative w-full mb-4 ">
                <label className="pb-0 mb-2 font-bold" htmlFor="email">
                  Full Name
                </label>

                <input
                  className="border border-gray-600 block w-full h-10 rounded-md px-3"
                  placeholder="John Doe"
                  defaultValue={inviteDetails.fullname}
                  onChange={changeInviteDetails}
                />
              </div>

              <div className="relative w-full mb-4 ">
                <label className="pb-0 mb-2 font-bold" htmlFor="email">
                  Email
                </label>

                <input
                  className="border border-gray-600 block w-full h-10 rounded-md px-3"
                  placeholder="JohnDoe@gmail.com"
                  defaultValue={inviteDetails.email}
                  onChange={changeInviteDetails}
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
                defaultValue={inviteDetails.date}
                onChange={changeInviteDetails}
                className="outline-none border border-[#898989] rounded md:w-[477px] w-full px-3 py-3 text-base font-medium"
                required
              />
            </div>
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
                  type="submit"
                  onClick={() => declineInvite()}
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
