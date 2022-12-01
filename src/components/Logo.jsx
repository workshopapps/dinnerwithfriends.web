import React from "react";
import { Link } from "react-router-dom";


const Logo = ({ className, footer }) => {
	return (
		<Link to='/' className={`flex items-center ${className}`}>
<<<<<<< HEAD
			<span
				className={`self-center ${
					footer ? "text-white" : "text-blue-700"
				} text-[1.2rem] md:text-2xl font-semibold whitespace-nowrap `}>
=======
			<span className='self-center text-[#0056D6] text-[1.2rem] md:text-2xl font-semibold whitespace-nowrap '>
>>>>>>> bc17d2e15654f702cfba459a10f2c5497fa31b70
				Catch
			</span>
			<span className='self-center text-black text-[1.2rem] md:text-2xl font-semibold whitespace-nowrap'>
				Up
			</span>
		</Link>
	);
};

export default Logo;
