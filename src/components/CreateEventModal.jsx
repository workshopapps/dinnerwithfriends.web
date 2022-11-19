import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCalendarOutline, IoCloseOutline } from "react-icons/io5";
import SingleCalendar from "../components/SingleCalendar/SingleCalendar";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";
import Button from "./Button";

const CreateEventModal = ({ showModal, setShowModal }) => {
	const [showCalendar, setShowCalendar] = useState(false);
	const { dateAndTime, setDateAndTime } = CatchUpEventContextUse();
	const [eventFormValues, setEventFormValues] = useState({
        eventName: '',
        eventDescription: '',
        eventLocation: '',
        eventPeriods: []
    });

	const deleteSelectedDateAndTime = (id) => {
		setDateAndTime(dateAndTime.filter((item) => id !== item.id));
	};

    const createNewEvent = () =>{
        console.log(eventFormValues)
        setTimeout(() => {
            setShowCalendar(false)
            setEventFormValues({
                eventName: '',
                eventDescription: '',
                eventLocation: '',
                eventPeriods: []
            })
            setDateAndTime([])
            setShowModal(false)
        }, 1000);
    }

	return (
		<>
			{showModal ? (
				<>
					<div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div
							className='fixed inset-0 w-full h-full bg-black opacity-60'
							onClick={() => setShowModal(false)}></div>
						<div className='relative my-6 mx-auto w-full'>
							<div className='w-[90%] lg:w-[55%] max-w-[700px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
								<div className='flex gap-3 p-4'>
									<div className='flex-[1]'>
										<div className='flex items-center'>
											<div
												onClick={() => setShowModal(false)}
												className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#FAFAFA] cursor-pointer'>
												<span className='text-[#717172]'>
													<IoCloseOutline />
												</span>
											</div>
											<p className='ml-4 text-sm font-bold'>
												Create Catchup Event
											</p>
										</div>

										<div className='mt-6 text-sm w-full'>
											<input
												onChange={(e) =>
													setEventFormValues({
														...eventFormValues,
														eventName: e.target.value,
													})
												}
												type='text'
                                                value={eventFormValues.eventName}
												placeholder='Event Name'
												className='border border-[#D1D7DA] text-[#7A6F6F] bg-[#FBF9F9] font-medium text-xs px-3 py-3 rounded-[10px] w-full outline-none mb-2'
											/>
											<textarea
												onChange={(e) =>
													setEventFormValues({
														...eventFormValues,
														eventDescription: e.target.value,
													})
												}
                                                value={eventFormValues.eventDescription}
												placeholder='Event Description'
												className='border border-[#D1D7DA] text-[#7A6F6F] bg-[#FBF9F9] font-medium text-xs px-3 py-3 rounded-[10px] w-full outline-none h-[100px]'
											/>
											<input
                                                value={eventFormValues.eventLocation}
												onChange={(e) =>
													setEventFormValues({
														...eventFormValues,
														eventLocation: e.target.value,
													})
												}
												type='text'
												placeholder='Location'
												className='border border-[#D1D7DA] text-[#7A6F6F] bg-[#FBF9F9] font-medium text-xs px-3 py-3 rounded-[10px] w-full outline-none mb-4 mt-1'
											/>
											<p className='text-xs font-bold mb-2'>
												Add Preferred Date and Time
											</p>
											<div className='relative flex items-center border-[#D1D7DA] rounded-[10px] mt-1 mb-2 border text-[#7A6F6F] bg-[#FBF9F9] w-full h-fit'>
												<input
													type='text'
                                                    disabled
													placeholder='Add Event Time'
													className='font-medium flex-[5] text-xs px-3 py-3 outline-none bg-transparent'
												/>
												<span
													onClick={() => setShowCalendar(!showCalendar)}
													className='cursor-pointer flex-[1] relative justify-center flex'>
													<IoCalendarOutline />
												</span>
											</div>
											<p className='text-[11px] mb-4'>
												You can add up to 8 available dates
											</p>
											<div className='h-[150px] overflow-y-scroll scrollbar-hide scroll-smooth'>
												{dateAndTime.map((item, id) => (
													<div
														key={id}
														className='relative flex items-center border-[#D1D7DA] rounded-[10px] mt-1 mb-2 border text-[#7A6F6F] bg-[#FBF9F9] w-full cursor-pointer'>
														<input
															type='text'
															disabled
															value={item.title}
															className='font-medium flex-[5] text-xs px-3 py-3 outline-none bg-transparent'
														/>
														<span
															onClick={() => deleteSelectedDateAndTime(item.id)}
															className='cursor-pointer flex-[1] relative justify-center flex'>
															<IoCloseOutline />
														</span>
													</div>
												))}
											</div>
										</div>
									</div>

									<div className='flex-[1]'>
										<div
											className={`w-full transition-all duration-150 ${
												showCalendar ? "opacity-100" : "opacity-0"
											}`}>
											<SingleCalendar
												setEventFormValues={setEventFormValues}
												eventFormValues={eventFormValues}
											/>
										</div>
										<div className='flex justify-end mt-4'>
											<Button
												className='flex items-center'
												onClick={() => createNewEvent()}>
												<span className='text-white mr-2'>
													<AiOutlinePlus />
												</span>
												<span>Create Event</span>
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default CreateEventModal;
