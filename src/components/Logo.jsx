import React from "react";
import { Link } from "react-router-dom";


const Logo = ({ className, footer }) => {
	return (
		<Link to='/' className={`flex items-center ${className}`}>
			<span
				className={`self-center ${
					footer ? "text-white" : "text-[#0056D6]"
				} text-[1.2rem] md:text-2xl font-semibold whitespace-nowrap `}>
				Catch
			</span>
			<span className='self-center text-black text-[1.2rem] md:text-2xl font-semibold whitespace-nowrap'>
				Up
			</span>
		</Link>
	);
};

export default Logo;
