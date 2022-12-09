import React, { useState } from "react";
import googleCalendar from "../../assets/img/g-calendar.svg";
import { MdSpaceDashboard } from "react-icons/md";
import { FiSettings, FiLogIn } from "react-icons/fi";
import menuStyles from "./createEvent.module.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/img/Avatar.png";
import { FaAngleDown } from 'react-icons/fa';
import Logo from "../Logo";
import Button from "../Button";
import jwt_decode from "jwt-decode";

/* global gapi */

const CreateEventNavbar = ({setModal}) => {
  const token = localStorage.getItem("jwt-token")
  const decoded = jwt_decode(token);

	const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [display, setDisplay] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
    setShowNav(false);
  }

  const hamburger = () => {
    setShowNav(true)
    setDisplay(!display)
    setOpen(false)
  }

    const nav = {
      transform: window.matchMedia("(max-width: 767px)").matches && !display ? "translateY(-150%)" : "translateY(0)"
     }

     function authenticate() {
      return gapi.auth2
        .getAuthInstance()
        .signIn({
          scope:
            "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly",
          plugin_name: "dinnerwithfriends",
        })
        .then(
          function () {
            console.log("Sign-in successful");
          },
          function (err) {
            console.error("Error signing in", err);
          }
        );
    }

    function loadClient() {
      gapi.client.setApiKey("AIzaSyA7G2ANAJI6rm_DpTW84lsKUJT-c8bmirI");
      return gapi.client
        .load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
        .then(
          function () {
            console.log("GAPI client loaded for API");
            execute();
          },
          function (err) {
            console.error("Error loading GAPI client for API", err);
          }
        );
    }
    // Make sure the client is loaded and sign-in is complete before calling this method.
    function execute() {
      return gapi.client.calendar.calendarList.list({}).then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);

          if (response.status === 200) {
            setModal(true);
          }
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
    }
    gapi.load("client:auth2", function () {
      gapi.auth2.init({
        client_id:
        "102076896830-4il8ncmrd6qfoippk2ut4uujb8cci54v.apps.googleusercontent.com",
      });
    });

    const googleCalenderApi = async () => {
      await authenticate().then(loadClient);
    };

	return (
		<nav
			className={`transition ease-in duration-400 bg-white md:px-10 px-2.5 md:h-[85px] md:pb-2 fixed w-full z-20 top-0 left-0 border-b border-white ${
				display ? "h-[300px]" : "h-[59px]"
			}`}>
			<div className='h-[45px] md:h-[76px] py-4 md:py-0 bg-transparent container flex flex-wrap items-center justify-between mx-auto'>
				<Logo />
				<div className='flex md:order-2'>
					<div onClick={toggleOpen} className='hidden md:flex items-center gap-[5px] cursor-pointer'>
						<span>
              <FaAngleDown />
						</span>
						<span>
							<img src={avatar} alt='' className='w-[30px]' />
						</span>
					</div>
					<div
						onClick={hamburger}
						className=' z-[100] w-[30px] h-[30px] px-1 py-1 text-gray-500 rounded-lg md:hidden cursor-pointer'>
						<div
							style={{
								transform: display
									? "translateY(5.5px) rotate(45deg)"
									: "rotate(0)",
							}}
							className='transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1'></div>
						<div
							style={{ opacity: display ? 0 : 1 }}
							className='transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1'></div>
						<div
							style={{
								transform: display
									? "translateY(-5.5px) rotate(-45deg)"
									: "rotate(0)",
							}}
							className='transition ease-in duration-200 bg-black w-[20px] h-[1.5px] mt-1'></div>
					</div>
				</div>
			</div>

      <div class="text-left  md:block items-center">
        {open &&
          <div class="absolute items-center right-6 z-10 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class={`${menuStyles.goTo} py-3 px-2`} role="none">
              <ul>
                <li>
                  <MdSpaceDashboard />
                  <Link to="/dashboard/upcoming_events" className="block px-2 py-2 text-sm w-full">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <FiSettings />
                  <Link to="/profile" className="block px-2 py-2 text-sm w-full">
                    Account Setting
                  </Link>
                </li>
                <li>
                  <Button className="flex items-center py-2" onClick={googleCalenderApi}>
                    <img src={googleCalendar} alt="" className="mr-2 w-4" />
                    Sync with Google Calender
                  </Button>
                </li>
                <span className="text-black rounded hover:bg-inherit hover:text-color">
                  <span className="flex py-2">
                    <div className="w-[35px] h-[35px] border border-[#66A3FF] text-[#717172] mr-2 rounded-full flex justify-center items-center object-cover text-xs">
                      <img src={avatar} alt="" className="w-8" />
                    </div>
                    <span className={menuStyles.theUsersName}>
                      <span>{decoded.name}</span>
                      <span>{decoded.email}</span>
                    </span>
                  </span>
                </span>
                <li>
                  <FiLogIn />
                  <Link to="/" className="block px-2 py-2 text-sm w-full">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
        {showNav &&
          <div style={nav}
          className="text-left block transition linear duration-300 items-center justify-between  w-full md:w-auto md:order-1 md:hidden"
          id="navbar-sticky"
        >
          <ul  className="w-full flex flex-col p-4 mt-0 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
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
                fro-17-features-page
                to="/profile"
                dev
                className="block py-3 md:py-2 pl-3 pr-4 text-black rounded hover:bg-blue-700 hover:text-white"
              >
                Account Settings
              </Link>
            </li>
            <li>
              <Button
                onClick={googleCalenderApi}
                className="flex w-full justify-start items-center pl-4 py-[10px] text-black rounded hover:bg-blue-700 hover:text-white"
              >
                <img src={googleCalendar} alt="" className="mr-2 w-4" />
                Sync with Google Calender
              </Button>
            </li>
            <li>
              <span className="flex py-2 pl-4">
                <div className="w-[35px] h-[35px] border border-[#66A3FF] text-[#717172] mr-2 rounded-full flex justify-center items-center object-cover text-xs">
                  <img src={avatar} alt="" className="w-8" />
                </div>
                <span className={menuStyles.theUsersName}>
                  <span>{decoded.name}</span>
                  <span>{decoded.email}</span>
                </span>
              </span>
            </li>
            <li>
              <Link
                to="/"
                dev
                className="w-full block mt-4 py-2 pl-3 pr-4 text-center bg-white h-[44px] text-[#d60000] border-[1.5px] border-[#d60000] rounded hover:bg-red-900 hover:text-white"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
        }
    </nav>
	);
};

export default CreateEventNavbar;
