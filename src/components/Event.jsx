import React from 'react';
import PropTypes from 'prop-types';
import calender from '../assets/img/calendar.png'
import notification from '../assets/img/notification.png'
import people from '../assets/img/people.png'
import calendery from '../assets/img/calendery.png'

const Event = ({ status, title, description, date, invitee, filteredEvents }) => {
  console.log(filteredEvents.length);
  return (
    <>
    {filteredEvents.length === 0 ? (

      <div className='flex flex-col justify-center items-center g-y-4 lg:w-50 '>
        <div className='w-[154px] h-[154px] lg:w-[199px] lg:h-[199px] '>
          <img src={calender} alt="calender" />
        </div>
        <h4 className='text-[#1A1616] lg:font-bold text-xl'>No {status} events yet</h4>
      </div>
    ) : (
      <div className='border border-solid border-[#CDCDCD] py-6 px-6 rounded-2xl mb-6 lg:mb-0'>
        <div className='mb-2.5 mb-4 flex justify-between items-center'>
          <h3 className='text-[#424245] text-xs lg:text-base lg:font-bold'>{title}</h3>
          <span className='w-6 h-6'>
            <img src={notification} alt="notification icon" />
          </span>
        </div>
        <p className='text-[#898989] font-bold text-[10px] text-sm mb-[18px] lg:mb-[35px]'>{description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-2.5'>
            <span className='w-4 h-4'>
              <img src={calendery} alt="calender" />
            </span>
            <span className='font-medium text-[10px] text-[#1070FF] lg:font-bold text-sm'>{date}</span>
          </div>
          <div className='flex items-center gap-x-2.5'>
            <span className='w-4 h-4'>
              <img src={people} alt="people" />
            </span>
            <span className='font-medium text-[10px] text-[#717172] lg:font-bold text-sm'> {invitee} invitees </span>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

Event.propTypes = {
    status: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    invitee: PropTypes.number.isRequired,
};

Event.defaultProps = {
    className: '',
}

export default Event
