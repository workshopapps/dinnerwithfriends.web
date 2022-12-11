import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router";

const DeleteParticipantSuccessModal = ({setShowDeleteParticipantSucess}) => {
	const navigate = useNavigate();
	const handleClose = () => {
		setShowDeleteParticipantSucess(false);
		navigate("/dashboard/upcoming_events");
	};
	return (
		<>
			<div className='flex justify-center z-50 items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
				<div
					className='fixed inset-0 w-full h-full bg-black opacity-60'
					onClick={() => setShowDeleteParticipantSucess(false)}></div>
				<div className='relative my-6 mx-auto w-full'>
					<div className='w-[90%] lg:w-[40%] max-w-[500px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
						<div className='border-b border-[#CFD8DC]'>
							<div className='p-4'>
								<div className='flex justify-end w-full'>
									<span
										onClick={() => setShowDeleteParticipantSucess(false)}
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
									<h1 className='text-[1.4rem] mb-2 text-black font-semibold'>
										Participants Successfully Deleted
									</h1>
									<p className='font-normal text-[1rem] mb-2 text-black'>
										You’ve successfully deleted participant, you can check your
										notifications to see more update.
									</p>
									<button
										onClick={handleClose}
										className='py-[10px] px-6 rounded-[4px] bg-[#0056D6] border border-[#0056D6] text-white w-fit text-sm mt-6'>
										Ok
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteParticipantSuccessModal;
