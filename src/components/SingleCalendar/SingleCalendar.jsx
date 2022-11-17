import React from 'react'
import Calendar from "react-calendar";
import './SingleCalendar.css'

const SingleCalendar = () => {
  return (
    <div className='text-sm'>
      <Calendar 
				calendarType='US'
				selectRange />
    </div>
  )
}

export default SingleCalendar