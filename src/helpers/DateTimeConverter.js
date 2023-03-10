const TIMEOFFSET = '+01:00';
const dateTimeForCalender = (final_event_date, time) => {

    const splitDate = final_event_date.split("/");
    // const splitTime = time.split(":");
    let newDateTime = `${splitDate[2]}-${splitDate[1]?.length === 1 ? `0${splitDate[1]}` : splitDate[1]}-${splitDate[0]?.length === 1 ? `0${splitDate[0]}` : splitDate[0]}T00:00:00.000${TIMEOFFSET}`;
    console.log(newDateTime)
    let event = new Date(Date.parse(newDateTime));
    console.log(event)
     return event
};

export default dateTimeForCalender
