import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [display, setDisplay] = useState(false)

    function hamburger() {
      setDisplay(!display)
    }

    const nav ={
      transform: window.matchMedia("(max-width: 767px)").matches && !display ? "translateY(-150%)" : "translateY(0)"
     }

  return (
    <nav className={`transition ease-in duration-400 bg-white md:px-10 px-2.5 md:h-[85px] md:pb-2 fixed w-full z-20 top-0 left-0 border-b border-white`}>
      <div className="h-[45px] md:h-[76px] py-4 md:py-0 bg-transparent container flex flex-wrap items-center justify-between mx-auto">
        <Logo />
        <div className="flex md:order-2">
            <Link
              
              to="/sign_in"
              dev
              className="hidden md:block py-3 mr-8 md:py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
            >
              Sign In
            </Link>
          <Link className="hidden md:block" to="/sign_up">
            <button
              type="button"
              className="text-white bg-[#0056D6] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-[#0056D6] dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </Link>
          <div onClick={hamburger} className=" z-[100] w-[30px] h-[30px] px-1 py-1 text-gray-500 rounded-lg md:hidden  ">
            <div style={{transform: display? "translateY(5.5px) rotate(45deg)" : "rotate(0)"}} className="transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1"></div>
            <div style={{opacity: display? 0 : 1}} className="transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1"></div>
            <div style={{transform: display? "translateY(-5.5px) rotate(-45deg)" : "rotate(0)"}} className="transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1"></div>
          </div>
          
        </div>
        <div style={nav}
          className="transition linear duration-300 items-center justify-between  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul  className="w-full flex flex-col p-4 mt-0 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to="/howItWorks"
                className="block py-3 md:py-2 pl-3 pr-4 text-black hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                How it works
              </Link>
            </li>

            <li>
              <Link
                fro-17-features-page
                to="/features"
                dev
                className="block py-3 md:py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Features
              </Link>
            </li>
            <li>
              <Link

                to="/aboutus"
                dev
                className="block py-3 md:py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                About Us
              </Link>
            </li>
            <li className="md:hidden">
              <Link

                to="/sign_in"
                dev
                className="w-full block mt-4 py-2 pl-3 pr-4 text-center bg-white h-[44px] text-[#0056D6] border-[1.5px] border-[#0056D6] rounded hover:bg-blue-800 md:p-0 "
              >
                Sign In
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                
                to="/sign_up"
                dev
                className="  w-full block mt-4 py-2 pl-3 pr-4 text-white text-center bg-[#0056D6] h-[44px]  rounded hover:bg-blue-800 md:p-0 "
              >
                Sign Up
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;