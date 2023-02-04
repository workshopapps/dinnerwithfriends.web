import React from "react";
import { Link } from "react-router-dom";
import MobileImage from "../../../../../assets/img/Home.png";
import DesktopImage from "../../../../../assets/img/desktop.png";

export const Hero = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-y-[40px] lg:gap-x-[46px] pt-[80px] lg:pt-[150px] px-[30px] lg:px-[45px]">
        <div className="hidden lg:block basis-2/4 pt-[80px]">
          <img src={DesktopImage} alt="Home" />
        </div>
        <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-y-[32px] lg:basis-2/4">
          <h2 className="text-[#1070FF] text-center lg:text-start leading-[2.87rem] lg:leading-[5.5rem] font-bold text-[2.12rem] lg:text-[5rem]">
            Make time for those that really matter.
          </h2>
          <p className="text-[#717172] text-center lg:text-left leading-[1.37rem] leading-[2.5rem] text-[1.5rem]">
            Busy schedules should no longer be an excuse for not spending time with your family, friends, and loved ones. Relax after a long week and make lasting memories.
          </p>
          <Link
            to="/sign_up"
            className="flex justify-center items-center text-[0.87rem] lg:text-[1.25rem] font-bold text-center text-[#FFFFFF] py-[12px] lg:py-[16px] px-[24px] lg:px-[32px] gap-x-[1rem] bg-[#1070FF] rounded-[4px]"
          >
            <span>Get Started</span>
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
        <div className="block lg:hidden">
          <img src={MobileImage} alt="Home" className="bg-cover"/>
        </div>
      </section>
    </>
  );
};
