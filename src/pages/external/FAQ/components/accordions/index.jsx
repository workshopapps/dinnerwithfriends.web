import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export const Accordions = () => {
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
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          What is catchUp?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          It is an invitation, gathering, hangout management tool. it enables
          you to easily send, manage, vote, and receive invitations seamlessly.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          How do i create an invitation?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          Please click on the New (+) at the bottom of the screen to start a new
          invitation or request a vote on time or location, fill all required
          fileds, and make sure to have at least one person invited to complete
          the process.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff] !text-left"
        >
          Can I change my mind about an invitation I received?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          Yes, you can reselect another reply to your received invitations if
          the event did not start yet. Once the event starts, you cannot change
          your reply
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          Who should use catchUp?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          Anyone struggling with their social life, trying to figure out what
          works for them and their guest/friends. Now they can instantly find
          out when their friends are all free and make plans on the spot.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          How do I get help?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          We have a live chat, offering support as fast as possible. Otherwise,
          you can always email us at support@catchup.com, and will get back to
          you within 24 hours.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff]"
        >
          Can I add an event to my calendar?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          Catch up would ask to get permission to your calender, If you allowed
          access, then events will be added to your calendar using the time zone
          of the location of the even
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(7)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff] !text-left"
        >
          Do I need to download the app to create or receive invite?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          No, you don’t need to download to create an invite. With access to
          your mobile phone or desktop that has internet you can utilize all the
          fuctions and features of the app.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(8)}
          className="!font-bold !text-[1rem] lg:!text-xl !text-[#151517] !border-0 !border-[#fff] !text-left"
        >
          Can I invite friends from my contact list?
        </AccordionHeader>
        <AccordionBody className="!text-[#616161] !text-[0.75rem] lg:!text-sm">
          Catch up would ask to get permission from your contact list, if
          contact is allowed access, then you can add your contact to catch up.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};
