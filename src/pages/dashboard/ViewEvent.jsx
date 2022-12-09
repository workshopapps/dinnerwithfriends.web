import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/CreateEvent/CreateEventNavbar";
import arrow from "../../assets/icons/arrow-down.svg";
import profile from "../../assets/img/profile.svg";
import AddParticipantModal from "../../components/AddParticipantModal";
import { useParams } from "react-router-dom";
import clipboard from "../dashboard/icons/clipboard.svg";
import userServices from "../../services/userServices";
import { MdKeyboardArrowDown } from "react-icons/md";
import ViewEventMenuModal from "../../components/ViewEventMenuModal";
import DeleteEventModal from "../../components/DeleteEventModal";
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

	const { id } = useParams();
	useEffect(() => {
		const getParticipants = async () => {
			const data = await userServices.getParticipants(id);
			setParticipants(data);
		};
		getParticipants();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const copyLink = () => {
		setCopied(true);
		navigator.clipboard.writeText(
			`https://catchup.hng.tech/event_invite/${id}`
		);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	const [showDeleteMenu, setShowDeleteMenu] = useState(false);
	const [viewEventMenu, setViewEventMenu] = useState(false);

	return (
		<>
			{viewEventMenu && (
				<ViewEventMenuModal
					setViewEventMenu={setViewEventMenu}
					setShowDeleteMenu={setShowDeleteMenu}
				/>
			)}
			<AddParticipantModal eventId={id} />
			{showDeleteMenu && (
				<DeleteEventModal setShowDeleteMenu={setShowDeleteMenu} eventId={id} />
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
						<button
							onClick={() => setViewEventMenu(true)}
							className='flex items-center text-sm text-[#0056D6]'>
							<span>Menu</span>
							<MdKeyboardArrowDown />
						</button>

						<aside className='font-medium text-sm  md:mt-0'>
							Agreed Date
							{singleEvent?.final_event_date === null ? (
								<span className='bg-[#E7F0FF] text-[#003585] text-xs px-2 py-1 font-semibold rounded ml-1'>
									Not Decided
								</span>
							) : (
								<span className='bg-[#E7F0FF] text-[#003585] text-xs px-2 py-1 font-semibold rounded ml-1'>
									{singleEvent?.final_event_date}
								</span>
							)}
						</aside>
					</div>

					<section className='flex flex-col justify-center'>
						<div className='max-h-[17em] overflow-y-scroll scroll-blue-500 pr-4'>
							{participants.map((invitee) => (
								<div
									onClick={() => toggleShowAccordion(invitee.id)}
									key={invitee.id}
									className='py-3 border-b border-gray-200 transition-all'>
									<div className='flex justify-between items-center transition-all'>
										<div className='flex items-center'>
											<img
												className='rounded-full h-fit w-8 lg:w-10 mr-3'
												src={profile}
												alt=''
											/>
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
							} absolute -top-10 left-6  p-2 text-green-500 bg-white border border-green-500 rounded transition text-xs`}>
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
