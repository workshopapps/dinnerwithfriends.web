import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Tick from "../../assets/img/Frame.png";
import { Link } from "react-router-dom";

const Career = () => {
	return (
		<div>
			<Navbar />
			<div className=" w-full flex lg:flex-col flex-col p-[2rem] justify-center items-center lg:h-[50vh] bg-[url('assets/img/VectorsHome.png')] bg-no-repeat bg-center md:h-[100%] h-[100%] ">
				<p className='text-center text-[#151517] lg:text-5xl text-2xl mt-[3rem] font-bold '>
					Careers
				</p>
				<p className='text-base md:px-[2rem] text-[#424245] font-normal text-center w-[100%] lg:mt-8 md:mt-8 mt-6'>
					At CatchUp, Our mission is to help people establish and maintain
					better relationships with those who matter most, and we are looking
					for the best and right people that can help us accomplish this.We
					value unique contributions, embrace diversity in people and ideas and
					welcome everyone.
				</p>
			</div>
			<div className='w-full p-[2rem] flex flex-col md:flex-row gap-8 bg-[#F5F9FF] '>
				<p className='text-[#0056D6] font-bold text-base lg:text-2xl flex-[1]'>
					Explore vacant positions at Catch Up and see if you have what it takes
					to join our dynamic team.
				</p>
				<p className='text-sm lg:text-base text-[#59595B] font-normal flex-[1]'>
					Catch Up is a people-centric organisation; we extend equal
					opportunities to great talents in a gender-balanced work enviroment.
					In recognition of the critical role our people play in the delivery of
					our services; we remain committed to their well-being and continuous
					self-development.
				</p>
			</div>
			<div className='w-full h-[100%] flex flex-col lg:space-y-4 lg:mt-[2rem] mt-[2rem] space-y-2 justify-center items-center '>
				<p className='lg:text-4xl md:text-2xl text-2xl px-6  text-center font-bold '>
					Benefits of working with us
				</p>
				<div className='w-full px-[2rem] flex flex-col h-[100%] lg:h-[100%] justify-evenly items-center  lg:flex-row flex-wrap'>
					<div className='w-full space-y-4 lg:space-y-4 lg:p-6 mt-[1rem] lg:w-1/2 md:w-1/2 h-[100%] lg:m-auto lg:justify-start flex-col lg:flex-col lg:items-center'>
						<div className='flex items-center justify-start w-[100%] space-x-4  h-[100%] '>
							<img
								className='w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]  '
								src={Tick}
								alt='tick'
							/>
							<div className='flex flex-col justify-between lg:flex-col'>
								<p className=' text-base lg:text-xl font-medium  color-[#151517]'>
									Remote first, flexibility key
								</p>
								<p className='text-sm font-normal lg:text-base color-[#424245]'>
									Work from where you want and meet up with your colleagues
									somewhere new each quarter.
								</p>
							</div>
						</div>
						<div className='flex items-center justify-start w-[100%] space-x-4  h-[100%] '>
							<img
								className='w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]  '
								src={Tick}
								alt='tick'
							/>
							<div className='flex flex-col justify-between lg:flex-col'>
								<p className=' text-base lg:text-xl font-medium  color-[#151517]'>
									Competitive equity & compensation
								</p>
								<p className='text-sm font-normal lg:text-base color-[#424245]'>
									Join a team that values your contribution and own a piece of
									the fastest growing fintech company in history. (Seriously).
								</p>
							</div>
						</div>
						<div className='flex items-center justify-start w-[100%] space-x-4  h-[100%] '>
							<img
								className='w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]  '
								src={Tick}
								alt='tick'
							/>
							<div className='flex flex-col justify-between lg:flex-col'>
								<p className=' text-base lg:text-xl font-medium  color-[#151517]'>
									Health, dental, vision benefits
								</p>
								<p className='text-sm font-normal lg:text-base color-[#424245]'>
									For you and your dependents, so you can all feel your best
									without worry.
								</p>
							</div>
						</div>
					</div>
					<div className='w-full lg:space-y-4 space-y-4 lg:p-6 mt-[1rem] lg:w-1/2 md:w-1/2 h-[100%] lg:m-auto lg:justify-start flex-col lg:flex-col lg:items-center'>
						<div className='flex items-center justify-start w-[100%] space-x-4  h-[100%] '>
							<img
								className='w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]  '
								src={Tick}
								alt='tick'
							/>
							<div className='flex flex-col justify-between lg:flex-col'>
								<p className=' text-base lg:text-xl font-medium  color-[#151517]'>
									Paid parental leave
								</p>
								<p className='text-sm font-normal lg:text-base color-[#424245]'>
									Welcome your little one into the family with plenty of quality
									time.
								</p>
							</div>
						</div>
						<div className='flex items-center justify-start w-[100%] space-x-4  h-[100%] '>
							<img
								className='w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]  '
								src={Tick}
								alt='tick'
							/>
							<div className='flex flex-col justify-between lg:flex-col'>
								<p className=' text-base lg:text-xl font-medium  color-[#151517]'>
									Unlimited PTO
								</p>
								<p className='text-sm font-normal lg:text-base color-[#424245]'>
									We really mean it when we say we want you to take time off
									when you need it—and we love a good company holiday.
								</p>
							</div>
						</div>
						<div className='flex items-center justify-start w-[100%] space-x-4  h-[100%] '>
							<img
								className='w-[18px] h-[18px] lg:w-[28px] lg:h-[28px]  '
								src={Tick}
								alt='tick'
							/>
							<div className='flex flex-col justify-between lg:flex-col'>
								<p className=' text-base lg:text-xl font-medium  color-[#151517]'>
									Customized workstations
								</p>
								<p className='text-sm font-normal lg:text-base color-[#424245]'>
									Choose a comfortable work-from-home set up that makes sense
									for you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full h-[100%] flex flex-col lg:space-y-4 lg:mt-[2rem] mt-[2rem] space-y-2 justify-center items-center '>
				<p className='lg:text-4xl md:text-2xl text-2xl  text-center font-bold'>
					Open Roles
				</p>
				<div className=' m-auto h-full flex justify-center items-center w-full lg:m-auto p-[.5rem] lg:p-[2rem] '>
					<select className='text-[1rem] p-[.5rem] text-[#424245] bg-transparent border-solid border-2 border-[#d6d6d6] outline-none rounded-l m-auto font-normal lg:w-[25%] w-[90%] lg:h-[44px] h-[44px] '>
						<option>All Department</option>
						<option>Design</option>
						<option>Finiance</option>
						<option>Software</option>
						<option>Management</option>
						<option>Marketing & Communication</option>
						<option>Products</option>
					</select>
				</div>
				<div className='w-full py-[2rem] px-4 h-[100%] flex flex-col gap-4 lg:space-y-4 lg:mt-[2rem] mt-[2rem] space-y-2 justify-center items-center '>
					<div className='lg:w-[75%] w-[90%] p-[2rem] flex flex-col md:flex-row md:items-center md:justify-between border-solid border-2 rounded-xl'>
						<div className='mb-4 md:mb-0'>
							<p className='font-base text-[14px] lg:text-[1rem] text-[#0056D6] '>
								ENGINEERING
							</p>
							<p className='font-base text-[20px] lg:text-[1.75rem] text-[#424245] '>
								Senior Backend Engineer
							</p>
							<p className='font-base text-[12px] lg:text-[1rem] text-[#898989] '>
								Remote
							</p>
						</div>
						<Link
							to='/careers/job-details'
							className='text-center lg:text-[20px] flex items-center justify-center text-[14px] py-[12px] px-[32px] w-fit font-base text-[#fff] bg-[#0056D6] rounded-[6px] '>
							View Job
						</Link>
					</div>
					<div className='lg:w-[75%] w-[90%] p-[2rem] flex flex-col md:flex-row md:items-center md:justify-between border-solid border-2 rounded-xl'>
						<div className='mb-4 md:mb-0'>
							<p className='font-base text-[14px] lg:text-[1rem] text-[#0056D6] '>
								ENGINEERING
							</p>
							<p className='font-base text-[20px] lg:text-[1.75rem] text-[#424245] '>
								Security Engineer
							</p>
							<p className='font-base text-[12px] lg:text-[1rem] text-[#898989] '>
								Remote
							</p>
						</div>
						<Link
							to='/careers/job-details'
							className='text-center lg:text-[20px] flex items-center justify-center text-[14px] py-[12px] px-[32px] w-fit font-base text-[#fff] bg-[#0056D6] rounded-[6px] '>
							View Job
						</Link>
					</div>
				</div>
			</div>
			<div className='w-full p-[2rem] lg:mb-[3rem] h-[100%] flex flex-col lg:space-y-12 lg:mt-[2rem] mt-[2rem] space-y-10 justify-center items-center '>
				<p className=' font-bold text-3xl lg:text-6xl text-center color-[#151517]'>
					We can't wait to meet you
				</p>
				<Link
					to='/aboutUs'
					className='text-center lg:text-[20px] flex items-center justify-center text-[14px] py-[12px] px-[32px] w-fit font-base text-[#fff] bg-[#0056D6] rounded-[6px] '>
					Learn more about Catch Up
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default Career;
