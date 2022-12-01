import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "../../assets/img/Dashboard.png";

const HeroDashboard = () => {
  return (
    <section className="bg-[url('assets/img/VectorsHome.png')] bg-no-repeat bg-bottom text-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Link
          to="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">See what's new!</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Perform all actions in your Dashboard.
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          We Built a dashboard, that is just for you, where various actions can
          be performed seamlessly.
        </p>

        <div className="mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <img src={Dashboard} alt="dashboard" />
        </div>
      </div>
    </section>
  );
};

export default HeroDashboard;
