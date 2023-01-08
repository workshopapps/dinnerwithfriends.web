import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Hero from "./hero";
import Schedule from "./schedule";
// import HeroDashboard from "./heroDashboard";
import Testimonials from "./testimonials";
import Banner from "./banner";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className='w-[90%] mx-auto'>
				<Hero />
				<Schedule />
				{/* <HeroDashboard /> */}
				<Testimonials />
			</div>
			<Banner />
			<Footer />
		</>
	);
};

export default Home;
