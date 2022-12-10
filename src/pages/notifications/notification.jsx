import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Toggleswitch from "./toggle";
import CreateEventNavbar from "../../components/CreateEvent/CreateEventNavbar";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";


 function Notification () {

    return(
        <body className="">
            <CreateEventNavbar />
            <div className="md:hidden">
                <Navbar />
                </div>

<div className='md:mx-64 px-5 flex flex-col items-left justify-center mt-20 mb-52 space-y-10'>
    <div className="flex flex-row items-center justify-start space-x-2">
        <Link to='/dashboard/upcoming_events'>
          <IoIosArrowRoundBack className="font-bold" size={30}/>
        </Link>
        <p className="font-bold">Account Settings</p>
    </div>
    <div className='flex flex-col  space-y-5 '>
    <div className='flex flex-row items-center md:justify-start justify-around md:space-x-32'>
        <Link to="/profile"><p className="font-semibold text-sm">Profile</p></Link>
       <p className="font-semibold text-sm">Notifications</p>


    </div>

    <div className="h-0.5 md:bg-blue-gray-200  bg-blue-500 md:w-full w-32 ml-36 md:ml-0  mt-5 "></div>
    </div>
    <div className="flex flex-col space-y-3">
    <div className="flex flex-row items-center justify-between space-x-32 ">
        <p className="font-semibold">Email</p>
        <Toggleswitch rounded={true} />
    </div>

    <div><p className="md:text-sm text-xs font-medium ">Emails related to meetings you organized or participated in,
            including those finalized and</p>
            <p className="md:text-sm text-xs font-medium ">added to your calendar.
</p></div>
    </div>
    <div className="flex flex-col space-y-3" >
        <div className="flex flex-row items-center justify-between "><p className="font-semibold">Phone Number</p>
        <Toggleswitch rounded={true} />
    </div>
    <div><p className="md:text-sm text-xs font-medium ">Emails related to meetings you organized or participated in,
            including those finalized and</p>
            <p className="md:text-sm text-xs font-medium ">added to your calendar.
</p></div>

    </div>

    <div className="flex flex-col space-y-3" >
        <div className="flex flex-row items-center justify-between ">
            <p className="font-semibold">Push Notifications</p>
        <Toggleswitch rounded={true} />
    </div>
    <p className="md:text-sm text-xs font-medium">Receive notifications on your desktop
</p>
</div>

</div>

<Footer />

</body>
    )
}
export default Notification;
