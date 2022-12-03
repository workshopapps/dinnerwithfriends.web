import userServices from "../services/userServices";
/* global gapi */

export function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly", plugin_name: 'dinnerwithfriends'})
      .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}

export function loadClient() {
  gapi.client.setApiKey("AIzaSyA7G2ANAJI6rm_DpTW84lsKUJT-c8bmirI");
  return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/calendar/v3/rest")
      .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
export function execute() {
  return gapi.client.calendar.calendarList.list({})
      .then(function(response) {
              // Handle the results here (response.result has the parsed body).
              console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "102076896830-4il8ncmrd6qfoippk2ut4uujb8cci54v.apps.googleusercontent.com"});
});



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
