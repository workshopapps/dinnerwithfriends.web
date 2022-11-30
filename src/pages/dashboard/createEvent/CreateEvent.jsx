import React from "react";
import InternalNavbar from "../../../components/InternalNavbar";
import CreateEventForm from "../../../components/CreateEvent/CreateEventForm";

const CreateEvent = () => {
  return (
    <div className="">
      <InternalNavbar />
      <div className="px-4 md:w-[75%] lg:w-[50%] mx-auto">
        <CreateEventForm />
      </div>
    </div>
  );
};

export default CreateEvent;
