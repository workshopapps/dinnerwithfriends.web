import React, { useState } from "react";
import Button from "../../../../../components/Button";
import FormSuccessModal from "../formSuccessModal";
import InputComponent from "../../../../../components/InputComponent/InputComponent";
import userServices from '../../../../../services/userServices'

export const ContactUsForm = () => {
const [isSubmit, setIsSubmit] = useState(false)
const [modal, setModal] = useState(false)
const [data, setData] = useState({
  name: '',
  email: '',
  text: '',
})

const onChange = (e) => setData({...data, [e.target.name]: e.target.value})
const handleSubmit = async (e) => {
  setIsSubmit(true)
  e.preventDefault()
  const result = await userServices.contact(data)
  if(result.status === 'success') {
     setIsSubmit(false)
     setModal(true)
  }
}
  return (
    <>
      <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
        <InputComponent
          type='text'
          id='name'
          name="name"
          onChange={onChange}
          label='name'
          placeholder="Name"
          errorText="Enter a name"
        />
        <InputComponent
          type='email'
          id="email"
          onChange={onChange}
          name="email"
          label="Email"
          placeholder="example@mail.com"
          errorText="Email is invalid"
        />
        <div>
          <label
            htmlFor="message"
            className="mb-2 p-0 text-lg font-medium text-[#424245]"
          >
            Type your message
          </label>
          <textarea
            rows={"10"}
            id="message"
            name="text"
            onChange={onChange}
            placeholder="Hello..."
            maxLength={100}
            className={` w-full border bg-transparent rounded-lg p-3 outline-none mt-2.5 placeholder:text-slate-400 placeholder:text-base placeholder:font-medium
               border-gray-400 focus:border-blue-500
            `}
          />
          <p className="text-[#B1B1B1] font-bold text-gray-800">
            Maximum of 100 words
          </p>
        </div>
        <Button
          type="submit"
          className="w-full text-xl font-bold py-3.5 mt-[1.5rem] mb-9 text-white bg-[#1070FF] rounded-lg"
        >
          {isSubmit ? 'Loading...' : 'Send message'}
        </Button>
      </form>
      {modal && <FormSuccessModal modal={modal} setModal={setModal}/>}
    </>
  );
};

