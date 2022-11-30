import React from 'react'
import { useState } from 'react'
import ArrowDown from '../assets/icons/arrow-down.svg'
import NotificationIcon from '../assets/img/notification.png'
import GCalendar from '../assets/img/g-calendar.png'
import { Link } from 'react-router-dom'

function InternalNavbar() {
  const [isActive, setActive] = useState(false)
  function handleClick() {  
    isActive ? setActive(false) : setActive(true)
  }
  
  return (
    <nav className="px-4 sm:px-8 md:px-12 lg:px-16 py-7 flex justify-between relative">
        <h1 className="text-2xl font-bold text-blue-600">Catch<span className="text-gray-900">Up</span></h1>
        <div className={isActive ? "px-4 py-7 flex flex-col h-screen md:h-fit w-screen md:w-fit fixed bg-white top-0 md:top-16 left-0 md:left-auto md:right-8 md:border md:shadow md:rounded transition-all" : "hidden"}>
            <div className="flex justify-between w-full md:hidden">
                <h1>Catchup</h1>
                <svg
                    onClick={handleClick}    
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>
            </div>
            <div className="my-4 md:my-0 text-gray-700 flex flex-col">
                <Link to="/dashboard" className="block py-3 md:pb-3 md:pt-0 border-b  hover:bg-gray-50 transition-all">Dashboard</Link>
                <Link to="/settings" className="block py-3 border-b  hover:bg-gray-50 transition-all">Account Setting</Link>
                <Link to="/help/*" className="block py-3 border-b  hover:bg-gray-50 transition-all">Help and Support</Link>
                <Link to="/" className="block py-3 border-b md:hidden hover:bg-gray-50 transition-all">Notifications</Link>
                <div className="flex items-center space-x-3 border-b py-3 hover:bg-gray-50 transition-all">
                    <img src={GCalendar} alt="" />
                    <span>Sync with Google Calendar</span>
                </div>
                <div className="flex items-center space-x-2 py-3 border-b">
                    <span className="h-fit px-3 py-[7px] rounded-full border-blue-600 border-2">M</span>
                    <div className="-space-y-2">
                        <h3 className="font-medium">Mbulu Benita</h3>
                        <span>beniottabenita@gmail.com</span>
                    </div>
                </div>
                <Link to="/" className=" w-full border-2 rounded border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-medium text-center py-2">Log out</Link>
            </div>
        </div>
        {/* desktop menu items */}
        <div className="hidden md:flex items-center space-x-2">
            <button>
                <img src={NotificationIcon} alt="" />
            </button>
            <button onClick={handleClick} className="space-x-1 flex items-center">
                <div>
                    <span className="px-3 py-[9px] rounded-full bg-gray-200 border-blue-600 border-2">M</span>
                </div>
                <img className="w-3" src={ArrowDown} alt="" />
            </button>
        </div>
        {/* mobile menu icon */}
        <div onClick={handleClick} className="md:hidden">
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
        </div>
    </nav>
  )
}


export default InternalNavbar

  

  
