import React from 'react'
import Navbar from '../../components/Navbar'

const UpcomingEvent = () => {
    return (
        <>
        <Navbar />
        <section className='px-[22px] lg:px-20 pt-11 lg:pt-16'>
          <div className='flex flex-col justify-center lg:justify-between items:center gap-4'>
            <div className='flex flex-col justify-center lg:justify-start items:center lg:items-start gap-y-4'>
               <h2 className='text-[#151517] text-2xl font-bold lg:text-[40px]'>Welcome</h2>
               <p className='text-[#898989] font-bold lg:font-normal text-sm lg:text-lg'>Create events, send invites and keep up with your friends</p>
            </div>
          </div>
          <div className='mt-[44px] md:mt-[80px] text-center'>
            <p className='flex flex-col md:flex-row justify-center items-center'>
              <span className='text-[#061A37] font-bold text-[24px] md:text-[34px]'>Please select your availability</span>
              <span className='text-[#898989] font-bold text-[14px] md:text-xl'>The highlighted date are the proposed date</span>
            </p>
            <p className='text-[#898989] font-bold text-[18px] md:text-[24px] my-[12px]'>By clicking on a date, you are indicating that you are available</p>
          </div>
          <div className='flex flex-col md:flex-row justify-between gap-[40px] md:gap-[80px] mb-10 md:mb-20 mt-10 md:mt-20'>
            <div className='text-center flex flex-col justify-center items-center flex-1'>
              <p className='font-bold text-xl text-[#717172]'>Select your dates here</p>
              <DatePicker onChange={handleDatas} value={value} activeStartDate={availabilityStartDate}  minDate={availabilityStartDate} maxDate={availabilityEndDate}   defaultValue={preferredDate}/>
            </div>
            <div>
              <h4 className='text-center font-bold text-xl text-[#717172]'>Selected dates will appear here</h4>
              <div className='mt-[48px] flex flex-col gap-[20px] md:gap-[40px]'>
                <div className='cursor-pointer flex gap-6 justify-start items-center'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className={'w-5 h-5 outline-none bg-[#3B89FF] rounded-md'}
                  />
                  <span className='font-bold text-[#151517] md:text-2xl'>{myDate(availabilityStartDate)} by 12:30pm at VGC Abuja</span>
                </div>
                <div className='cursor-pointer flex gap-6 justify-start items-center'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className={'w-5 h-5 outline-none bg-[#3B89FF] text-white rounded-md'}
                  />
                  <span className='font-bold text-[#151517] md:text-2xl'>{myDate(availabilityEndDate)} by 10:30am at VGC Abuja</span>
                </div>
              </div>
            </div>
          </div>
          <p className='text-[#717172] font-bold  md:text-[24px]'>By clicking submit, you confirm that you are available on the selected dates.</p>
          <p className='text-[#424245] font-bold  md:text-[24px] mt-[22px]'>Don’t worry much, if your schedule is tight during the proposed date. You can request to reschedule by clicking the reschedule button below below</p>
          <div className='flex justify-center items-center mt-[40px] mb-[59px] gap-x-[40px]'>
            <Button type='button' className='bg-[#1070FF] text-white text-center rounded py-3 px-8' onClick={handleSubmit}>
                Submit
            </Button>
            <Button type='button' className='bg-[#fff] text-white rounded border-solid border-2 border-[#1070FF] py-3 px-8 text-[#1070FF] bg-white text-center'>
                Reschedule
            </Button>
          </div>
        </section>
        <DashboardFooter />
        {modal && (
              <EventResponse modal={modal} handleModal={handleModal} setModal={setModal}/>
            )}
        </>
      )
}

export default UpcomingEvent

