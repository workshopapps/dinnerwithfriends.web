export const formLogic = (values) => {
	let error = {};

	if (values.event_title?.length < 3 ) {
		error.event_title = "Event name must have minimum of 3 characters";
	}

	if (values.event_description?.length < 3 ) {
		error.event_description = "Event description must have minimum of 3 characters";
	}

  if (values.location?.length < 3) {
    error.location = "Please type in a correct location";
  }

  else if(!/^[A-Za-z][A-Za-z ]{2,30}$/.test(values.location)){
      error.location = "Location is invalid. Please remove any special characters."
  }

  if (!values.event_type) {
    error.event_type = "Please type in an event type";
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
