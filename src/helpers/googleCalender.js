import userServices from "../services/userServices";

export const googleCalender = async() => {
    const events = await userServices.getAllEvents()
    const filteredEvents = events.filter((event) => event.published === false);
    const userEvents = filteredEvents.map(
        ({ event_title, location, event_description, final_event_date, participant_number }) => (
            {
                "event": {
                "summary": event_title,
                "location": location,
                "description": event_description,
                "participant_number": participant_number,
                "start": {
                    "dateTime": final_event_date,
                    },
                "end": {
                    "dateTime": final_event_date,
                    }
                },
                "calendarId": "primary"
            }
        )
      );
    //   console.log(...userEvents)
      return userEvents
}

export const addToCalender = async () => {
  const response = await userServices.addToGoogleCalender(...googleCalender())
  return response
}
