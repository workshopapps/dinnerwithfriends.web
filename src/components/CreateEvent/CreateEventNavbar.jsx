import React, { useState }  from "react";
import Logo from "../Logo";
import bell from "../../assets/img/notification.png";
import { HiOutlineMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { BiPurchaseTag, BiLock } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"
import { FiSettings, FiLogIn } from "react-icons/fi"
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
          <div 
            onClick={() => setOpen(!open)}
            className="w-[35px] h-[35px] border border-[#0056D6] text-[#717172] rounded-full flex justify-center items-center object-cover text-xs">
            <span>M</span>
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

      <div class="text-left">
        {open && 
          <div class="absolute right-6 z-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class={`${menuStyles.goTo} py-3 px-2`} role="none">
              <ul>
                <li>
                  <BsPerson />
                  <Link to="/dashboard/upcoming_events" className="block px-2 py-2 text-sm">
                    Profile
                  </Link>
                </li>
                <li>
                  <BiPurchaseTag />
                  <Link to="/#" className="block px-2 py-2 text-sm">
                    Faq
                  </Link>
                </li>
                <li>
                  <BiLock />
                  <Link to="/policy" className="block px-2 py-2 text-sm">
                    Privacy
                  </Link>
                </li>
                <li>
                  <FiSettings />
                  <Link to="/profile" className="block px-2 py-2 text-sm">
                    Account Setting
                  </Link>
                </li>
                <li>
                  <FiLogIn />
                  <Link to="/error404" className="block px-2 py-2 text-sm">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>
    </div>
	);
};

export default CreateEventNavbar;
