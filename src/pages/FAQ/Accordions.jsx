import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Accordions = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform text-[#0056D6] border border-solid border-[#0056D6] p-1 rounded-full `}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="!font-semibold !text-sm lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          What is CatchUp?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[14px] lg:!text-sm">
          It is an invitation, gathering, hangout management tool. it enables
          you to easily send, manage, vote, and receive invitations seamlessly.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="!font-bold !text-xs lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          How do i create an invitation?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
        Please click on the "Create Event" button at the top of the screen. 
        Fill in all the required fields, and make sure to have at least one person invited to complete the process.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="!font-bold !text-xs lg:!text-xl !text-[#151517] !border-0 !border-[#fff] !text-left"
        >
          Can I change my mind about an invitation I received?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
        Yes, you have the option to cancel, or you can inform the host to remove you.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="!font-bold !text-xs lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          Who should use catchup?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
        Professionals from all walks of life that want to hang out with colleagues, friends, and family.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="!font-bold !text-xs lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          How do I get help?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
        You can reach out to us via email: <a className="underline text-[#1070FF]" href="mailto:contact@catchup.rsvp">contact@catchup.rsvp</a>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="!font-bold !text-xs lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          Can I add an event to my calendar?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
          Catch up would ask to get permission to your calender, If you allowed
          access, then events will be added to your calendar using the time zone
          of the location of the event
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="!font-bold !text-xs lg:!text-xl !text-[#151517] !border-0 !border-[#fff] !text-left"
        >
          Do I need to download the app to create or receive invite?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
        You need to be a registered user to create an event. 
        However, you can accept an invite whether you are registered or not.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="!font-bold !text-xs lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          Can I invite friends from my contact list?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[10px] lg:!text-sm">
        You cannot invite them with a click. However, you can send them an invite link.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default Accordions;
