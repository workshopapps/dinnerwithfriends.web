import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import "./SingleCalendar.css";

const SingleCalendar = ({ range }) => {
	const [value, setValue] = useState(new Date());
	const [time, setTime] = useState("17:00");
	const [dates, setDates] = useState([]);
	const [times, setTimes] = useState([]);
	const [dateLimit, setDateLimit] = useState(false);

	const valueRange =
		value.length > 1 &&
		value.map((item) => {
			return item.toDateString();
		});
	const valueRangeString = `Date range from ${valueRange[0]} to ${valueRange[1]}`;

	const setDT = (valueRangeString) => {
		setDates([...dates, !range ? value.toDateString() : valueRangeString]);
		setTimes([...times, time]);
	};

	useEffect(() => {
		if (dates.length > 10) {
			setDateLimit(true);
		}
	}, [dates]);

	return (
		<div className='text-xs rounded-[8px] border border-[#66a3ff] p-1'>
			<div className='mt-2 text-center flex justify-center'>
				<div
					className={`bg-red-600 w-fit py-2 px-6 text-white transition-all duration-150 ${
						dateLimit ? "opacity-100" : "opacity-0"
					}`}>
					No more dates available.
				</div>
			</div>
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
						className={`rounded-[8px] ${
							dateLimit ? "bg-blue-300" : "bg-blue-600"
						} p-2 text-white`}>
						Add date and time
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleCalendar;
