import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
      <section className="bg-[#E7F0FF] py-[67px] px-[21px] text-center lg:py-[96px] lg:px-12 flex flex-col justify-center items-center gap-y-[24px] lg:gap-y-[32px]">
        <h2 className="text-[#000000] leading-[2.87rem] lg:leading-[4.5rem] text-[2.12rem] lg:text-[3.5rem] font-bold">
          Organize your next social gathering, on <span className="text-[#1070FF]">Catch</span>Up
        </h2>
        <p className="text-[#717172] lg:text-[1.5rem]">
          Look no further, Get started today.
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
      </section>
  );
};

