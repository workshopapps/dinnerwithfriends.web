import React, { useEffect, useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";
import { CatchUpEventContextUse } from "../../context/CatchUpEventContext";
import { formLogic } from "../../data/createEventErrorLogic";
import Button from "../Button";
import SingleCalendar from "../SingleCalendar/SingleCalendar";
import dateTimeForCalender from "../../helpers/DateTimeConverter";
const CreateEventForm = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showCalendar2, setShowCalendar2] = useState(false);
  const [showCalendar3, setShowCalendar3] = useState(false);
  const { startDate, endDate, preferredDate, setFormValues, formValues } =
    CatchUpEventContextUse();

  const [minimumDate, setMinimumDate] = useState("");
  const [maximumDate, setMaximumDate] = useState("");

  useEffect(() => {
    const start = dateTimeForCalender(startDate, "00:00");
    const end = dateTimeForCalender(endDate, "00:00");
    setMinimumDate(start);
    setMaximumDate(end);
  }, [startDate, endDate]);

  console.log(minimumDate, maximumDate);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    event_title: "",
    event_description: "",
    location: "",
    event_type: "",
    participant_number: "",
    start_date: "",
    end_date: "",
    host_prefered_time: "",
  });

  const handleSubmit = () => {
    setErrors(formLogic(formValues));
    setFormValues({ ...formValues, preferredDate, endDate, startDate });
    console.log(formValues);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      navigate("/event_summary");
    }
  }, [errors, navigate]);

  return (
    <div className="w-full py-8">
      <h1 className="text-xl font-bold text-center">Create Catchup Event</h1>
      <div className="mt-6">
        <div className="flex flex-col mb-4">
          <label htmlFor="title" className="text-sm font-semibold">
            Event Invite
          </label>
          <input
            required
            id="title"
            type="text"
            value={formValues.eventInvite}
            onChange={(e) =>
              setFormValues({ ...formValues, eventInvite: e.target.value })
            }
            placeholder="Hangout With the Boys"
            className="p-3 bg-white border border-[#0000004D] text-[#151517] placeholder:text-[#B6B6B6] rounded-[4px] text-sm mt-3 outline-none"
          />
          <small className="text-red-600 text-[10px] mt-2">
            {errors?.eventInvite}
          </small>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="desc" className="text-sm font-semibold">
            Description
          </label>
          <textarea
            required
            id="desc"
            value={formValues.description}
            onChange={(e) =>
              setFormValues({ ...formValues, description: e.target.value })
            }
            placeholder="This Event should be a wonderful hangout. I will want everyone to be available for this event. Let me know when you will be free from the link I will send to you."
            className="p-3 bg-white border border-[#0000004D] text-[#151517] placeholder:text-[#B6B6B6]  rounded-[4px] text-sm mt-3 outline-none h-[120px]"
          />
          <small className="text-red-600 text-[10px] mt-2">
            {errors?.description}{" "}
          </small>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="location" className="text-sm font-semibold">
            Location
          </label>
          <input
            required
            value={formValues.location}
            onChange={(e) =>
              setFormValues({ ...formValues, location: e.target.value })
            }
            id="location"
            type="text"
            placeholder="Lagos, Nigeria"
            className="p-3 bg-white border border-[#0000004D] text-[#151517] placeholder:text-[#B6B6B6] rounded-[4px] text-sm mt-3 outline-none"
          />
          <small className="text-red-600 text-[10px] mt-2">
            {errors?.location}{" "}
          </small>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="eventType" className="text-sm font-semibold">
            Event Type
          </label>
          <input
            required
            value={formValues.eventType}
            onChange={(e) =>
              setFormValues({ ...formValues, eventType: e.target.value })
            }
            id="eventType"
            type="text"
            placeholder="Beach Hangout"
            className="p-3 bg-white border border-[#0000004D] text-[#151517] placeholder:text-[#B6B6B6] rounded-[4px] text-sm mt-3 outline-none"
          />
          <small className="text-red-600 text-[10px] mt-2">
            {errors?.eventType}{" "}
          </small>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="noOfParticipants" className="text-sm font-semibold">
            Number of Participants
          </label>
          <input
            required
            id="noOfParticipants"
            value={formValues.noOfParticipants}
            onChange={(e) =>
              setFormValues({ ...formValues, noOfParticipants: e.target.value })
            }
            type="number"
            placeholder="5"
            className="p-3 bg-white border border-[#0000004D] text-[#151517] placeholder:text-[#B6B6B6] rounded-[4px] text-sm mt-3 outline-none w-fit"
          />
          <small className="text-red-600 text-[10px] mt-2">
            {errors?.noOfParticipants}{" "}
          </small>
        </div>
        <div className="flex flex-col md:flex-row md:gap-[1.25rem]  w-full">
          <div className="flex flex-col mb-4 flex-[1] relative">
            <label htmlFor="startDate" className="text-sm font-semibold">
              Start Date
            </label>
            <div className="flex mt-3 items-center bg-white relative p-3 border border-[#0000004D] rounded-[4px] w-full">
              <input
                required
                id="startDate"
                type="text"
                disabled
                value={startDate}
                placeholder="17/11/2022"
                className="flex-[5] bg-transparent  text-[#151517] placeholder:text-[#B6B6B6]  text-sm outline-none"
              />
              <span
                onClick={() => setShowCalendar(!showCalendar)}
                className="relative flex-[.5] justify-center flex cursor-pointer"
              >
                <IoCalendarOutline />
              </span>
            </div>
            <small className="text-red-600 text-[10px] mt-2">
              {errors?.startDate}
            </small>

            <div
              className={`w-full transition-all duration-150 ${
                showCalendar
                  ? "flex absolute top-[75px] left-0 right-0 z-10"
                  : "hidden"
              }`}
            >
              <SingleCalendar
                id="startDate"
                setShowCalendar={setShowCalendar}
                showCalendar={showCalendar}
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 flex-[1] relative">
            <label htmlFor="endDate" className="text-sm font-semibold">
              End Date
            </label>
            <div className="flex mt-3 items-center bg-white relative p-3 border border-[#0000004D] rounded-[4px] w-full">
              <input
                required
                id="endDate"
                type="text"
                disabled
                value={endDate}
                placeholder="23/11/2022"
                className="flex-[5] bg-transparent  text-[#151517] placeholder:text-[#B6B6B6]  text-sm outline-none"
              />
              <span
                onClick={() => setShowCalendar2(!showCalendar2)}
                className="relative flex-[.5] justify-center flex cursor-pointer"
              >
                <IoCalendarOutline />
              </span>
            </div>
            <small className="text-red-600 text-[10px] mt-2">
              {errors?.endDate}
            </small>

            <div
              className={`w-full transition-all duration-150 ${
                showCalendar2
                  ? "flex absolute top-[75px] left-0 right-0 z-10"
                  : "hidden"
              }`}
            >
              <SingleCalendar
                id="endDate"
                setShowCalendar={setShowCalendar2}
                showCalendar={showCalendar2}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4 relative">
          <label htmlFor="preferredDate" className="text-sm font-semibold">
            Preferred Date & Time
          </label>
          <div className="flex mt-3 items-center bg-white relative p-3 border border-[#0000004D] rounded-[4px] md:w-[50%]">
            <input
              required
              id="preferredDate"
              type="text"
              disabled
              value={preferredDate}
              placeholder="17/11/2022 - 3:00"
              className="flex-[5] bg-transparent  text-[#151517] placeholder:text-[#B6B6B6]  text-sm outline-none"
            />
            <span
              onClick={() => setShowCalendar3(!showCalendar3)}
              className="relative flex-[.5] justify-center flex cursor-pointer"
            >
              <IoCalendarOutline />
            </span>
          </div>
          <small className="text-red-600 text-[10px] mt-2">
            {errors?.host_prefered_time}{" "}
          </small>

          <div
            className={`md:w-[50%] transition-all duration-150 ${
              showCalendar3
                ? "flex absolute top-[75px] left-0 right-0 z-10"
                : "hidden"
            }`}
          >
            <SingleCalendar
              id="preferredDate"
              addTime
              setShowCalendar={setShowCalendar3}
              showCalendar={showCalendar3}
              minDate={minimumDate}
              maxDate={maximumDate}
            />
          </div>
        </div>

        <div className="w-full flex justify-center mt-6">
          <Button
            children
            type="submit"
            onClick={handleSubmit}
            className="flex items-center text-xs font-medium px-6 py-2 bg-[#1070FF] w-fit text-white rounded-[4px]"
          >
            <span>Next</span>
            <span className="text-[8px] ml-2">
              <SlArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateEventForm;
