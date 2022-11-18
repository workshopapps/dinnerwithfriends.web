import React from 'react'

const UpcomingEvent = () => {
    return (
        <>
        <section className='px-5 lg:px-20 pt-16'>
          <h2 className='text-[#061A37] text-center text-2xl lg:text-[34px] leading-9 lg:leading-[44px] font-bold'>Hi, Mubaraq, you have been invited by Rahmoni Taiwo to attend a CatchUp event. See details below</h2>
          <div className='flex flex-col justify-center items-start md:w-[80%] lg:w-[60%] mt-[44px] lg:mt-[70px] mx-auto gap-y-6 '>
             <span className='flex items-center gap-x-6'>
                <div className='w-10 h-10 md:w-12 md:h-12'>
                  <img src="" alt="" />
                </div>
               <p className='text-[#717172] font-medium md:font-bold text-[18px] md:text-2xl'> HNG finalist meetup</p>
             </span>
             <span className='flex items-center gap-x-6'>
                <div className='w-10 h-10 md:w-12 md:h-12'>
                  <img src="" alt="" />
                </div>
               <p className='text-[#717172] font-medium md:font-bold text-[18px]  md:text-2xl'> Durban St. Lekki Penninsula II, 904101, Abuja</p>
             </span>
             <span className='flex items-center gap-x-6'>
                <div className='w-10 h-10 md:w-12 md:h-12'>
                  <img src="" alt="" />
                </div>
               <p className='text-[#717172] font-medium md:font-bold text-[18px] md:text-2xl'>Proposed between 20th November - 26th November</p>
             </span>
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

