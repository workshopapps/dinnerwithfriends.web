import { useContext, createContext, useState } from "react";

const CatchUpEventContext = createContext();

export const CatchUpEventContextProvider = ({ children }) => {
	const [startDate, setStartDate] = useState("");
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
		showClosedModal,
		setShowClosedModal,
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
