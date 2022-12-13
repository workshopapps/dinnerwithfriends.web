import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";
import userServices from "../services/userServices";

function AddParticipantModal({ eventId }) {
	const [email, setEmail] = useState("");
	const [participants, setParticipants] = useState([]);

	const [isSubmit, setIsSubmit] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isFailure, setIsFailure] = useState(false);

	const [formError, setFormError] = useState({});
	const [validEmail, setValidEmail] = useState(false);
	const [usedEmail, setUsedEmail] = useState(false);

	const { showModal, setShowModal } = CatchUpEventContextUse();

	const validate = (values) => {
		const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		const errors = {};

		if (!regex.test(values.trim()) && values.length !== 0) {
			errors.email = "This is not a valid email format!";
			setValidEmail(false);
		} else {
			setValidEmail(true);
		}

		if (values.length === 0) {
			errors.email = "Please type in an email";
		}

		return errors;
	};

	useEffect(() => {
		participants.map((item) =>
			item.toLowerCase() === email.toLowerCase() ? setUsedEmail(true) : setUsedEmail(false)
		);
		// eslint-disable-next-line
	}, [email]);

	useEffect(() => {
		if (Object.keys(formError).length === 0) {
			setValidEmail(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formError]);

	useEffect(() => {
		setFormError(validate(email))
	   }, [email])

	const handleChange = (e) => {
		setEmail(e.target.value);
		setFormError(validate(email));
	};

  const saveValidEmail = async () => {
    setIsSubmit(true);
    const invitees = {
      email_list: participants,
      event_id: eventId,
    };
    const result = await userServices.sendInvite(invitees);
    if (result.status === "fail") {
      setIsSubmit(false);
      setIsFailure(true);
    }

		if (result.status === "success") {
			setIsSuccess(true);
			setParticipants([]);
			setEmail("");

			setTimeout(() => {
				closeModal();
			}, 2000);
		}
	};

	const addParticipant = (e) => {
		e.preventDefault();

		if (validEmail) {
			setParticipants([...participants, email]);
		}
		setEmail("");
		setValidEmail(false);
	};

	const errorMsg = () => {
		let element;
		if (isSuccess) {
			element = (
				<p className='mt-4 text-xl text-green-600 text-center'>
					An invite email successfully sent!
				</p>
			);
		} else if (isFailure) {
			element = (
				<p className='mt-4 text-xl text-red-600 text-center'>
					Invite email was not sent, please try again...
				</p>
			);
		}
		return element;
	};

	const closeModal = () => {
		setIsFailure(false);
		setIsSuccess(false);
		setShowModal(false);
		setIsSubmit(false);
	};

	const deleteParticipant = (index) => {
		const deletefromList = participants;
		deletefromList.splice(index, 1);
		setParticipants([...deletefromList]);
	};

	return (
		<div>
			{showModal ? (
				<div className='z-50 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-60'
						onClick={closeModal}></div>
					<div className='relative my-6 mx-auto w-full h-screen'>
						<div className='w-[90%] h-[500px] mt-12 lg:w-[40%] max-w-[500px] px-6 mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
							<div className=' mt-5'>
								<div className='flex justify-end items-end'>
									<span
										onClick={closeModal}
										className='bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]'>
										<IoMdClose />
									</span>
								</div>
							</div>
							{errorMsg()}
							<form onSubmit={addParticipant}>
								<div className='w-full my-5 bg-[#E7F0FF] flex justify-between items-center gap-x-4 py-2 md:px-3 px-5'>
									<input
										className='focus:outline-none h-full bg-transparent py-3 md:px-4 px-2 w-11/12 text-black md:text-base text-sm md:placeholder:text-base placeholder:text-sm'
										type='email'
										placeholder='Add a participant email'
										value={email}
										onChange={handleChange}
										required
									/>
									{validEmail && !usedEmail ? (
										<button
											type='submit'
											className='bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg'>
											Add
										</button>
									) : (
										<button
											disabled
											type='submit'
											className='bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg'>
											Add
										</button>
									)}
								</div>
								<small className='text-red-500'>{formError.email}</small>
								{participants?.map(
									(item) =>
										item.toLowerCase() === email.toLowerCase() && (
											<small className='text-red-500'>
												This participant has already been added
											</small>
										)
								)}
							</form>
							<div className=' h-[200px] overflow-y-scroll my-8'>
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
							<div className='flex justify-end'>
								{participants[0] && (
									<button
										className=' w-[150px] mb-8 bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg'
										onClick={saveValidEmail}>
										{isSubmit ? "Loading..." : "Done"}
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default AddParticipantModal;
