import React from 'react'
import { FaTimes } from 'react-icons/fa';
import {preferenceData} from '../preferenceData'
import {PreferenceAccordion} from '../preferenceAccordions'
import Button from '../../../Button';

export const PreferenceModal = ({popup, setPopup, setIsOpen}) => {
  const handleClose = () => {
    setIsOpen(false)
    setPopup(false)
  }

  return (
    <div className={`${popup ?'fixed top-0 right-0 left-0 bottom-0 w-screen overflow-y-scroll z-20 bg-black bg-opacity-30': 'hidden'}`}>
      <div className='flex flex-col justify-start items-start bg-white my-[50px] w-[90%] md:w-[50%] m-auto rounded-[20px]'>
      <Button type='button' onClick={handleClose} className='flex justify-end items-center border-b border-[#ececec] w-full px-[20px] md:px-[40px] py-[15px] md:py-[25px] '>
        <FaTimes />
      </Button>
      <div className='px-[20px] md:px-[40px] py-[20px]'>
        <h2 className='my-[16px] text-black font-bold md:text-[1.25rem]'>Privacy Preference Settings</h2>
        <p className="text-[#59595B] text-light text-[0.875rem] md:text-[1.245rem] leading-[1rem] md:leading-[1.68rem]">
          Cookies are small files which are stored on your device in order to optimize your visit and to monitor the use and performance of our website. Because we respect your right to privacy, you can choose not to allow some types of cookies. Kindly select your desired settings below.
        </p>
      </div>
      <div className='w-full px-[20px] md:px-[40px] mt-[10px]'>
        <h2 className='text-black font-medium mb-[16px] md:text-[1.25rem]'>Manage Consent Preference</h2>
        <div className="w-full">
          {preferenceData.map(({ title, content, status, index }) => (
            <PreferenceAccordion key={title} title={title} content={content} status={status} preferenceData={preferenceData} index={index}/>
          ))}
        </div>
      </div>
      <div className='px-[20px] md:px-[40px] my-[70px]'>
      <Button type='button' onClick={handleClose} className='text-white text-[20px] font-medium py-[12px] px-[32px] bg-[#1070FF] rounded-[4px] '>
        Confirm Preference
      </Button>
      </div>
      </div>
    </div>
  )
}

