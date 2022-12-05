export const formLogic = (values) => {
	let error = {};
	if (!values.event_title) {
		error.event_title = "Please type in an event invite";
	}

	if (!values.event_description) {
		error.event_description = "Please type in a description";
	}

	if (!values.location) {
		error.location = "Please type in a location";
	}else if(!/^[A-Za-z][A-Za-z ]{2,30}$/.test(values.location)){
        error.location = "Location is invalid. Please remove any special characters."
    }

	if (!values.event_type) {
		error.event_type = "Please type in an eventType";
	}

	if (!values.participant_number) {
		error.participant_number = "Please type in a number for participants";
	}

	if (!values.start_date) {
		error.start_date = "Please select a start date";
	}

	if (values.end_date === "") {
		error.end_date = "Please select an end date";
	}

	if (!values.host_prefered_time) {
		error.host_prefered_time = "Please select a preferred date";
	}
	
       if (!values.host_prefered_time) {
		error.host_prefered_time = "Please select a preferred date";
	}

	return error;
};
