import React from "react";
import CreateEventNavbar from "../../../components/CreateEvent/CreateEventNavbar";
import CreateEventForm from "../../../components/CreateEvent/CreateEventForm";

const CreateEvent = () => {
  return (
    <div className="pb-[100px]">
      <CreateEventNavbar />
       <CreateEventForm />
    </div>
  );
};

export default CreateEvent;
