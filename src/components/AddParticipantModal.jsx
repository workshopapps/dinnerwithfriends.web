import React from "react";
import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import { BsPlus } from "react-icons/bs";

import { useState } from "react";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";

function AddParticipantModal() {
  const [email, setEmail] = useState("");
  const [participant, setParticipant] = useState([
    {
      email: "Damijoshua@gmail.com",
    },
    {
      email: "SarahM32492@gmail.com",
    },
    {
      email: "FaithBala2@gmail.com",
    },
  ]);
  const addParticipant = (email) => {
    const newParticipant = [...participant, { email, value: "Yes" }];
    setParticipant(newParticipant);
  };
  const deleteParticipant = (index) => {
    const deletefromList = participant;
    deletefromList.splice(index, 1);
    setParticipant([...deletefromList]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    addParticipant(email);
    setEmail("");
  };
  const { showModal, setShowModal } = CatchUpEventContextUse();

  return (
    <div>
      {showModal ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div
            className="fixed inset-0 w-full h-full bg-black opacity-60"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="relative my-6 mx-auto w-full">
            <div className="w-[90%] lg:w-[40%] max-w-[500px] px-6 mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
              <div className="flex justify-between my-5">
                <button className="bg-transparent flex items-center text-[#1070FF]">
                  <p className="mr-2 md:text-base text-sm">Add participant</p>
                  <BsPlus />
                </button>
                <div className=" ">
                  <span
                    onClick={() => setShowModal(false)}
                    className="bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]"
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>

              <div className="w-full my-5 bg-[#E7F0FF] flex justify-betweenn py-2 md:px-3 px-1">
                <input
                  type="email"
                  placeholder="Add a participant email"
                  className="outline-none border-none h-full bg-transparent py-3 md:px-4 px-2 w-11/12 text-[#7A6F6F] md:text-base text-sm md:placeholder:text-base placeholder:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-[#1070FF] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg"
                  onClick={handleSubmit}
                >
                  Done
                </button>
              </div>
              <div className="my-12">
                {participant.map((invite, index) => (
                  <div className="flex justify-between mb-4" key={index}>
                    <div className="flex text-[#59595B] items-center">
                      <AiOutlineUser className="text-xl" />
                      <p className="font-normal md:text-base text-sm md:ml-3 ml-2">
                        {invite.email}
                      </p>
                    </div>
                    <div className="flex items-center md:mr-8">
                      <button
                        onClick={() => deleteParticipant(index)}
                        className="cursor"
                      >
                        <AiOutlineCloseCircle />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AddParticipantModal;
