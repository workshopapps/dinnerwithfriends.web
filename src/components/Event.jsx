import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import calender from '../assets/img/calendar.png'
import notification from '../assets/img/notification.png'
import people from '../assets/img/people.png'
import calendery from '../assets/img/calendery.png'
import moment from "moment/moment";

const Event = ({id, status, event_title, event_description, final_event_date, participant_number, filteredEvents }) => {

  const [agreedDate, setAgreedDate] = useState("");

  useEffect(() =>{
     if(filteredEvents.length !== 0) {
       setAgreedDate(moment(final_event_date, "YYYY-MM-DDTHH:mm").format("MM/DD/YYYY"))
     }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    {filteredEvents.length === 0 ? (

      <div className='flex flex-col justify-center items-center g-y-4 lg:w-50 '>
        <div className='w-[154px] h-[154px] lg:w-[199px] lg:h-[199px] '>
          <img src={calender} alt="calender" className='w-[100%]'/>
        </div>
        <h4 className='text-[#1A1616] lg:font-bold text-xl'>No {status} events yet</h4>
      </div>
    ) : (
      <Link to={`/view_event/${id}`} className="block">
      <div className='border border-solid border-[#CDCDCD] py-6 px-6 rounded-2xl mb-6 lg:mb-0 place-self-auto justify-items-stretch w-[100%]'>
        <div className='mb-4 flex justify-between items-center'>
          <h3 className='text-[#424245] text-xs lg:text-base lg:font-bold'>{event_title}</h3>
          <span className='w-6 h-6'>
            <img src={notification} alt="notification icon" />
          </span>
        </div>
        <p className='text-[#898989] font-bold text-[10px] text-sm mb-[18px] lg:mb-[35px]'>{event_description}</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-x-2.5'>
            <span className='w-4 h-4'>
              <img src={calendery} alt="calender" />
            </span>
            <span className='font-medium text-[10px] text-[#0056D6] lg:font-bold text-sm'>{final_event_date === null ? "Not decided" : agreedDate }</span>
          </div>
          <div className='flex items-center gap-x-2.5'>
            <span className='w-4 h-4'>
              <img src={people} alt="people" />
            </span>
            <span className='font-medium text-[10px] text-[#717172] lg:font-bold text-sm'> {participant_number} invitees </span>
          </div>
        </div>
      </div>
      </Link>
    )}
    </>
  )
}

Event.propTypes = {
    status: PropTypes.string.isRequired,
    className: PropTypes.string,
    event_title: PropTypes.string.isRequired,
    event_description: PropTypes.string.isRequired,
    participant_number: PropTypes.number.isRequired,
};

Event.defaultProps = {
    className: '',
}

export default Event
