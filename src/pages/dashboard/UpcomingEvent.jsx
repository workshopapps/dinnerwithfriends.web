import React, { useState} from 'react'
import Button from '../../components/Button'
import Navbar from '../../components/Navbar'
import calender from '../../assets/img/g-calendar.png'
import MediaQuery from 'react-responsive'
import Event from '../../components/Event'

const UpcomingEvent = () => {
  const [status, setStatus] = useState('Upcoming');

    return (
        <>
        <Navbar />
        <section className='px-[22px] lg:px-20 pt-11 lg:pt-16'>
          <div className='flex flex-col justify-center lg:justify-between items:center gap-4 mb-4 lg:mb-8'>
            <div className='flex flex-col justify-center lg:justify-start items:center lg:items-start gap-y-4'>
               <h2 className='text-[#151517] text-2xl font-bold lg:text-[40px]'>Welcome</h2>
               <p className='text-[#898989] font-bold lg:font-normal text-sm lg:text-lg'>Create events, send invites and keep up with your friends</p>
            </div>
            <Button type='button' className='hidden lg:flex justify-between items-center gap-x-3.5 rounded-lg border border-solid border-[#344054] py-3.5 px-4 outline-0'>
                <img src={calender} alt="google-calender" />
                <p className='text-[#344054] text-lg'>Sync with Google Calendar</p>
            </Button>
          </div>
          <div className='flex flex-col p-8 gap-y-8 justify-center items-center border border-solid border-[#CDCDCD] bg-[#FAFAFA] lg:bg-white'>
            <Button type='button' className='font-bold text-sm lg:text-xl flex justify-between items-center gap-x-3.5 text-white bg-[#1070FF] rounded py-3 px-4 lg:px-8 outline-0'>
              <span>+</span>
              <span>Create Event</span>
            </Button>
            <div className='flex flex-col justify-center items-center gap-y-2'>
              <span className='text-[#151517] font-bold lg:font-medium text-xl'>New Catch Up Event</span>
              <span className='text-[#898989] font-bold lg:font-normal text-lg'>Create event and let people chip in</span>
            </div>
          </div>
          <div className='lg:border border-solid border-[#CDCDCD] px-[46px] py-9'>
             <h3 className='text-[#151517] text-center lg:text-left font-bold lg:font-medium text-2xl mb-[40px]'>All Events</h3>
             <MediaQuery minWidth={1024}>
               <ul className='flex justify-start items-center gap-x-8'>
                <li>
                  <Button className='outline-0 border-0 text-[#717172] bg-inherit text-lg' onClick={() => setStatus('Upcoming')}>
                    Upcoming Event
                  </Button>
                </li>
                <li>
                  <Button className='outline-0 border-0 text-[#717172] bg-inherit text-lg' onClick={() => setStatus('Rsvp')}>
                   Rsvp Event
                  </Button>
                </li>
                <li>
                  <Button className='outline-0 border-0 text-[#717172] bg-inherit text-lg' onClick={() => setStatus('Pending')}>
                    Pending Event
                  </Button>
                </li>
               </ul>
              </MediaQuery>
          </div>
          <div className='flex justify-center items-center mt-[40px] mb-[59px] lg:border border-solid border-[#CDCDCD]'>
          {status === 'Upcoming' && (
              <Event status={status}/>
          )}
          {status === 'Rsvp' && (
              <Event status={status}/>
          )}
          {status === 'Pending' && (
              <Event status={status}/>
          )}
          </div>
        </section>
        </>
      )
}

export default UpcomingEvent

