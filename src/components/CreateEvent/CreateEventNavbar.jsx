import React, { useState }  from "react";
import Logo from "../Logo";
import googleCalendar from "../../assets/img/g-calendar.svg";
import bell from "../../assets/img/notification.png";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { HiOutlineMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import menuStyles from "./createEvent.module.css";
import { Link } from "react-router-dom";

const CreateEventNavbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="border border-[#E3E3E3]">
      <div className={menuStyles.theCreateEventContainer}>
        <Logo />
        <div className="items-center cursor-pointer hidden md:flex">
          <img src={bell} alt="" className="w-[15px] h-[15px] mr-2" />
          <div className="w-[35px] h-[35px] border border-[#66A3FF] text-[#717172] rounded-full flex justify-center items-center object-cover text-xs">
            <span>M</span>
          </div>
          <div className="flex items-center">
            <button className={open && menuStyles.close}>
              <SlArrowDown onClick={() => setOpen(true)} />
            </button>
            <button className={!open && menuStyles.open}>
              <SlArrowUp onClick={() => setOpen(false)} />
            </button>
          </div>
        </div>

        <div className=" md:hidden flex items-center">
          <button className={open && menuStyles.close}>
            <HiOutlineMenu onClick={() => setOpen(true)} />
          </button>
          <button className={!open && menuStyles.open}>
            <FaTimes onClick={() => setOpen(false)} />
          </button>
        </div>
      </div>

      <div className="">
        {open && (
          <ul className={menuStyles.theCreateEventContainerLinks}>
            <Link to="/dashboard/upcoming_events" className={menuStyles.goTo}>
              Dashboard
            </Link>
            <Link to="/Upload_details" className={menuStyles.goTo}>
              Account Setting
            </Link>
            <Link to="/help/*" className={menuStyles.goTo}>
              Help and Support
            </Link>
            <Link to="/error404" className={menuStyles.goTo}>
              Notification
            </Link>
            <Link to="/error404" className={menuStyles.syncWithGoogle}>
              <img src={googleCalendar} alt="" />
              Sync with Google Calender
            </Link>

            <span className={menuStyles.theUserDetail}>
              <div className="w-[35px] h-[35px] border border-[#66A3FF] text-[#717172] rounded-full flex justify-center items-center object-cover text-xs">
                <span>M</span>
              </div>
              <span className={menuStyles.theUsersName}>
                <span>Mbulu Benita</span>
                <span>beniottabenita@gmail.com</span>
              </span>
            </span>
            <Link to="/error404" className={menuStyles.logOutBtn}>
              <span>Log out</span>
            </Link>
          </ul>
        )}
      </div>
    </div>
	);
};

export default CreateEventNavbar;
