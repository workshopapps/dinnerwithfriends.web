import { useContext, createContext, useState } from "react";
import userServices from "../services/userServices";

const CatchUpEventContext = createContext();

export const CatchUpEventContextProvider = ({ children }) => {
	const events = userServices.getAllEvents()
	const [startDate, setStartDate] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [showClosedModal, setShowClosedModal] = useState(true);
	const [endDate, setEndDate] = useState("");
	const [preferredDate, setPreferredDate] = useState("");
	const [formValues, setFormValues] = useState({
		eventInvite: "",
		description: "",
		location: "",
		eventType: "",
		noOfParticipants: "",
		startDate: "",
		endDate: "",
		preferredDate: "",
	});

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
		events
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
