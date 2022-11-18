import React, { useState } from "react";
import Button from "../../../components/Button";
import CreateEventNavbar from "../../../components/CreateEventNavbar";
import { AiOutlinePlus } from "react-icons/ai";
import { SiGooglecalendar } from "react-icons/si";
import { IoNotificationsOff } from "react-icons/io5";
import { BsCalendar2Week } from "react-icons/bs";
import CreateEventModal from "../../../components/CreateEventModal";

const CreateEvent = () => {
	const [showCreateEventModal, setShowCreateEventModal] = useState(false);
	return (
		<div className=''>
			<CreateEventModal
				showModal={showCreateEventModal}
				setShowModal={setShowCreateEventModal}
			/>
			<CreateEventNavbar />

			<div className='pt-8 pb-12 px-4 md:px-8 max-w-[1200px] mx-auto'>
				<div className='text-center mb-4'>
					<h1 className='text-xl font-bold'>Welcome</h1>
					<p className='text-[#898989] text-sm font-bold'>
						Create events, send invites and keep up with your friends.
					</p>
				</div>

				<div className='flex flex-col items-center bg-[#E7F0FF] border border-[#B6B6B6] py-8'>
					<div onClick={() => setShowCreateEventModal(true)}>
						<Button className='flex items-center mb-8'>
							<span className='text-white mr-2'>
								<AiOutlinePlus />
							</span>
							<span>Create Event</span>
						</Button>
					</div>

					<div className='text-center text-sm'>
						<h1 className='font-bold mb-1'>New Catch Up Event</h1>
						<p className='text-[#898989] text-xs font-bold'>
							Create event and let people chip in
						</p>
					</div>
				</div>

				<div className='flex flex-col md:flex-row'>
					<div className='border-[#E3E3E3] border border-t-0 flex-[1] py-8'>
						<h1 className='font-bold mb-3 ml-1 text-sm md:text-base text-[#424245]'>
							Calendar
						</h1>

						<button className='border border-[#D0D5DD] flex items-center py-2 px-2 md:px-4 rounded-[8px] ml-1'>
							<span className='text-sm mr-2'>
								<SiGooglecalendar />
							</span>
							<span className='text-[10px] font-medium text-[#344054]'>
								Sync with Google Calendar
							</span>
						</button>

						<div className='py-8 px-4 text-center flex flex-col items-center'>
							<h1 className='font-bold text-[#424245] text-sm md:text-base'>
								Notifications
							</h1>
							<span className='text-[#91BDFF] text-5xl my-4'>
								<IoNotificationsOff />
							</span>
							<p className='text-xs font-bold text-[#424245]'>
								You have no notification at the moment
							</p>
						</div>
					</div>

					<div className='flex-[1] lg:flex-[3] py-8 px-6'>
						<p className='font-bold text-[#424245] text-sm md:text-base'>
							Upcoming Events
						</p>
						<div className='flex flex-col justify-center items-center h-full my-6'>
							<span className='text-[#91BDFF] text-8xl my-4'>
								<BsCalendar2Week />
							</span>
							<p className='text-xs font-bold text-[#424245]'>
								You do not have any event yet.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateEvent;
