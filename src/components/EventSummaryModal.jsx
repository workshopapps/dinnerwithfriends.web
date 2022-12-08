import React from "react";
import clipboard from "../pages/dashboard/icons/clipboard.svg";
import checkmark from "../pages/dashboard/icons/checkmark.svg";
import { Link } from "react-router-dom";

const EventSummaryModal = ({ popup, setPopup, copied, copyLink }) => {
	return (
		popup && (
			<>
				<div className='flex justify-center z-[1000px] items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
					<div
						className='fixed inset-0 w-full h-full bg-black opacity-60'
						onClick={() => setPopup(false)}></div>
					<div className='relative my-6 mx-auto w-full'>
						<div className='w-[90%] lg:w-[40%] max-w-[500px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
							<div className='border-b border-[#CFD8DC]'>
								<div className='p-4'>
									<div className='flex justify-end w-full'>
										<div
											onClick={() => setPopup(false)}
											className=' cursor-pointer pb-1 flex flex-col justify-center items-center rounded-full bg-[#FAFAFA] absolute w-[33px] h-[33px] right-[20px] top-[20px]'>
											<div
												style={{
													transform: "translateY(2.5px) rotate(45deg",
												}}
												className='bg-[#717172] rounded-lg w-[15px] h-[1.5px] mt-1'></div>
											<div
												style={{
													transform: "translateY(-2.5px) rotate(-45deg",
												}}
												className='bg-[#717172] w-[15px] rounded-lg h-[1.5px] mt-1'></div>
										</div>
									</div>
									<div className='flex flex-col items-center justify-center'>
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
											notifications to see your friends who have accepted your
											invite
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
												<img
													className='mr-2'
													src={clipboard}
													alt='copy to clipboard'
												/>{" "}
												Copy link
											</button>
											<span
												className={`${
													copied ? "block" : "hidden"
												} absolute -top-10 left-6 p-2 text-green-500 bg-white border border-green-500 rounded transition text-xs`}>
												https://catchup.hng.tech/ copied. You can share to
												invite your friends
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	);
};

export default EventSummaryModal;
