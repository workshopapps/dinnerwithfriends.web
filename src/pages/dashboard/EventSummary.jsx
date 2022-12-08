import React, { useState, useEffect } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import clipboard from "./icons/clipboard.svg";
import checkmark from "./icons/checkmark.svg";
import userServices from "../../services/userServices";

const EventSummary = () => {;
	const [popup, setPopup] = useState(false);
	const [copied, setCopied] = useState(false);

  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const [formError, setFormError] = useState({});
  const [validEmail, setValidEmail] = useState(true);

  const location = useLocation();

  console.log(location.state);
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if (!regex.test(values)) {
      errors.email = "This is not a valid email format!";
      setValidEmail(false);
    } else {
      setValidEmail(true);
    }
    return errors;
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setFormError(validate(email));
  };

  const addParticipant = (e) => {
    e.preventDefault();

    if (validEmail) {
      setParticipants([...participants, email]);
    }
  };

  const saveValidEmail = async () => {
    const invitees = {
      email_list: participants,
      event_id: location.state.id,
    };
    setIsSubmit(true);
    const result = await userServices.sendInvite(invitees);
    if (result.status === "fail") {
      setIsSubmit(false);
      setIsFailure(true);
    }

    if (result.status === "success") {
      setIsSuccess(true);
      setPopup(true)
      setParticipants([]);
      setEmail("")
    }
  };

  const errorMsg = () => {
    let element;
    if (isSuccess) {
      element = (
        <p className="mt-4 text-xl text-green-600 text-center">
          An invite email successfully sent!
        </p>
      );
    } else if (isFailure) {
      element = (
        <p className="mt-4 text-xl text-red-600 text-center">
          Invite email was not sent, please try again...
        </p>
      );
    }
    return element;
  };

  const deleteParticipant = (index) => {
    const deletefromList = participants;
    deletefromList.splice(index, 1);
    setParticipants([...deletefromList]);
  };

	useEffect(() => {
		if (popup) {
			document.body.style.overflowY = "hidden";
		} else if (!popup) {
			document.body.style.overflowY = "scroll";
		}
	}, [popup]);


	const copyLink = () => {
		setCopied(true);
		navigator.clipboard.writeText(
			`https://catchup.hng.tech/event_invite/${location.state._id}`
		);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	return (
		<div>
			{popup && (
				<div className='z-[1000px] w-full h-full bg-black bg-opacity-50 fixed'>
					<div className=' p-6 flex flex-col  justify-center items-center rounded-2xl w-[92%] max-w-[550px] absolute bg-white left-2/4 top-[50%] -translate-y-2/4 -translate-x-2/4'>
						<div
							onClick={() => setPopup(false)}
							className=' cursor-pointer pb-1 flex flex-col justify-center items-center rounded-full bg-[#FAFAFA] absolute w-[33px] h-[33px] right-[20px] top-[20px]'>
							<div
								style={{ transform: "translateY(2.5px) rotate(45deg" }}
								className='bg-[#717172] rounded-lg w-[15px] h-[1.5px] mt-1'></div>
							<div
								style={{ transform: "translateY(-2.5px) rotate(-45deg" }}
								className='bg-[#717172] w-[15px] rounded-lg h-[1.5px] mt-1'></div>
						</div>
						<img
							className='mt-4 md:mt-8 mb-4'
							src={checkmark}
							alt='a checkmark'
						/>
						<h3 className='mb-4 text-2xl font-bold text-center'>
							Event Succesfully Created
						</h3>
						<p className=' w-full md:w-[340px] text-center text-base font-bold text-[#898989]'>
							You've successfully created your event, you can check your
							notifications to see your friends who have accepted your invite
						</p>
						<div className='flex  flex-col md:flex-row items center my-8 relative'>
							<Link
								to='/dashboard/upcoming_events'
								className='flex justify-center items-center w-[127px] mx-4 rounded bg-[#0056D6] text-white h-[44px]'>
								Ok, Thanks !
							</Link>
							<button
								className={`flex mt-4 md:mt-0 items-center justify-center w-[127px] mx-4 rounded bg-white border-[1px] ${
									copied
										? "border-green-500 text-green-500"
										: "border-[#0056D6] text-[#0056D6]"
								} h-[44px]`}
								onClick={() => copyLink()}>
								<img className='mr-2' src={clipboard} alt='copy to clipboard' />{" "}
								Copy link
							</button>
							<span
								className={`${
									copied ? "block" : "hidden"
								} absolute -top-10 left-6 p-2 text-green-500 bg-white border border-green-500 rounded transition text-xs`}>
								https://catchup.hng.tech/ copied. You can share to invite your
								friends
							</span>
						</div>
					</div>
				</div>
			)}
			<CreateEventNavbar />
			<div className='mt-[100px] md:mx-14 mx-5 my-10'>
				<h2 className='mt-10 text-3xl font-bold'>Event Summary</h2>
				<div className='mt-4 border w-full p-5 rounded-lg shadow text-[#59595B]'>
					<h5 className='text-2xl font-bold'>{location.state.event_title}</h5>
					<div className='grid gap-y-3 mt-4'>
						<div className='flex items-center'>
							<CiLocationOn className='text-xl' />
							<p className='text-base font-normal ml-2'>
								{location.state.location}
							</p>
						</div>
						<div className='flex items-center'>
							<CiCalendar className='text-xl' />
							<p className='text-base font-normal ml-2'>
								{location.state.host_prefered_time}
							</p>
						</div>
						<div className='flex items-center'>
							<CgMenuLeftAlt className='text-xl' />
							<p className='text-base font-normal ml-2'>
								{location.state.event_description}
							</p>
						</div>
					</div>
				</div>
				<div className='flex md:justify-start justify-between my-5'>
					<p className='text-lg font-bold md:mr-7'>
						Participants({participants.length})
					</p>
				</div>
        {errorMsg()}
        <form onSubmit={addParticipant}>
          <div className="w-full my-5 bg-[#E7F0FF] flex justify-between items-center gap-x-4 py-2 md:px-3 px-5">
            <input
              className="focus:outline-none h-full bg-transparent py-3 md:px-4 px-2 w-11/12 text-black md:text-base text-sm md:placeholder:text-base placeholder:text-sm"
              type="email"
              placeholder="Add a participant email"
              value={email}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg"
            >
              Add
            </button>
          </div>
          <small className="text-red-500">{formError.email}</small>
        </form>
				<div className='my-12'>
					{participants.map((invite, index) => (
						<div className='flex justify-between mb-4' key={index}>
							<div className='flex text-[#59595B] items-center'>
								<AiOutlineUser className='text-xl' />
								<p className='font-normal md:text-base text-sm md:ml-3 ml-2'>
									{invite}
								</p>
							</div>
							<div className='flex items-center md:mr-8'>


								<span
									className='cursor-pointer'
                  onClick={() => deleteParticipant(index)}
                  >
									<MdOutlineCancel className='text-2xl' />
								</span>
							</div>
						</div>
					))}
				</div>

				<div className='my-6 flex justify-between items-center'>
					<Link
						to='/dashboard/upcoming_events'
						className='text-xl font-semibold'>
						Back
					</Link>
					<div
						 onClick={saveValidEmail}
						className='rounded flex md:px-6 px-4 py-2.5 bg-[#0056D6] text-white items-center cursor-pointer'>
						<p className='md:text-xl text-base font-medium md:mr-2'>
            {isSubmit ? "Loading..." : "Send Invite"}
						</p>
						<BsPlus className='text-xl' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventSummary;
