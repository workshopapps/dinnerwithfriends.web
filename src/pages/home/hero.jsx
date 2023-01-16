import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../../assets/img/Home.png";
import SubHome from "../../assets/img/SubHome.png";
import Mobile from "../../assets/img/Mobile.png";

const Hero = () => {
  return (
    <section className="bg-[url('assets/img/VectorsHome.png')] bg-no-repeat bg-center mb-20">
      <div className="flex flex-row-reverse mt-28 mx-auto w-[13rem] md:mx-32 md:w-[80%]">
        <img src={SubHome} alt="subHome" className="md:w-[13rem]" />
      </div>
      {/* <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12"> */}
      <div className="flex flex-col-reverse justify-between max-w-screen-xl px-6 md:px-0 mx-auto lg:flex-row">
        <div className=" hidden w-full lg:mt-0 md:flex lg:w-1/2 lg:mr-4">
          <img src={HomeImage} alt="Home" />
        </div>
        <div className="block w-full mt-20 lg:mt-0 md:hidden">
          <img src={Mobile} alt="Home" />
        </div>
        <div className="mt-6 lg:w-1/2 lg:ml-4">
          <h1 className="max-w-2xl text-[#0056D6] mb-4 text-4xl font-bold tracking-tight text-center leading-none md:text-5xl xl:text-6xl lg:text-left ">
            <span className="block mb-2 lg:mb-4">Make time for</span>
            <span className="block mb-2 lg:mb-4">those that really</span>
            <span className="block mb-2 lg:mb-4">matter.</span>
          </h1>
          <p className="max-w-xl mb-6 font-light text-gray-600 text-center text-sm lg:leading-7 lg:mb-8 md:text-lg lg:text-left lg:text-base">
          Busy schedules should no longer be an excuse for not spending time with your family, 
          friends, and loved ones. 
          Relax after a long week and make lasting memories.
          </p>
          <Link
            to="/sign_up"
            className="w-full inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-[#0056D6] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 lg:w-1/3"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      {/* 
      <div className="flex flex-row-reverse mt-8 mb-8 lg:mx-20 lg:mt-0 text-gray-700">
        <div className="mx-4">
          <span className="block text-[12px] lg:text-sm">
            User retention rate
          </span>
          <span className="text-xl font-bold lg:text-3xl">70%</span>
        </div>
        <div className="mx-4">
          <span className="block text-[12px] lg:text-sm">Countries used</span>
          <span className="text-xl font-bold lg:text-3xl">100 +</span>
        </div>
        <div className="mx-4">
          <span className="block text-[12px] lg:text-sm">Active users</span>
          <span className="text-xl font-bold lg:text-3xl">90k +</span>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
