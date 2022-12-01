 fec-59-create-static-pages-navbar-ui-for-mobile
import React,{useState}  from "react";
import {FaBars,FaTimes} from "react-icons/fa"

import React, { useState } from "react";
 dev
import { Link } from "react-router-dom";
import { HiChevronDown} from "react-icons/hi";
import { icons } from "react-icons";

const Navbar = () => {
 fec-59-create-static-pages-navbar-ui-for-mobile
  const [nav, setNav] = useState(false)
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-white">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-blue-700 text-3xl font-semibold whitespace-nowrap ">

  const [display, setDisplay] = useState(false)
 
    function hamburger() {
      setDisplay(!display)
    }

    const nav ={
      transform: window.matchMedia("(max-width: 767px)").matches && !display ? "translateY(-150%)" : "translateY(0)"
     }

  return (
    <nav className="bg-white md:px-10 px-2.5  md:pb-2 fixed w-full z-20 top-0 left-0 border-b border-white">
      <div className="h-[45px] md:h-[76px] py-4 md:py-0 bg-transparent container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-[#0056D6] text-3xl font-semibold whitespace-nowrap ">
 dev
            Catch
          </span>
          <span className="self-center text-black text-3xl font-semibold whitespace-nowrap">
            Up
          </span>
        </Link>
 fec-59-create-static-pages-navbar-ui-for-mobile
        
          {/*<button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
  </button>*/}
        
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <div className=" md:order-2">
          <Link to="/sign_up">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign up
            </button>
          </Link>
          </div>
          <ul className="flex flex-col p-4 mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <Link
                to="/howItWorks"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                to="/error404"
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/error404"
                className="flex  py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Company
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                fro-17-features-page
                to="/features"
                dev
                className="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Features
              </Link>
            </li>
          </ul>
         
        </div>
        <div className="md:hidden flex-col"> 
        <div className="cursor-pointer pr-4 z-100 text-gray-800 " onClick={() => setNav(!nav)}  >
            {nav ? <FaTimes size={20}  /> : <FaBars size={30} />}

          </div>
          {nav && (
            <div className="md:hidden ">
  <ul className="flex flex-col space-y-4 text-sm p-4 items-start justify-start transition duration-300 ease-in-out  text-white  bg-blue-800 rounded absolute top-16 right-0 w-full h-52  ">
  <li>
    <Link
      to="/howItWorks">
      
      How it works
    </Link>
  </li>
  <li>
    <Link
      to="/error404"
      
    >
      Blog
    </Link>
  </li>
  <li>
    <Link to="/error404" className="flex flex-row items-center justify-center space-x-1">
     <p>Company</p> 
<HiChevronDown/>
      {/*<svg
        className="w-5 h-5 ml-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
          </svg>*/}
    </Link>
  </li>
  <li>
    <Link
      fro-17-features-page
      to="/features"
      
    >
      Features
    </Link>
  </li>
  <li className="text-blue-700 cursor-pointer bg-white px-8 rounded py-2 text-center"><Link to="/sign_up">
            <button
              type="button"
              
            >
              Sign up
            </button>
          </Link></li>
</ul>

          </div>
          )}
          </div>

        <div className="flex md:order-2">
            <Link
              
              to="/sign_in"
              dev
              className="hidden md:block block py-3 mr-8 md:py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
            >
              Log in
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
          {/*<button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            </button>*/}
        </div>
        <div style={nav}
          className="transition linear duration-300 items-center justify-between  w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul  className="bg-green-500 w-full flex flex-col p-4 mt-0 md:mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
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
                
                to="/sign_up"
                dev
                className=" mx-auto block mt-4 py-2 pl-3 pr-4 text-white text-center bg-[#1070FF] h-[44px] w-[225px] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
              >
                Sign Up
              </Link>
            </li>
          </ul>
          
        </div>
 dev
      </div>
    </nav>
  );
};

export default Navbar;
