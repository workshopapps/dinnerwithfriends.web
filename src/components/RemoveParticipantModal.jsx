import React from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";

const RemoveParticipantModal = ({
	participants,
	setShowRemoveMenu,
	setShowDeleteParticipant,
}) => {

	const [search, setSearch] = useState('')

	const { setRemovedParticipants } =
		CatchUpEventContextUse();
	const handleDelete = () => {
		setShowRemoveMenu(false);
		setShowDeleteParticipant(true);
	};

	const checkChange = () => {
		var values = [],
			inputs = document.getElementsByTagName("input");

		for (var i = 0, max = inputs.length; i < max; i += 1)
			if (inputs[i].type === "checkbox" && inputs[i].checked)
				values.push({ id: inputs[i].id, email: inputs[i].value });
		setRemovedParticipants(values);
	};

	const handleChange = (e) =>{
        setSearch(e.target.value)
    }   

	const filteredParticipants =  participants.filter((partic)=>
        partic.email.toLowerCase().includes(search.toLowerCase())
    )

	return (
		<>
			<div className='flex justify-center z-50 items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none'>
				<div
					className='fixed inset-0 w-full h-full bg-black opacity-60'
					onClick={() => setShowRemoveMenu(false)}></div>
				<div className='relative my-6 mx-auto w-full'>
					<div className='w-[90%] lg:w-[40%] max-w-[500px] mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none'>
						<div className='border-b border-[#CFD8DC]'>
							<div className='py-4 px-8'>
								<div className='flex justify-end w-full'>
									<span
										onClick={() => setShowRemoveMenu(false)}
										className='bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]'>
										<IoMdClose />
									</span>
								</div>
								<div className='text-left'>
									<h1 className='text-[1.2rem] text-black font-bold mb-2'>
										Remove Participant
									</h1>
									<input type="search" onChange={handleChange} placeholder="Search participants..." className="px-4 py-2 outline-none rounded-[6px] bg-transparent mb-4 border-[#717172] border w-[80%]"/>
									<div className="h-[200px] overflow-y-scroll">
										{filteredParticipants.map((item) => (
											<div className='flex items-center mb-4' key={item.id}>
												<input
													type='checkbox'
													className='h-[18px] w-[18px] mr-3'
													value={item.email}
													id={item.id}
													onChange={checkChange}
												/>
												<p id='remove'>{item.email}</p>
											</div>
										))}
									</div>
									<div className='mt-8 flex justify-between items-center'>
										<p
											onClick={() => setShowRemoveMenu(false)}
											className='text-sm border-b border-black font-semibold cursor-pointer'>
											Back
										</p>
										<button
											onClick={handleDelete}
											className='py-[10px] px-6 rounded-[4px] bg-[#0056D6] border border-[#0056D6] text-white w-fit text-sm'>
											<span>Delete</span>
										</button>
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

export default RemoveParticipantModal;
