import React from "react";
import { IoMdClose } from "react-icons/io";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";

const ViewEventMenuModal = ({setViewEventMenu, setShowDeleteMenu }) => {
    const { setShowModal } = CatchUpEventContextUse();
	

    const handleAdd = () =>{
        setViewEventMenu(false)
        setShowModal(true)
    }
    const handleDelete = () =>{
        setViewEventMenu(false)
        setShowDeleteMenu(true)
    }

	return (
		<>
			<div className='flex justify-center z-50 items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
				<div
					className='fixed inset-0 w-full h-full bg-black opacity-60'
					onClick={() => setViewEventMenu(false)}
				></div>
				<div className='relative my-6 mx-auto w-full'>
					<div className='w-[90%] lg:w-[40%] max-w-[500px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
						<div className='border-b border-[#CFD8DC]'>
							<div className='p-4'>
								<div className='flex justify-end w-full'>
									<span
										onClick={() => setViewEventMenu(false)}
										className='bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]'>
										<IoMdClose />
									</span>
								</div>
								<div className='flex flex-col item-center justify-center w-[50%] mx-auto'>
									<div onClick={handleAdd} className='bg-transparent hover:bg-[#0056D6] text-[#0056D6] hover:text-white transition-all duration-200 px-3 py-2 cursor-pointer w-full rounded-[4px] text-center'>
										Add Participant
									</div>
									<div className='bg-transparent hover:bg-[#0056D6] text-[#0056D6] hover:text-white transition-all duration-200 px-3 py-2 cursor-pointer w-full rounded-[4px] text-center'>
										Remove Participant
									</div>
									<div onClick={handleDelete} className='bg-transparent hover:bg-[#0056D6] text-[#0056D6] hover:text-white transition-all duration-200 px-3 py-2 cursor-pointer w-full rounded-[4px] text-center'>
										Delete Event
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ViewEventMenuModal;
