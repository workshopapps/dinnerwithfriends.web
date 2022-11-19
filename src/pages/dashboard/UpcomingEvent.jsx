import React, { useState} from 'react'
import Button from '../../components/Button'
import calender from '../../assets/img/g-calendar.png'
import MediaQuery from 'react-responsive'
import Event from '../../components/Event'
import add from '../../assets/img/add.png'
import Footer from '../../components/Footer'

const UpcomingEvent = () => {
  const [status, setStatus] = useState('Upcoming');

    return (
        <>
        <section className='px-[22px] lg:px-20 pt-11 lg:pt-16 mb-16'>
          <div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-x-4 mb-4 lg:mb-8'>
            <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-y-4'>
               <h2 className='text-[#151517] text-2xl font-bold lg:text-[40px]'>Welcome</h2>
               <p className='text-[#898989] text-center font-bold lg:font-normal text-sm lg:text-lg'>Create events, send invites and keep up with your friends</p>
            </div>
            <Button type='button' className='hidden lg:flex justify-between items-center gap-x-3.5 rounded-lg border border-solid border-[#344054] px-4 outline-0'>
              <div className='w-[28px] h-[28px]'>
                <img src={calender} alt="google-calender" />
              </div>
              <p className='text-[#344054] text-lg'>Sync with Google Calendar</p>
            </Button>
          </div>
          <div className='flex flex-col p-8 gap-y-8 mt-9 justify-center items-center border border-solid border-[#CDCDCD] bg-[#FAFAFA] lg:bg-white'>
            <Button type='button' className='font-bold text-sm lg:text-xl flex justify-between items-center gap-x-3.5 text-white bg-[#1070FF] rounded py-3 px-4 lg:px-8 outline-0'>
              <span>
                <img src={add} alt="add" />
              </span>
              <span>Create Event</span>
            </Button>
            <div className='flex flex-col justify-center items-center gap-y-2'>
              <span className='text-[#151517] font-bold lg:font-medium text-xl'>New Catch Up Event</span>
              <span className='text-[#898989] font-bold lg:font-normal text-lg text-center'>Create event and let people chip in</span>
            </div>
          </div>
          <div className='lg:border border-solid border-[#CDCDCD] px-[46px] py-9'>
             <h3 className='text-[#151517] text-center lg:text-left font-bold lg:font-medium text-2xl lg:mb-[40px]'>All Events</h3>
             <MediaQuery minWidth={1024}>
               <ul className='flex justify-start items-center gap-x-8'>
                <li>
                  <Button className={`${status === 'Upcoming' ? 'pb-4 border-[#1070FF] border-b-4 '  : ''}'pb-4 outline-0 border-0 text-[#717172] bg-inherit text-lg'`} onClick={() => setStatus('Upcoming')}>
                    Upcoming Event
                  </Button>
                </li>
                <li>
                  <Button className={`${status === 'Rsvp' ? 'pb-4 border-[#1070FF] border-b-4 '  : ''}' pb-4 outline-0 border-0 text-[#717172] bg-inherit text-lg'`} onClick={() => setStatus('Rsvp')}>
                   Rsvp Event
                  </Button>
                </li>
                <li>
                  <Button className={`${status === 'Pending' ? 'pb-4 border-[#1070FF] border-b-4 '  : ''}' pb-4 outline-0  text-[#717172] bg-inherit text-lg'`} onClick={() => setStatus('Pending')}>
                    Pending Event
                  </Button>
                </li>
               </ul>
              </MediaQuery>
          </div>
          <div className='flex flex-col justify-center items-center gap-y-8 lg:border border-solid border-[#CDCDCD] lg:pt-12 lg:pb-[200px]'>
            <MediaQuery minWidth={1024}>
              {status === 'Upcoming' && (
                <Event status={status}/>
              )}
              {status === 'Rsvp' && (
                <Event status={status}/>
              )}
              {status === 'Pending' && (
                <Event status={status}/>
              )}
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
            <div>
              <p className='text-[#424245] font-medium mb-4 text-center'>Upcoming Events</p>
              <Event status='Upcoming'/>
            </div>
            <div>
              <p className='text-[#424245] font-medium mb-4 text-center'>Rsvp Events</p>
              <Event status='Rsvp'/>
            </div>
            <div>
              <p className='text-[#424245] font-medium mb-4 text-center'>Pending Events</p>
              <Event status='Pending'/>
            </div>
            </MediaQuery>
          </div>
        </section>
        <Footer />
        </>
      )
}

export default UpcomingEvent

