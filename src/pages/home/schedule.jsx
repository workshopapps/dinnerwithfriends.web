import React from "react";
import { Link } from "react-router-dom";
import ScheduleImage from "../../assets/img/homepage1.png";
import Dashboard1 from "../../assets/img/homepage2.png";
import Dashboard2 from "../../assets/img/homepage3.png";

const Schedule = () => {
  return (
    <section className="bg-[url('assets/img/VectorsHome.png')] bg-no-repeat bg-center ">
      <div className="">
        <h1 className="md:px-6 text-[#0056D6] mx-10 mb-4 my-8 text-4xl font-bold tracking-tight text-center leading-none md:text-5xl xl:text-6xl ">
          <span className="block mb-2 lg:mb-4">Stay connected with your </span>
          <span className="block mb-2 lg:mb-4">social circle.</span>
        </h1>
        <div className="justify-between max-w-screen-xl px-6 md:px-0 mx-auto lg:flex lg:flex-row-reverse my-10">
          <div className=" hidden w-full mx-16 px-auto lg:mt-0 md:flex lg:w-1/2 lg:mr-4">
            <img src={ScheduleImage} alt="Home" />
          </div>
          <div className="block w-full mt-20 lg:mt-0 md:hidden">
            <img src={ScheduleImage} alt="Home" />
          </div>
          <div className="mt-6 lg:w-1/2 lg:ml-4">
            <h3 className="max-w-2xl text-[#0056D6] mb-4 text-xl font-bold tracking-tight text-center leading-none md:mt-28 md:text-2xl xl:text-2xl lg:text-left">
            Stay connected with your social circle 
            </h3>
            <p className="max-w-xl mb-6 font-light text-gray-600 text-center text-sm lg:leading-7 lg:mb-8 md:text-lg lg:text-left lg:text-base">
            CatchUp allows you to plan your next hangout—sports hangouts, dinner dates, 
            coffee dates, and so much more. Plan get-togethers with friends without letting 
            your hectic schedule get in the way. Find the best dates for everyone and make a decision together!
            </p>
            <Link
              to="/sign_up"
              className="w-full inline-flex items-center justify-center py-3 text-base font-medium text-center text-blue-700 rounded-lg hover:text-blue-300 lg:m-0 lg:w-auto"
            >
              Learn more
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

        <div className="justify-between max-w-screen-xl px-6 md:px-0 mx-auto lg:flex my-10">
          <div className=" hidden w-full mx-16 px-auto lg:mt-0 md:flex lg:w-1/2 lg:mr-4">
            <img src={Dashboard1} alt="Home" />
          </div>
          <div className="block w-full mt-20 lg:mt-0 md:hidden">
            <img src={Dashboard1} alt="Home" />
          </div>
          <div className="mt-6 lg:w-1/2 lg:ml-4">
            <h3 className="max-w-2xl text-[#0056D6] mb-4 text-xl font-bold tracking-tight text-center leading-none md:mt-28 md:text-2xl xl:text-2xl lg:text-left">
            Select your preferred date and time
            </h3>
            <p className="max-w-xl mb-6 font-light text-gray-600 text-center text-sm lg:leading-7 lg:mb-8 md:text-lg lg:text-left lg:text-base">
            You have the freedom to choose your availability with CatchUp. 
            Friends can let you know if they can attend your event, 
            and you'll immediately be notified on our site and in your mail.
            </p>
            <Link
              to="/sign_up"
              className="w-full inline-flex items-center justify-center py-3 text-base font-medium text-center text-blue-700 rounded-lg hover:text-blue-300 lg:m-0 lg:w-auto"
            >
              Learn more
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

        <div className="justify-between max-w-screen-xl px-6 md:px-0 mx-auto lg:flex lg:flex-row-reverse my-10">
          <div className=" hidden w-full mx-16 px-auto lg:mt-0 md:flex lg:w-1/2 lg:mr-4">
            <img src={Dashboard2} alt="Home" />
          </div>
          <div className="block w-full mt-20 lg:mt-0 md:hidden">
            <img src={Dashboard2} alt="Home" />
          </div>
          <div className="mt-6 lg:w-1/2 lg:ml-4">
            <h3 className="max-w-2xl text-[#0056D6] mb-4 text-xl font-bold tracking-tight text-center leading-none md:mt-28 md:text-2xl xl:text-2xl lg:text-left">
              Stay in sync
            </h3>
            <p className="max-w-xl mb-6 font-light text-gray-600 text-center text-sm lg:leading-7 lg:mb-8 md:text-lg lg:text-left lg:text-base">
            You can integrate your calendar on CatchUp with a single click. 
            You also get notifications for all of your activities in one place.
            </p>
            <Link
              to="/sign_up"
              className="w-full inline-flex items-center justify-center py-3 text-base font-medium text-center text-blue-700 rounded-lg hover:text-blue-300 lg:m-0 lg:w-auto"
            >
              Learn more
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
      </div>
    </section>
  );
};

export default Schedule;
