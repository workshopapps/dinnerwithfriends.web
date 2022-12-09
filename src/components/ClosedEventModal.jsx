import React from "react";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";
import { IoMdClose } from "react-icons/io";
import { TiInfoLarge } from "react-icons/ti";
import Invites from "../assets/img/closedEventInvites.png";

const ClosedEventModal = () => {
	const { showClosedModal, setShowClosedModal } = CatchUpEventContextUse();
	return (
		<>
			{showClosedModal ? (
				<>
					<div className='flex justify-center z-50 items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
						<div
							className='fixed inset-0 w-full h-full bg-black opacity-60'
							onClick={() => setShowClosedModal(false)}

                            ></div>
						<div className='relative my-6 mx-auto w-full'>
							<div className='w-[90%] lg:w-[40%] max-w-[500px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
								<div className='border-b border-[#CFD8DC]'>
									<div className='p-4'>
										<div className='flex justify-end w-full'>
											<span
												// onClick={() => setShowClosedModal(false)}
												className='bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]'>
												<IoMdClose />
											</span>
										</div>
										<div className='flex justify-center'>
											<div className='bg-[#E7F0FF] rounded-full h-[65px] w-[65px] flex justify-center items-center'>
												<div className='bg-[#0056D6] text-white p-2 rounded-full h-[35px] w-[35px] flex justify-center items-center'>
													<TiInfoLarge />
												</div>
											</div>
										</div>
										<div className='md:w-[70%] mx-auto mt-5 text-center'>
											<h1 className='font-normal text-[1.1rem] mb-2 text-[#717172]'>
												<span className='text-[#0056D6]'>Mathew Mathais.</span>{" "}
												Dinner event is as reached its maximum limit of 10
												invitees.
											</h1>
											<div className='flex justify-center'>
												<img src={Invites} alt='' />
											</div>
											<p className='font-normal text-[1rem] mb-2 text-[#717172]'>
												Michael, Kelvin, Mary and
												<span className='text-[#0056D6]'> 7 others.</span>
											</p>
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

export default ClosedEventModal;
