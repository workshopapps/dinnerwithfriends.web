import React from 'react';
import checkmark from "../pages/dashboard/icons/checkmark.svg";

const CalenderSyncModal = ({setModal}) => {


    return (

        <div className={`${setModal ?'fixed top-0 right-0 left-0 bottom-0 w-screen z-20  bg-black bg-opacity-50': 'hidden'}`}>
        <div className='w-11/12 lg:w-2/5 ml-auto mr-auto relative mt-44 flex flex-col bg-white py-6 rounded-2xl'>
        <div
              onClick={() => setModal(false)}
              className=" cursor-pointer pb-1 flex flex-col justify-center items-center rounded-full bg-[#FAFAFA] absolute w-[33px] h-[33px] right-[20px] top-[20px]"
            >
              <div
                style={{ transform: "translateY(2.5px) rotate(45deg" }}
                className="bg-[#717172] rounded-lg w-[15px] h-[1.5px] mt-1"
              ></div>
              <div
                style={{ transform: "translateY(-2.5px) rotate(-45deg" }}
                className="bg-[#717172] w-[15px] rounded-lg h-[1.5px] mt-1"
              ></div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <img
              className="w-[50px] h-[50px] mb-4"
              src={checkmark}
              alt="a checkmark"
            />
            <h3 className="mb-4 text-2xl font-bold text-center">
              Calender Synced Succesfully
            </h3>
            <p className=" w-full md:w-[340px] text-center text-sm font-bold text-[#898989]">
              You've successfully synced your google calender to your website, your events will now be added to your calender once created.
            </p>
            </div>

        </div>
    </div>
  )
}

export default CalenderSyncModal
