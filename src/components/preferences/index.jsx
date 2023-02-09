import React from 'react'
import Button from '../Button'

export const Preferences = ({isOpen, setIsOpen, setPopup}) => {
  const handlePopup = () => {
    setIsOpen(false)
    setPopup(true)
  }

  return (
    <div className={`w-full fixed text-[14px] flex-flex-col justify-center items-center h-[180px] left-0 right-0 bg-[#1070FF] p-[20px] ${isOpen ? 'bottom-0' : '-bottom-full'} transition-all duration-1000 ease-in delay-700`}>
      <p className='text-white mb-[25px] text-center'>We use cookies to optimize site functionality and give you the best possible experience</p>
      <div className='flex flex-col justify-center items-center'>
        <Button type='button' className='block mb-[20px] border-0 outline-0 focus:outline-0 bg-none text-white underline decoration-white' onClick={handlePopup}>
            Manage Preferences
        </Button>
        <Button type='button' onClick={() => setIsOpen(false)} className='block border-0 outline-0 focus:outline-0 bg-white text-black px-[50px] py-[10px] rounded-[5px] text-center'>
            Accept All Cookies
        </Button>
      </div>
    </div>
  )
}

