const TIMEOFFSET = '+01:00';
const dateTimeForCalender = (final_event_date, time) => {

    const splitDate = final_event_date.split("/");
    const splitTime = time.split(":");
    let newDateTime = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}T${splitTime[0]}:${splitTime[1]}:00.000${TIMEOFFSET}`;

    let event = new Date(Date.parse(newDateTime));
     return event
};

export default dateTimeForCalender
