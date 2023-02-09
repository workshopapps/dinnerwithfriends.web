import React from "react";
import People from "../../assets/img/people.svg";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { TbCopyright } from "react-icons/tb";
import { Link } from "react-router-dom";

const index = () => {
	return (
		<div className='relative h-[100vh]'>
			<div className='px-4 pt-4 pb-10 bg-[#1070FF] rounded-br-[40%] rounded-bl-[40%]'>
				<div className='flex justify-end'>
					<img src={People} alt='People' className='h-[25px] lg:h-[40px]' />
				</div>
				<div className='flex flex-col items-center'>
					<Link to='/' className='mb-3'>
						<span
							className={`text-white text-[2rem] md:text-[2.4rem] font-extrabold whitespace-nowrap `}>
							Catch
						</span>
						<span className='text-black text-[2rem] md:text-[2.4rem] font-extrabold whitespace-nowrap'>
							Up
						</span>
					</Link>
					<p className='text-[70%] text-white font-light mb-3'>
						Event Schedule
					</p>
					<p className='text-xl text-white font-light'>You've been Invited</p>
				</div>
			</div>
			<div className='py-4 px-6 '>
				<p className='text-sm font-semibold mb-4'>Hi, Mfon</p>
				<div className='text-xs flex flex-col gap-5 mb-4'>
					<div className='flex'>
						<p className='flex-[1] font-medium'>Title:</p>
						<p className='flex-[2] font-medium'>HNG FINALIST MEET UP</p>
					</div>
					<div className='flex'>
						<p className='flex-[1] font-medium'>Event Type:</p>
						<p className='flex-[2] font-medium'>Outdoor Hangout</p>
					</div>
					<div className='flex'>
						<p className='flex-[1] font-medium'>Description:</p>
						<p className='flex-[2] font-medium'>
							We are starting the year with a bang. All HNG9 finalists are
							invited to the finalist meet-up
						</p>
					</div>
					<div className='flex'>
						<p className='flex-[1] font-medium'>Location:</p>
						<p className='flex-[2] font-medium'>
							Lekki Conservation Centre, Lagos
						</p>
					</div>
					<div className='flex'>
						<p className='flex-[1] font-medium'>Date:</p>
						<p className='flex-[2] font-medium'>11th January, 2023</p>
					</div>
					<div className='flex'>
						<p className='flex-[1] font-medium'>Time:</p>
						<p className='flex-[2] font-medium'> 9:30am</p>
					</div>
				</div>
				<div className='text-xs font-medium'>
					<p>Thank You,</p>
					<p className='font-semibold'>Team CatchUp</p>
				</div>
			</div>

			<div className='bg-[#1070FF] flex flex-col items-center text-xs absolute bottom-0 left-0 w-full text-white p-3 font-light'>
				<p className='font-medium mb-2'>Stay connected with Us</p>
				<div className='flex gap-3 items-center mb-3'>
					<Link to='/'>
						<FaFacebook />
					</Link>
					<Link to='/'>
						<FaTwitter />
					</Link>
					<Link to='/'>
						<FiMail />
					</Link>
					<Link to='/'>
						<FaLinkedin />
					</Link>
					<Link to='/'>
						<FaYoutube />
					</Link>
				</div>
				<div className='flex gap-3 text-[75%] mb-3'>
					<Link to='/policy'>Privacy</Link>
					<p>|</p>
					<Link to='/terms-of-use'>Terms and Condition</Link>
					<p>|</p>
					<Link to='/'>Unsubscribe</Link>
				</div>
				<p className='flex items-center gap-2 text-[75%]'>
					<span>
						<TbCopyright />
					</span>{" "}
					<span>2023 CatchUp</span> <span>All rights reserved</span>
				</p>
			</div>
		</div>
	);
};

export default index;
