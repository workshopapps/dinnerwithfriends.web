/* eslint-disable no-useless-escape */
import React, { useState } from "react";
import userServices from '../../../../../services/userServices'
import { ContactFormSuccessModal } from "../../../../../components";

export const HowItWorksForm = () => {
const [isSubmit, setIsSubmit] = useState(false)
const [modal, setModal] = useState(false)
const [error, setError] = useState(null)
const [data, setData] = useState({
  name: '',
  email: '',
  text: '',
})

const emailValidation = () => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(regex.test(data.email) === false){
      setError("Email is not valid");
      return false;
  }
  return true;
}

const onChange = (e) => setData({...data, [e.target.name]: e.target.value})
const handleSubmit = async (e) => {
  e.preventDefault()
  if(emailValidation()) {
    setIsSubmit(true)
    const result = await userServices.contact(data)
    if(result.status === 'success') {
       setIsSubmit(false)
       setModal(true)
       setData({
        ...data,
        name: '',
        email: '',
        text: ''
       })
       setError(null)
    }
  }

}
    return (
      <>
      <div className="w-[87%] my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 max-w-screen-xl mx-auto">
        <div className="md:col-span-3">
          <h4 className="text-[#1070ff] text-[1.5rem] md:text-[3.75rem]">Still have questions?</h4>
          <p className="my-4 md:w-4/5">
            Send us any questions you may have about CatchUp and we will get
            back to you as soon as possible.
          </p>
        </div>
        <form action="" onSubmit={handleSubmit} className="md:col-span-2 w-full grid grid-cols-2 gap-x-5 gap-y-4">
          <input className="px-3 py-2 focus:outline-gray-800 border border-gray-300 col-span-2 rounded-md w-full" type="text" placeholder="Name" name="name" onChange={onChange} value={data.name} required />
          <div className="w-full col-span-2 ">
          <input className="px-3 py-2 focus:outline-gray-800 border border-gray-300 col-span-2 rounded-md w-full" type="email" placeholder="Email" name="email" onChange={onChange} value={data.email} required />
           <small className={`${error ? 'block text-red-500 text-[14px]' : 'hidden'}`}>{error}</small>
          </div>
          <textarea className="px-3 py-2 focus:outline-gray-800 col-span-2 border border-gray-300 rounded-md w-full" id="" cols="30" rows="10" name="text" onChange={onChange} value={data.text} placeholder="Enter a description..." required></textarea>
          <button type="submit" className="col-span-2 bg-[#1070ff] text-white px-4 py-2 rounded-md">{isSubmit ? 'Loading...' : 'Send message'}</button>
        </form>
      </div>
      {modal && <ContactFormSuccessModal modal={modal} setModal={setModal}/>}
      </>
    )
}
