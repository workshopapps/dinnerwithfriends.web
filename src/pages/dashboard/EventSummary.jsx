import React, { useState, useEffect } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineCloseCircle, AiOutlineUser } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import EventSummaryModal from "../../components/EventSummaryModal";
import userServices from "../../services/userServices";
import moment from "moment";

const EventSummary = () => {
	const [email, setEmail] = useState("");
	const [participants, setParticipants] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
	const [formError, setFormError] = useState({});
	const [validEmail, setValidEmail] = useState(false);
	const [usedEmail, setUsedEmail] = useState(false);

	const [popup, setPopup] = useState(false);
	const [copied, setCopied] = useState(false);

	const location = useLocation();
	useEffect(() => {
		if (popup) {
			document.body.style.overflowY = "hidden";
		} else if (!popup) {
			document.body.style.overflowY = "scroll";
		}
	}, [popup]);

	useEffect(() => {
		if (Object.keys(formError).length === 0) {
			setValidEmail(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formError]);

	const validate = (values) => {
		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		const errors = {};

		if (!regex.test(values.trim()) && values.length !== 0) {
			errors.email = "Keep typing a valid full email";
			setValidEmail(false);
		} else {
			setValidEmail(true);
		    errors.email = `invite ${values}`;
		  }
		return errors;
	};

	useEffect(() => {
		participants.map((item) =>
			item.toLowerCase() === email.toLowerCase() ? setUsedEmail(true) : setUsedEmail(false)
		);
		// eslint-disable-next-line
	}, [email]);

	const handleChange = (e) => {
		setEmail(e.target.value);
		setFormError(validate(email));
	};

	useEffect(() => {
	 setFormError(validate(email))
	}, [email])


	const addParticipant = (e) => {
		e.preventDefault();

		if (validEmail && !usedEmail) {
			setParticipants([...participants, email]);
		}
		setEmail("");
		setValidEmail(false);
		setUsedEmail(false);
	};

	const saveValidEmail = async () => {
		setIsSubmit(true);
		const invitees = {
			email_list: participants,
			event_id: location.state.event._id,
		};

		const result = await userServices.sendInvite(invitees);
		if (result.status === "fail") {
			setIsSubmit(false);
		}

		if (result.status === "success") {
			setIsSubmit(false)
			setPopup(true)
			setParticipants([]);
			setEmail("");
		}
	};


	const copyLink = () => {
		setCopied(true);
		navigator.clipboard.writeText(
			`https://catchup.hng.tech/invitee/${location.state.event._id}`
		);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	const deleteParticipant = (index) => {
		const deletefromList = participants;
		deletefromList.splice(index, 1);
		setParticipants([...deletefromList]);
	};

	return (
	  <>
		<div>
			<CreateEventNavbar />
			<div className='mt-[100px] md:mx-14 mx-5 my-10'>
				<h2 className='mt-10 text-3xl font-bold'>Event Summary</h2>
				<div className='mt-4 border w-full p-5 rounded-lg shadow text-[#59595B]'>
					<h5 className='text-2xl font-bold'>{location.state.event.event_title.toUpperCase()}</h5>
					<div className='grid gap-y-3 mt-4'>
						<div className='flex items-center'>
							<CiLocationOn className='text-xl' />
							<p className='text-base font-normal ml-2'>
								{location.state.event.location}
							</p>
						</div>
						<div className='flex items-center'>
							<CiCalendar className='text-xl' />
							<p className='text-base font-normal ml-2'>
								{moment(location.state.event.start_date, "DD-MM-YYYY").format('Do MMMM YYYY')} - {moment(location.state.event.end_date, "DD-MM-YYYY").format('Do MMMM YYYY')}
							</p>
						</div>
						<div className='flex items-center'>
						    <BsClock className='text-xl' />
							<p className='text-base font-normal ml-2'>
								{moment(location.state.event.host_prefered_time.split('-')[1].replace(":", ""), "hmm").format("HH:mm a")}
							</p>
						</div>
						<div className='flex items-center'>
							<CgMenuLeftAlt className='text-xl' />
							<p className='text-base font-normal ml-2'>
								{location.state.event.event_description}
							</p>
						</div>
					</div>
				</div>
				<div className='flex md:justify-start justify-between my-5'>
					<p className='text-lg font-bold md:mr-7'>
						Add Participants
					</p>
				</div>
				<form onSubmit={ addParticipant }>
				    <div className='w-full mt-5  flex justify-between py-2'>
					    <input
							type='email'
							placeholder='Ex: james@gmail.com'
							className='rounded-[8px] outline-none border border-[#59595B] h-full bg-white py-3 md:py-[28px] md:px-[24px] px-2 w-full text-[#7A6F6F] md:text-base text-sm md:placeholder:text-base placeholder:text-sm'
							value={email}
							required
							onChange={handleChange}
							aria-invalid={validEmail ? "false" : "true"}
							aria-describedby='emailconfirm' // matches the error paragraph id
					    />

				   </div>
				   {
					usedEmail ? (participants?.map(
						(item) =>
							item.toLowerCase() === email.toLowerCase() && (
								<small className='shadow-errorShadow rounded-[4px] border border-[#B5BEC1] bg-white px-[16px] py-[8px] text-[#1E2122] pr-[2rem]'>
									This participant has already been added
								</small>
							)
					)) : <small className={` ${validEmail ? 'bg-[#C3DFF7] shadow-errorShadow rounded-[4px] border border-[#B5BEC1] px-[16px] py-[8px] text-[#1E2122] pr-[2rem]' :  'shadow-errorShadow rounded-[4px] border border-[#B5BEC1] bg-white px-[16px] py-[8px] text-[#1E2122] pr-[2rem]'}`}>{formError.email}</small>
				   }
				</form>
				<div className='my-12'>
					{participants.map((participant, index) => (
						<div className='flex justify-between mb-4' key={index}>
							<div className='flex text-[#59595B] items-center'>
								<AiOutlineUser className='text-xl' />
								<p className='font-normal md:text-base text-sm md:ml-3 ml-2'>
									{participant}
								</p>
							</div>
							<div className='flex items-center md:mr-8'>
								<button
									onClick={() => deleteParticipant(index)}
									className='cursor'>
									<AiOutlineCloseCircle />
								</button>
							</div>
						</div>
					))}
				</div>

				<div className='my-6 flex justify-between items-center'>
					<Link
						to='/create_event'
						className='text-[#1070FF] text-xl md:text-[20px] font-bold rounded-[4px] border border-[#1070ff] px-[12px] md:px-[24px] py-[10px]'>
						Back
					</Link>
					{
						participants.length < 1 ?
						(<button disabled className='rounded-[4px] flex md:px-6 px-4 py-2.5 bg-[#868686] text-white items-center cursor-pointer'>
						  <p className='md:text-[20px] text-base font-medium md:mr-2'>
						     Send Invite
						  </p>
						</button>
						) : (
								<button
								onClick={saveValidEmail}
							    className='rounded-[4px] flex md:px-6 px-4 py-2.5 bg-[#1070ff] text-white items-center cursor-pointer'>
							      <p className='md:text-[20px] text-base font-medium md:mr-2'>
							{isSubmit  ? (
								<span>Loading...</span>
							) : (
								<span>Send Invite</span>
							)
							}
							</p>
						</button>
						)
					}
				</div>
			</div>
		</div>
		{popup && <EventSummaryModal setPopup={setPopup} copyLink={copyLink} copied={copied}/>}
		</>
	);
};

export default EventSummary;
