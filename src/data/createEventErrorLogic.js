export const formLogic = (values) => {
	let error = {};
	if (!values.eventInvite) {
		error.eventInvite = "Please type in an event invite";
	}
	if (!values.description) {
		error.description = "Please type in a description";
	}
	if (!values.location) {
		error.location = "Please type in a location";
	}
	if (!values.eventType) {
		error.eventType = "Please type in an eventType";
	}
	if (!values.noOfParticipants) {
		error.noOfParticipants = "Please type in a number for participants";
	}
	if (!values.startDate) {
		error.startDate = "Please select a startDate";
	}
	if (!values.endDate) {
		error.endDate = "Please select an endDate";
	}
	if (!values.preferredDate) {
		error.preferredDate = "Please select a preferredDate";
	}

	return error;
};
