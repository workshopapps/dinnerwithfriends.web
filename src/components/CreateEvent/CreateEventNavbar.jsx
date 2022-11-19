import React from "react";
import Logo from "../Logo";
import { SlArrowDown } from "react-icons/sl";
import { HiOutlineMenu } from "react-icons/hi";

const CreateEventNavbar = () => {
	return (
		<div className='border border-[#E3E3E3]'>
			<div className='px-4 md:px-8 py-2 md:py-4 flex items-center justify-between max-w-[1200px] mx-auto'>
				<Logo />
				<div className='block md:hidden'>
					<span>
						<HiOutlineMenu />
					</span>
				</div>
				<div className='items-center cursor-pointer hidden md:flex'>
					<div className='w-[35px] h-[35px] border border-[#66A3FF] text-[#717172] rounded-full flex justify-center items-center object-cover text-xs'>
						<span>M</span>
					</div>
					<span className='ml-2 text-xs'>
						<SlArrowDown />
					</span>
				</div>
			</div>
		</div>
	);
};

export default CreateEventNavbar;
