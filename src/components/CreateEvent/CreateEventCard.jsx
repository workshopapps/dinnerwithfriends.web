import React from "react";

const CreateEventCard = ({ item }) => {
	return (
		<>
			<div>{item.eventName}</div>
			<div>{item.eventDescription}</div>
			<div>{item.eventLocation}</div>
            <div>{item.eventPeriods.map((periods, ind) => (
                <span key={ind}>{periods.title}</span>
            ))}</div>
		</>
	);
};

export default CreateEventCard;
