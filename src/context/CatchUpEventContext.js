import { useContext, createContext, useState } from "react";

const CatchUpEventContext = createContext();

export const CatchUpEventContextProvider = ({ children }) => {
	const [events, setEvents] = useState([]);
	const [startDate, setStartDate] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [showClosedModal, setShowClosedModal] = useState(true);
	const [endDate, setEndDate] = useState("");
	const [preferredDate, setPreferredDate] = useState("");
	const [formValues, setFormValues] = useState({
		event_title: "",
		event_description: "",
		location: "",
		event_type: "",
		participant_number: "",
		start_date: "",
		end_date: "",
		host_prefered_time: "",
	});
	const [removedParticipants, setRemovedParticipants] = useState([])

	const values = {
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		preferredDate,
		setPreferredDate,
		formValues,
		setFormValues,
		showModal,
		setShowModal,
		showClosedModal,
		setShowClosedModal,
		setEvents,
		events,
		removedParticipants,
		setRemovedParticipants
	};

	return (
		<CatchUpEventContext.Provider value={values}>
			{children}
		</CatchUpEventContext.Provider>
	);
};

export const CatchUpEventContextUse = () => {
	return useContext(CatchUpEventContext);
};
