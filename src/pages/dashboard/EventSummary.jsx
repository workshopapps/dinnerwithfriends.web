import React, { useState, useEffect } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineLike, AiOutlineDislike, AiOutlineUser } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import clipboard from './icons/clipboard.svg'
import checkmark from './icons/checkmark.svg'

const EventSummary = () => {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(true)
	const [ copied, setCopied ] = useState(false)

  // const [eventsData, setEventsData] = useState({})
  const location = useLocation()
  
  // setEventsData(location.state)
  //function to stop scrolling when popup is on
  useEffect(() => {
    if(popup) {
      document.body.style.overflowY ="hidden"
    }
    else if(!popup) {
      document.body.style.overflowY ="scroll"
    }
    console.log(popup)
}, [popup])

  const [participant, setParticipant] = useState([
    // {
    //   email: "Damijoshua@gmail.com",
    //   value: "Yes",
    // },
    // {
    //   email: "SarahM32492@gmail.com",
    //   value: "No",
    // },
    // {
    //   email: "FaithBala2@gmail.com",
    //   value: "No",
    // },
  ]);
  const addParticipant = (email) => {
    const newParticipant = [...participant, { email, value: "Yes" }];
    setParticipant(newParticipant);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    addParticipant(email);
    setEmail("")
  };

  const copyLink = () => {
		setCopied(true)
    navigator.clipboard.writeText(`https://catchup.hng.tech/event_invite/${location.state._id}`)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
	}

  return (
    <div>
      { popup &&
      <div className=" w-full h-full bg-black bg-opacity-50 fixed">
        <div className=" p-6 flex flex-col  justify-center items-center rounded-2xl w-[92%] max-w-[550px] absolute bg-white left-2/4 top-[50%] -translate-y-2/4 -translate-x-2/4">
          <div onClick ={() => setPopup(false)} className=" cursor-pointer pb-1 flex flex-col justify-center items-center rounded-full bg-[#FAFAFA] absolute w-[33px] h-[33px] right-[20px] top-[20px]">
            <div style={{transform: 'translateY(2.5px) rotate(45deg'}} className="bg-[#717172] rounded-lg w-[15px] h-[1.5px] mt-1"></div>
            <div style={{transform: 'translateY(-2.5px) rotate(-45deg'}} className="bg-[#717172] w-[15px] rounded-lg h-[1.5px] mt-1"></div>
          </div>
          <img className="mt-4 md:mt-8 mb-4" src={checkmark} alt="a checkmark" />
          <h3 className="mb-4 text-2xl font-bold text-center">Event Succesfully Created</h3>
          <p className=" w-full md:w-[340px] text-center text-base font-bold text-[#898989]">You've successfully created your event, you can check your notifications to see your friends who have accepted your invite</p>
          <div className="flex  flex-col md:flex-row items center my-8 relative">
            <button className=" w-[127px] mx-4 rounded bg-[#0056D6] text-white h-[44px]">Ok, Thanks !</button>
            <button className={`flex mt-4 md:mt-0 items-center justify-center w-[127px] mx-4 rounded bg-white border-[1px] ${copied ? "border-green-500 text-green-500": "border-[#0056D6] text-[#0056D6]"} h-[44px]`} onClick={() => copyLink()}><img className="mr-2" src={clipboard} alt="copy to clipboard" /> Copy link</button>
						<span className={`${copied ? "block" : "hidden"} absolute -top-10 left-6 p-2 text-green-500 bg-white border border-green-500 rounded transition text-xs`}>https://catchup.hng.tech/ copied. You can share to invite your friends</span>
          </div>
        </div>
      </div>
      }
      <CreateEventNavbar />
      <div className="mt-2 md:mx-14 mx-5 my-10">
        <h2 className="mt-10 text-3xl font-bold">Event Summary</h2>
        <div className="mt-4 border w-full p-5 rounded-lg shadow text-[#59595B]">
          <h5 className="text-2xl font-bold">{location.state.event_title}</h5>
          <div className="grid gap-y-3 mt-4">
            <div className="flex items-center">
              <CiLocationOn className="text-xl" />
              <p className="text-base font-normal ml-2">
                {location.state.location}
              </p>
            </div>
            <div className="flex items-center">
              <CiCalendar className="text-xl" />
              <p className="text-base font-normal ml-2">
                {/* {location.state.start_date} - {location.state.end_date}  */}
                {location.state.host_prefered_time}
              </p>
            </div>
            <div className="flex items-center">
              <CgMenuLeftAlt className="text-xl" />
              <p className="text-base font-normal ml-2">
                {location.state.event_description}
              </p>
            </div>
          </div>
        </div>
        <div className="flex md:justify-start justify-between my-5">
          <p className="text-lg font-bold md:mr-7">Participant({participant.length})</p>
          <button className="bg-transparent flex items-center text-[#0056D6]">
            <p className="mr-2 md:text-base text-sm">Add participant</p>
            <BsPlus />
          </button>
        </div>
        <div className="w-full my-5 bg-[#E7F0FF] flex justify-betweenn py-2 md:px-3 px-1">
          <input
            type="email"
            placeholder="Add a participant email"
            className="outline-none border-none h-full bg-transparent py-3 md:px-4 px-2 w-11/12 text-[#7A6F6F] md:text-base text-sm md:placeholder:text-base placeholder:text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
        <div className="my-12">
          {participant.map((invite, index) => (
            <div className="flex justify-between mb-4" key={index}>
              <div className="flex text-[#59595B] items-center">
                <AiOutlineUser className="text-xl" />
                <p className="font-normal md:text-base text-sm md:ml-3 ml-2">
                  {invite.email}
                </p>
              </div>
              <div className="flex items-center md:mr-8">
                <p className="text-xs ml-1.5">{invite.value}</p>
                {invite.value === "Yes" ? (
                  <AiOutlineLike className="text-2xl text-[#006600]" />
                ) : (
                  <AiOutlineDislike className="text-2xl text-[#CC0000]" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="my-6 flex justify-between items-center">
          <Link to="/dashboard/upcoming_events" className="text-xl font-semibold">
            Back
          </Link>
          <Link to={'/create_event'} className="rounded flex md:px-6 px-4 py-2.5 bg-[#0056D6] text-white items-center">
            <p className="md:text-xl text-base font-medium md:mr-2">
              Send invite
            </p>
            <BsPlus className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSummary;
