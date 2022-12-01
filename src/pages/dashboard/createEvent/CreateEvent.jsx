import React from "react";
import CreateEventNavbar from "../../../components/CreateEvent/CreateEventNavbar";
import CreateEventForm from "../../../components/CreateEvent/CreateEventForm";

const CreateEvent = () => {
  return (
    <div className="pb-[100px]">
      <CreateEventNavbar />
      <div className="px-4 md:w-[75%] lg:w-[50%] mx-auto">
        <CreateEventForm />
      </div>
    </div>
  );
};

export default CreateEvent;
