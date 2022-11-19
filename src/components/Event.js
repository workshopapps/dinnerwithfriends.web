import React from 'react';
import PropTypes from 'prop-types';
import calender from '../assets/img/calendar.png'

const Event = ({ status }) => {
  return (
    <div className='flex flex-col justify-center items-center g-y-4'>
        <div className='w-[154px] h-[154px] lg:w-[199px] lg:h-[199px] '>
          <img src={calender} alt="calender" />
        </div>
        <h4 className='text-[#1A1616] lg:font-bold text-xl'>No {status} events yet</h4>
    </div>
  )
}

Event.propTypes = {
    status: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Event.defaultProps = {
    className: '',
}

export default Event
