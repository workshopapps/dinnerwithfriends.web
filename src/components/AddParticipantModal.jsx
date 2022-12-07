import React, { useState, useRef } from "react";
import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { CatchUpEventContextUse } from "../context/CatchUpEventContext";
import userServices from "../services/userServices";

function AddParticipantModal({ eventId }) {
  const [email, setEmail] = useState("");
  const [participants, setParticipants] = useState([]);

  const [error, setError] = useState();
  const emailRef = useRef();
  const validate = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const errors = {};
    if (!regex.test(values)) {
      errors.email = "This is not a valid email format!";
      emailRef.current.focus();
    }
    return errors;
  };
  const addParticipant = (e) => {
    e.preventDefault();
    setError(validate(email));
    setParticipants([...participants, email]);
  };
  console.log(participants);

  const saveValidEmail = async () => {
    const invitees = {
      email_list: participants,
      event_id: eventId,
    };
    const result = await userServices.addParticipant(invitees);
    console.log(result);
    setParticipants([]);
  };

  const deleteParticipant = (index) => {
    const deletefromList = participants;
    deletefromList.splice(index, 1);
    setParticipants([...deletefromList]);
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
              <div className="flex justify-end my-5">
                <div>
                  <span
                    onClick={() => setShowModal(false)}
                    className="bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]"
                  >
                    <IoMdClose />
                  </span>
                </div>
              </div>
              <form onSubmit={addParticipant}>
                <div className="w-full my-5 bg-[#E7F0FF] flex justify-between items-center gap-x-4 py-2 md:px-3 px-5">
                  <input
                    className="focus:outline-none h-full bg-transparent py-3 md:px-4 px-2 w-11/12 text-black md:text-base text-sm md:placeholder:text-base placeholder:text-sm"
                    type="email"
                    placeholder="Add a participant email"
                    value={email}
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small>{error.email}</small>
                  <button
                    type="submit"
                    className="bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg"
                  >
                    Add
                  </button>
                </div>
              </form>
              <div className="my-12">
                {participants.map((participant, index) => (
                  <div className="flex justify-between mb-4" key={index}>
                    <div className="flex text-[#59595B] items-center">
                      <AiOutlineUser className="text-xl" />
                      <p className="font-normal md:text-base text-sm md:ml-3 ml-2">
                        {participant}
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
              <div>
                {participants[0] && (
                  <button
                    className=" w-full bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg"
                    onClick={saveValidEmail}
                  >
                    Done
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AddParticipantModal;

// import React from "react";
// import { AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
// import { IoMdClose } from "react-icons/io";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { CatchUpEventContextUse } from "../context/CatchUpEventContext";
// import userServices from "../services/userServices";

// function AddParticipantModal() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   // const [email, setEmail] = useState("");
//   const [email, setEmail] = useState([]);
//   // const addNewParticipant = (e) => {
//   //   const { value, name } = e.target;
//   //   setEmail({
//   //     ...email,
//   //     [name]: value,
//   //   });
//   // };
//   const [participant, setParticipant] = useState([]);
//   const addParticipant = (e, participant) => {
//     e.preventDefault();
//     setEmail([...email]);
//     // const newParticipant = [...participant, { email, value: "Yes" }];
//     setParticipant(...[participant], participant);
//   };
//   const deleteParticipant = (index) => {
//     const deletefromList = participant;
//     deletefromList.splice(index, 1);
//     setParticipant([...deletefromList]);
//   };

//   // const onSubmit = async (e, email) => {
//   //   e.preventDefault();
//   //   if (!email) return;
//   //   if (email) {
//   //     addParticipant(email);
//   //   }

//   // };

//   const saveValidEmail = async (data) => {
//     const result = await userServices.addParticipant(data);
//     if (result.status === "success") {
//       console.log(result);
//     }
//   };

//   const { showModal, setShowModal } = CatchUpEventContextUse();

//   return (
//     <div>
//       {showModal ? (
//         <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//           <div
//             className="fixed inset-0 w-full h-full bg-black opacity-60"
//             onClick={() => setShowModal(false)}
//           ></div>
//           <div className="relative my-6 mx-auto w-full">
//             <div className="w-[90%] lg:w-[40%] max-w-[500px] px-6 mx-auto border-0 rounded-lg shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
//               <div className="flex justify-end my-5">
//                 <div>
//                   <span
//                     onClick={() => setShowModal(false)}
//                     className="bg-[#FAFAFA] cursor-pointer text-[#717172] flex justify-center items-center rounded-full h-[35px] w-[35px]"
//                   >
//                     <IoMdClose />
//                   </span>
//                 </div>
//               </div>
//               <form onSubmit={handleSubmit(saveValidEmail)}>
//                 <p className="text-red-500 text-sm ">{errors.email?.message}</p>
//                 <div className="w-full my-5 bg-[#E7F0FF] flex justify-between items-center gap-x-4 py-2 md:px-3 px-1">
//                   <input
//                     style={{
//                       border: errors.email ? "1px solid red" : "none",
//                     }}
//                     className="focus:outline-none h-full bg-transparent py-2.5 md:px-4 px-5 w-11/12 text-gray-900 md:text-base text-sm md:placeholder:text-base placeholder:text-sm"
//                     type="email"
//                     placeholder="Add a participant email"
//                     value={email.email}
//                     onChange={addParticipant}
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^[^\s@]+@[^\s@]+$/,
//                         message: "This is not a valid email",
//                       },
//                     })}
//                   />
//                   <button
//                     className="bg-[#0056D6] md:px-12 md:py-4 py-2.5 px-5 text-white rounded-lg"
//                     onClick={addParticipant}
//                   >
//                     Done
//                   </button>
//                 </div>
//               </form>
//               <div className="my-12">
//                 {participant.map((invite, index) => (
//                   <div className="flex justify-between mb-4" key={index}>
//                     <div className="flex text-[#59595B] items-center">
//                       <AiOutlineUser className="text-xl" />
//                       <p className="font-normal md:text-base text-sm md:ml-3 ml-2">
//                         {invite.email}
//                       </p>
//                     </div>
//                     <div className="flex items-center md:mr-8">
//                       <button
//                         onClick={() => deleteParticipant(index)}
//                         className="cursor"
//                       >
//                         <AiOutlineCloseCircle />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default AddParticipantModal;
