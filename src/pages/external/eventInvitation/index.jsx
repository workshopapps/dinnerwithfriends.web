import React from "react";
import Logo from "../../../components/Logo";
import Balloon from "../../../assets/img/balloon.svg";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";

export const EventInvitation = () => {
	return (
		<div>
			<div className='relative bg-[#1070FF] h-[40vh] flex flex-col items-center py-4 px-2'>
				<Logo footer className='mt-4 mb-6' />
				<p className='text-white text-md lg:text-lg font-light mb-2'>
					You have been invited to
				</p>
				<h1 className='text-2xl lg:text-4xl font-semibold text-white'>
					Pamela's 25th Birthday
				</h1>
				<img src={Balloon} alt='Balloon' className="absolute -bottom-8 lg:h-[100px]" />
			</div>
            <div className="flex items-center flex-col mt-[50px] mb-10 px-5 w-[90%] mx-auto">
                <p className="text-md lg:text-lg mb-8 text-center">Pamela has invited you to her <span className="font-bold">25th Birthday</span> at <span className="font-bold">Agodi Garden.</span></p>
                <Button className='bg-[#1070FF] text-white py-3 px-8 rounded  font-semibold'>Select your availability</Button>
            </div>
            <div className="flex flex-col items-center px-3 text-center text-xs lg:text-sm">
                <p className="mb-3"><span className="mr-3">Create events and hangout with friends using CatchUp</span><Link to='/sign_up' className="border-b border-[#1070FF] text-[#1070FF]">Sign Up</Link></p>
                <p className="text-[#59595B]">Email Us: contact@catchup.rsvp</p>
            </div>
		</div>
	);
};
