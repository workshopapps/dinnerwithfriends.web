import React, { useEffect } from "react";
import { useState } from "react";
import moment from "moment/moment";
import Navbar from "../../components/CreateEvent/CreateEventNavbar";
import arrow from "../../assets/icons/arrow-down.svg";
import AddParticipantModal from "../../components/AddParticipantModal";
import { useParams } from "react-router-dom";
import clipboard from "../dashboard/icons/clipboard.svg";
import userServices from "../../services/userServices";
import { MdKeyboardArrowDown } from "react-icons/md";
import DeleteEventModal from "../../components/DeleteEventModal";
import { IoMdClose } from "react-icons/io";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import DeleteSuccessModal from "../../components/DeleteSuccessModal";
import RemoveParticipantModal from "../../components/RemoveParticipantModal";
import DeleteParticipantModal from "../../components/DeleteParticipantModal";
import DeleteParticipantSuccessModal from "../../components/DeleteParticipantSuccessModal";

const ViewEvent = () => {
	const [isActive, setIsActive] = useState(false);
	const [singleEvent, setSingleEvent] = useState({});
	const [participants, setParticipants] = useState([]);
	const [copied, setCopied] = useState(false);
	const toggleShowAccordion = (id) => {
		if (isActive === id) {
			setIsActive();
		} else {
			setIsActive(id);
		}
	};

	useEffect(() => {
		const eArr = localStorage.getItem("eventsArr");
		const events = JSON.parse(eArr);
		const sEvent = events.find((event) => event._id === id);
		setSingleEvent(sEvent);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const newDate = singleEvent && moment(singleEvent.final_event_date).format("dddd, MMMM Do YYYY");
	
	let { id } = useParams();
	const getParticipants = async (id) => {
		const data = await userServices.getParticipants(id);
		setParticipants(data);
	};
	useEffect(() => {

		getParticipants(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const copyLink = () => {
		setCopied(true);
		navigator.clipboard.writeText(`https://catchup.hng.tech/invitee/${id}`);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	const [showDeleteMenu, setShowDeleteMenu] = useState(false);
	const [showDeleteParticipant, setShowDeleteParticipant] = useState(false);
	const [showDeleteParticipantSuccess, setShowDeleteParticipantSucess] = useState(false);
	const [showRemoveMenu, setShowRemoveMenu] = useState(false);
	const [showDeleteSucess, setShowDeleteSuccess] = useState(false);
	const [viewEventMenu, setViewEventMenu] = useState(false);

	const { setShowModal } = CatchUpEventContextUse();

	const handleAdd = () => {
		setViewEventMenu(false);
		setShowModal(true);
	};
	const handleRemove = () => {
		setViewEventMenu(false);
		setShowRemoveMenu(true);
	};
	const handleDelete = () => {
		setViewEventMenu(false);
		setShowDeleteMenu(true);
	};
	return (
		<>
			<AddParticipantModal eventId={id} />
			{showDeleteMenu && (
				<DeleteEventModal
					setShowDeleteMenu={setShowDeleteMenu}
					setShowDeleteSuccess={setShowDeleteSuccess}
					eventId={id}
				/>
			)}
			{showDeleteSucess && (
				<DeleteSuccessModal setShowDeleteSuccess={setShowDeleteSuccess} />
			)}
			{showRemoveMenu && (
				<RemoveParticipantModal
					participants={participants}
					setShowRemoveMenu={setShowRemoveMenu}
					setShowDeleteParticipant={setShowDeleteParticipant}
				/>
			)}
			{showDeleteParticipant && (
				<DeleteParticipantModal
					setShowDeleteParticipant={setShowDeleteParticipant}
					setShowDeleteParticipantSucess={setShowDeleteParticipantSucess}
				/>
			)}
			{showDeleteParticipantSuccess && (
				<DeleteParticipantSuccessModal
				setShowDeleteParticipant={setShowDeleteParticipant}
					setShowDeleteParticipantSucess={setShowDeleteParticipantSucess}
				/>
			)}
			<Navbar />
			<div className="font-['DM_Sans'] w-[90%] lg:w-4/5 mx-auto mt-[100px] my-4 sm:max-w-xl md:max-w-2xl sm:border sm:border-slate-300 sm:rounded-md">
				<main className='sm:p-8 mx-auto'>
					<section className='text-center py-5 md:py-0'>
						<div className='sm:border-b-2 sm:border-dashed sm:border-slate-300 py-5'>
							<h1 className='text-[#0056D6] font-semibold text-[1.4rem] lg:text-3xl'>
								{singleEvent?.event_title}
							</h1>
						</div>
						<p className='text-gray-600 mx-auto text-xs md:text-sm my-2'>
							{singleEvent?.event_description}
						</p>
						<p className='text-gray-600 mx-auto text-xs md:text-sm my-2'>
							<span className='font-semibold'>Location:</span>{" "}
							{singleEvent?.location}
						</p>
						<p className='text-gray-600 mx-auto text-xs md:text-sm my-2'>
							<span className='font-semibold'>Event:</span>{" "}
							{singleEvent?.event_type}
						</p>
					</section>
					<div className='flex flex-row justify-between md:items-center my-10'>
						<div className='relative'>
							<button
								onClick={() => setViewEventMenu(!viewEventMenu)}
								className='flex items-center text-sm text-[#0056D6]'>
								<span>Menu</span>
								<MdKeyboardArrowDown />
							</button>
							{viewEventMenu && (
								<div className='absolute top-5 md:-left-5'>
									<div className='shadow-md border border-[#e1e1e1] bg-[#fff] rounded-[20px]'>
										<div className='p-4'>
											<div className='flex justify-end md:w-[200px] w-[180px]'>
												<span
													onClick={() => setViewEventMenu(false)}
													className='bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]'>
													<IoMdClose />
												</span>
											</div>
											<div className='flex flex-col item-center justify-center w-fit md:w-[90%] mx-auto'>
												<div
													onClick={handleAdd}
													className='bg-transparent hover:bg-[#0056D6] text-[#0056D6] hover:text-white transition-all duration-200 px-8 md:px-4 py-2 cursor-pointer w-full rounded-[4px] text-left text-xs'>
													Add Participant
												</div>
												<div
													onClick={handleRemove}
													className='bg-transparent hover:bg-[#0056D6] text-[#0056D6] hover:text-white transition-all duration-200 px-8 md:px-4 py-2 cursor-pointer w-full rounded-[4px] text-left text-xs'>
													Remove Participant
												</div>
												<div
													onClick={handleDelete}
													className='bg-transparent hover:bg-[#0056D6] text-[#0056D6] hover:text-white transition-all duration-200 px-8 md:px-4 py-2 cursor-pointer w-full rounded-[4px] text-left text-xs'>
													Delete Event
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>

						<aside className='font-medium text-sm  md:mt-0'>
							Agreed Date
							{singleEvent?.final_event_date === null ? (
								<span className='bg-[#E7F0FF] text-[#003585] text-xs px-2 py-1 font-semibold rounded ml-1'>
									Not Decided
								</span>
							) : (
								<span className='bg-[#E7F0FF] text-[#003585] text-xs px-2 py-1 font-semibold rounded ml-1'>
									{singleEvent && newDate}
								</span>
							)}
						</aside>
					</div>

					<section className='flex flex-col justify-center'>
						<div className='max-h-[17em] overflow-y-scroll pr-4'>
							{participants && participants.map((invitee) => (
								<div
									onClick={() => toggleShowAccordion(invitee.id)}
									key={invitee.id}
									className='py-3 border-b border-gray-200 transition-all'>
									<div className='flex justify-between items-center transition-all'>
										<div className='flex items-center'>
											{/* <img
												className='rounded-full h-fit w-8 lg:w-10 mr-3'
												src={profile}
												alt=''
											/> */}
											<div className="mr-3 w-10 h-10 flex justify-center items-center text-white bg-[#0056D6] rounded-full font-semibold">{invitee.fullname.slice(0,2)}</div>
											<div className='space-y-[-3px]'>
												<h4 className='font-semibold text-sm'>
													{participants.indexOf(invitee) + 1}
													{(participants.indexOf(invitee) + 1) % 10 === 1 ? (
														<span>st</span>
													) : (participants.indexOf(invitee) + 1) % 10 === 2 ? (
														<span>nd</span>
													) : (participants.indexOf(invitee) + 1) % 10 === 3 ? (
														<span>rd</span>
													) : (
														<span>th</span>
													)}
													&#160;
													{""}
													Invitee
												</h4>
												<p className='text-gray-600 text-xs md:text-sm'>
													{invitee.fullname}
												</p>
											</div>
										</div>
										<img
											className={
												isActive === invitee.id
													? "w-3 sm:w-4 md:w-5 rotate-180 transition duration-250 ease-in-out cursor-pointer"
													: "w-3 sm:w-4 md:w-5 transition duration-250 ease-in-out cursor-pointer"
											}
											src={arrow}
											alt=''
										/>
									</div>
									{isActive === invitee.id && (
										<div className='my-3 space-y-1 transition-all'>
											<h5 className='font-medium text-xs mb-3'>
												Selected Date/Time:{" "}
												<span className='font-normal'>
													{invitee.preferred_date_time}
												</span>{" "}
											</h5>
											<p className='text-gray-500 text-xs font-medium '>
												Status of Attendance:{" "}
												<span className='bg-[#D0FFD0] text-[#006600] text-[10px] p-1 rounded ml-1'>
													Accepted
												</span>
											</p>
										</div>
									)}
								</div>
							))}
						</div>
						<div className='flex justify-center items-center mt-6'>
							<button
								className={`flex mt-4 md:mt items-center justify-center w-[127px] mx-4 rounded bg-white border-[1px] ${
									copied
										? "border-green-500 text-green-500"
										: "border-[#0056d6] text-[#0056d6]"
								} h-[44px]`}
								onClick={() => copyLink()}>
								<img className='mr-2' src={clipboard} alt='copy to clipboard' />
								Copy link
							</button>
						</div>
						<span
							className={`${
								copied ? "block" : "hidden"
							} absolute top-0 left-6  p-2 text-green-500 bg-white border border-green-500 rounded transition text-xs`}>
							https://catchup.hng.tech/ copied. You can share to invite your
							friends
						</span>
					</section>
				</main>
			</div>
		</>
	);
};

export default ViewEvent;
