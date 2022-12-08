import React, { useState, useEffect } from "react";
import { CiLocationOn, CiCalendar } from "react-icons/ci";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineCloseCircle, AiOutlineUser } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import EventSummaryModal from "../../components/EventSummaryModal";
import userServices from "../../services/userServices";

const EventSummary = () => {
	const [email, setEmail] = useState("");
	const [participant, setParticipant] = useState([]);
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
		participant.map((item) =>
			item.email === email ? setUsedEmail(true) : setUsedEmail(false)
		);
		// eslint-disable-next-line
	}, [email]);

	const validate = (values) => {
		const regex = /^[a-zA-Z][a-zA-Z0-9-_](?=.*[.]).{3,100}$/;
		const errors = {};
		if (!regex.test(values)) {
			errors.email = "This is not a valid email format!";
		}
		if (values.length === 0) {
			errors.email = "Please type in an email";
		}
		return errors;
	};

	useEffect(() => {
		if (Object.keys(formError).length === 0) {
			setValidEmail(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formError]);
  
	useEffect(() => {
    participant?.map((item) => item === email && setUsedEmail(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [email]);

	const handleChange = (e) => {
		setEmail(e.target.value);
		setFormError(validate(email));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email) return;
		setParticipant([...participant, email]);
		setEmail("");
		setValidEmail(false);
	};


	const copyLink = () => {
		setCopied(true);
		navigator.clipboard.writeText(
			`https://catchup.hng.tech/event_invite/${location.state._id}`
		);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	const deleteParticipant = (index) => {
		const deletefromList = participant;
		deletefromList.splice(index, 1);
		setParticipant([...deletefromList]);
	};

  const saveValidEmail = async () => {
		const invitees = {
			email_list: participant,
			event_id: location.state.id,
		};
		setIsSubmit(true);
		const result = await userServices.sendInvite(invitees);
		if (result.status === "fail") {
			setIsSubmit(false);
		}

		if (result.status === "success") {
			setParticipant([]);
			setEmail("");
		}
	};

	return (
		<div>
			<CreateEventNavbar />
			<EventSummaryModal popup = {popup} setPopup={setPopup} copyLink={copyLink} copied={copied} />
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
						Participants({participant.length})
					</p>
				</div>

				<div className='w-full mt-5 bg-[#E7F0FF] flex justify-between py-2 md:px-3 px-1'>
					<input
						type='email'
						placeholder='Add a participant email'
						className='outline-none border-none h-full bg-transparent py-3 md:px-4 px-2 w-11/12 text-[#7A6F6F] md:text-base text-sm md:placeholder:text-base placeholder:text-sm'
						value={email}
						onChange={handleChange}
						aria-invalid={validEmail ? "false" : "true"}
						aria-describedby='emailconfirm' // matches the error paragraph id
					/>
					{validEmail && !usedEmail ? (
						<button
							className='bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg'
							onClick={handleSubmit}>
							Done
						</button>
					) : (
						<button
							disabled
							className='bg-blue-600 md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg'>
							Done
						</button>
					)}
				</div>
				<small className='text-red-500'>{formError.email}</small>
				{participant?.map(
					(item) =>
						item === email && (
							<small className='text-red-500'>
								This participant has already been added
							</small>
						)
				)}

				<div className='my-12'>
					{participant.map((participant, index) => (
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
