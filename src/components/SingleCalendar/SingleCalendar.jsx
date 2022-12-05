import React, { useState } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import "./SingleCalendar.css";

const SingleCalendar = ({ minDate, maxDate, setShowCalendar, showCalendar, id, addTime }) => {
	const [dateValue, setDateValue] = useState(new Date());
	const [time, setTime] = useState("7:00");

	const {
		setStartDate,
		setEndDate,
		setPreferredDate,
	} = CatchUpEventContextUse();

	const setDT = () => {
		const splitDate = dateValue.toLocaleDateString().split("/");
		const date = `${splitDate[1].length === 1 ? `0${splitDate[1]}` : splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
		if (id === "startDate") {
			setStartDate(date);
		}
		if (id === "endDate") {
			setEndDate(date);
		}
		if (id === "preferredDate") {
			setPreferredDate(`${date} - ${time}`);
		}
	};



	return (
		<div className='text-xs rounded-[8px] border border-[#D1D7DA]'>
			<Calendar
				calendarType='US'
				onChange={(e) => {
					setDateValue(e);
				}}
				maxDate={maxDate}
				minDate={minDate}
				value={dateValue}
			/>
			<div className='px-10 pb-8'>
				{addTime && (
					<div className='mb-4'>
						<span className='mr-4'>Time:</span>
						<TimePicker
							onChange={(e) => {
								setTime(e);
							}}
							value={time}
							disableClock
							clearIcon={null}
						/>
					</div>
				)}
				<div className='flex justify-center'>
					<button
						onClick={() => {
							setDT();
							setShowCalendar(!showCalendar);
						}}
						className={`rounded-[4px] ${"bg-[#0056D6]"} p-2 text-white`}>
						Add date
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleCalendar;
