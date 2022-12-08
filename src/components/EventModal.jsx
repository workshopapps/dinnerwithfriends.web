import React from "react";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";
import { IoMdClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { BiCopy } from "react-icons/bi";
import Button from "./Button";
import { useNavigate } from "react-router";

const EventModal = () => {
	const { showModal, setShowModal } = CatchUpEventContextUse();
	const navigate = useNavigate();



	return (
		<>
			{showModal ? (
				<>
					<div className='flex justify-center items-center z-[1000px] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
						<div
							className='fixed inset-0 w-full h-full bg-black opacity-60'
							onClick={() => setShowModal(false)}></div>
						<div className='relative my-6 mx-auto w-full'>
							<div className='w-[90%] lg:w-[40%] max-w-[500px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
								<div className='border-b border-[#CFD8DC]'>
									<div className='p-4'>
										<div className='flex justify-end w-full'>
											<span
												onClick={() => setShowModal(false)}
												className='bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]'>
												<IoMdClose />
											</span>
										</div>
										<div className='flex justify-center'>
											<div className='bg-[#00CC0033] rounded-full h-[45px] w-[45px] flex justify-center items-center'>
												<div className='bg-[#00CC00] text-white p-2 rounded-full h-[35px] w-[35px] flex justify-center items-center'>
													<MdDone />
												</div>
											</div>
										</div>
										<div className='md:w-[70%] mx-auto mt-5 text-center'>
											<h1 className='font-semibold text-[1.5rem] mb-2'>
												Event Successfully Created
											</h1>
											<p className='text-[#898989] font-semibold text-sm'>
												You’ve successfully created your event, you can check
												your notifications to see your friends who has accepted
												your invite.
											</p>
											<div className='mt-6 mx-auto flex justify-center gap-2 md:gap-5'>
												<Button
													onClick={() => {
														setShowModal(false);
														navigate("/view_event");
													}}
													children='Ok, Thanks!'
													className='rounded-[4px] bg-[#0056D6] py-3 px-6 text-xs  text-white'
												/>
												<Button className='border border-[#0056D6] rounded-[4px] py-3 px-6 text-xs  text-[#0056D6] flex items-center relative'>
													<span className='mr-2'>
														<BiCopy />
													</span>
													<span>Copy link</span>
												</Button>
											</div>
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

export default EventModal;
