import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import "./SingleCalendar.css";

const SingleCalendar = ({ range, eventFormValues, setEventFormValues }) => {
	const [value, setValue] = useState(new Date());
	const [time, setTime] = useState("17:00");
	const [dates, setDates] = useState([]);
	const [times, setTimes] = useState([]);
	const [dateLimit, setDateLimit] = useState(false);
	const { dateAndTime, setDateAndTime } = CatchUpEventContextUse();

	const valueRange =
		value.length > 1 &&
		value.map((item) => {
			return item.toDateString();
		});
	const valueRangeString = `Date range from ${valueRange[0]} to ${valueRange[1]}`;

	const setDT = (valueRangeString) => {
		setDates([...dates, !range ? value.toDateString() : valueRangeString]);
		setTimes([...times, time]);
		setDateAndTime([
			...dateAndTime,
			{ id: value.toDateString(), title: `${value.toDateString()}  (${time})` },
		]);
		setEventFormValues({
			...eventFormValues,
			eventPeriods: dateAndTime,
		});
	};

	useEffect(() => {
		if (dateAndTime.length > 8) {
			setDateLimit(true);
		}
	}, [dateAndTime]);

	return (
		<div className='text-xs rounded-[8px] border border-[#D1D7DA] p-1'>
			<Calendar
				calendarType='US'
				selectRange={range ? true : false}
				onChange={(e) => {
					setValue(e);
				}}
				value={value}
			/>
			<div className='px-10 pb-8'>
				<span className='mr-4'>Time:</span>
				<TimePicker
					onChange={(e) => {
						setTime(e);
					}}
					value={time}
					disableClock
					clearIcon={null}
				/>
				<div className='mt-6'>
					<button
						disabled={dateLimit ? true : false}
						onClick={() => setDT(valueRangeString)}
						className={`rounded-[4px] ${
							dateLimit ? "bg-blue-300" : "bg-[#1070FF]"
						} p-2 text-white`}>
						Add date and time
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleCalendar;
