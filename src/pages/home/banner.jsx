import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="bg-[#E7F0FF]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="hidden mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:block md:text-5xl lg:text-6xl">
          <span className="block mb-2 lg:mb-4">Organize your next social</span>
          <span className="mb-2 lg:mb-4">gathering, on </span>
          <span className="text-blue-600">Catch</span>
          <span>Up</span>
        </h1>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-8text-gray-900 md:hidden md:text-5xl lg:text-6xl">
          <span className="block mb-2 ">Organize your next</span>
          <span className="mb-2"> social gathering, on </span>
          <span className="mb-2 text-blue-600">Catch</span>
          <span>Up</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
          Look no further, Get started today.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/sign_up"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Get Started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
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
    </section>
  );
};

export default Banner;
