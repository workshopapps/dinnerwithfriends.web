import React, { useState }  from "react";
import googleCalendar from "../../assets/img/g-calendar.svg"
import { MdSpaceDashboard } from "react-icons/md"
import { FiSettings, FiLogIn } from "react-icons/fi"
import menuStyles from "./createEvent.module.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/Avatar.png"

const CreateEventNavbar = () => {
	const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [display, setDisplay] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    setShowNav(false);
  }
  
    function hamburger() {
      setShowNav(true)
      setDisplay(!display)
      setOpen(false)
    }

    const nav = {
      transform: window.matchMedia("(max-width: 767px)").matches && !display ? "translateY(-150%)" : "translateY(0)"
     }
 
	return (
    <nav className={`transition ease-in duration-400 bg-white md:px-10 px-2.5 md:h-[85px] md:pb-2 fixed w-full z-20 top-0 left-0 border-b border-white ${display ? 'h-[300px]' : 'h-[59px]'}`}>
      <div className="h-[45px] md:h-[76px] py-4 md:py-0 bg-transparent container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-[#0056D6] text-3xl font-semibold whitespace-nowrap ">
            Catch
          </span>
          <span className="self-center text-black text-3xl font-semibold whitespace-nowrap">
            Up
          </span>
        </Link>
        <div className="flex md:order-2">
          <div  onClick={toggleOpen} className="hidden md:block cursor-pointer">
            <span>
              <img src={avatar} alt="" className="w-10" />
            </span>
          </div>
          <div onClick={hamburger} className=" z-[100] w-[30px] h-[30px] px-1 py-1 text-gray-500 rounded-lg md:hidden cursor-pointer">
            <div style={{transform: display? "translateY(5.5px) rotate(45deg)" : "rotate(0)"}} className="transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1"></div>
            <div style={{opacity: display? 0 : 1}} className="transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1"></div>
            <div style={{transform: display? "translateY(-5.5px) rotate(-45deg)" : "rotate(0)"}} className="transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1"></div>
          </div>
        </div>
        <div class="text-left hidden md:block items-center">
          {open && 
            <div 
              class="mt-6 absolute items-center right-6 z-10 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" 
              role="menu" aria-orientation="vertical" 
              aria-labelledby="menu-button" tabindex="-1">
              <div 
                className="transition linear duration-300 items-center justify-between w-full md:w-auto md:order-1"
                style={nav} id="navbar-sticky">
                <ul className="w-full flex flex-col p-4 mt-0 border border-white rounded-lg bg-white md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                  <li className="items-center flex py-3 md:py-2 pl-3 pr-4 text-black hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page">
                    <MdSpaceDashboard />
                    <Link to="/dashboard/upcoming_events" className="block px-2 py-2 text-sm w-full">
                      Dashboard
                    </Link>
                  </li>
                  <li className="items-center flex py-3 md:py-2 pl-3 pr-4 text-black hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page">
                    <FiSettings />
                    <Link to="/profile" className="block px-2 py-2 text-sm w-full">
                      Account Setting
                    </Link>
                  </li>
                  <li
                  className="items-center flex py-3 md:py-2 pl-3 pr-4 text-black hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                  aria-current="page">
                    <img src={googleCalendar} alt="" />
                    <Link to="/error404" className="block px-2 py-2 text-sm w-full">
                      Sync With Google Calender
                    </Link>
                  </li>
                  <span className={`${menuStyles.theUserDetail} my-4`}>
                    <div className="w-[35px] h-[35px] border border-[#0056D6] text-[#717172] rounded-full flex justify-center items-center object-cover text-xs">
                      <span>M</span>
                    </div>
                    <span className={menuStyles.theUsersName}>
                      <span>Mbulu Benita</span>
                      <span>beniottabenita@gmail.com</span>
                    </span>
                  </span>
                  <li
                    className="items-center flex py-3 md:py-2 pl-3 pr-4 text-black hover:text-red-700 hover:bg-blue-700 md:hover:bg-transparent md:hover:text-red-700 rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page">
                    <FiLogIn />
                    <Link to="/error404" className="block px-2 py-2 text-sm w-full">
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          }
        </div>

        {showNav && <div style={nav}
          className="transition linear duration-300 items-center justify-between w-full md:hidden md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul  className="bg-green-500 w-full flex flex-col p-4 mt-0 md:mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <Link
                to="/dashboard/upcoming_events"
                className="block py-3 md:py-2 pl-3 pr-4 text-black hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block py-3 md:py-2 pl-3 pr-4 text-black hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                aria-current="page"
              >
                Account Setting
              </Link>
            </li>
            <li>
              <span className="flex">
                <img src={googleCalendar} alt="" className="pl-3" />
                <Link
                  to="/error404"
                  className="block py-3 md:py-2 pl-3 pr-4 text-black hover:text-white hover:bg-blue-700 md:hover:bg-transparent md:hover:text-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Sync With Google Calender
                </Link>
              </span>
            </li>
            <span className={`${menuStyles.theUserDetail} my-4 pl-3`}>
              <div className="w-[35px] h-[35px] border border-[#0056D6] text-[#717172] rounded-full flex justify-center items-center object-cover text-xs">
                <span>M</span>
              </div>
              <span className={menuStyles.theUsersName}>
                <span>Mbulu Benita</span>
                <span>beniottabenita@gmail.com</span>
              </span>
            </span>
            <li>
              <Link
                to="/error404"
                className="block py-3 md:py-2 pl-3 pr-4 text-red-700 hover:text-white hover:bg-red-700 border-red-700 border-2 rounded dark:text-white"
                aria-current="page"
              >
                Log Out
              </Link>
            </li> 
          </ul>
        </div>}
      </div>
    </nav>
	);
};

export default CreateEventNavbar;
