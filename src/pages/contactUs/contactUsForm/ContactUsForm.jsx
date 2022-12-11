import Button from "../../../components/Button";
import { useState } from "react";
import FormSuccessModal from "./FormSuccessModal";
import useInput from "../../../hooks/user-input";
import InputComponent from "../../../components/InputComponent/InputComponent";

const ContactUsForm = () => {
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false);

  // close the form submission modal
  const closeModalHandler = (e) => {
    if (e.target.dataset.close === "close") {
      setFormSubmittedSuccessfully(false);
    }
  };

  const {
    value: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    valueHasError: enteredFirstNameIsInValid,
    valueInputChangeHandler: firstNameInputChangeHandler,
    valueInputBlurHandler: firstNameInputBlurHandler,
    resetValue: firstNameInputReset,
  } = useInput((val) => val.trim() !== "");
  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    valueHasError: enteredLastNameIsInValid,
    valueInputChangeHandler: lastNameInputChangeHandler,
    valueInputBlurHandler: lastNameInputBlurHandler,
    resetValue: lastNameInputReset,
  } = useInput((val) => val.trim() !== "");
  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    valueHasError: enteredEmailIsInValid,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
    resetValue: emailInputReset,
  } = useInput((val) => val.includes("@"));

  const {
    value: enteredMessage,
    valueIsValid: enteredMessageIsValid,
    valueHasError: enteredMessageIsInValid,
    valueInputChangeHandler: messageInputChangeHandler,
    valueInputBlurHandler: messageInputBlurHandler,
    resetValue: messageInputReset,
  } = useInput((val) => val.trim().length > 5);

  const contactUsFormSubmitHandler = (e) => {
    e.preventDefault();

    // checking if form inputs are filled before submission
    if (
      enteredFirstName.trim() === "" ||
      enteredLastName.trim() === "" ||
      enteredEmail.trim() === "" ||
      enteredMessage.trim() === ""
    ) {
      return;
    }

    // sends form data successfully
    if (
      enteredFirstNameIsValid &&
      enteredLastNameIsValid &&
      enteredEmailIsValid &&
      enteredMessageIsValid
    ) {
      // use form data
      // const data = {
      //   firstName: enteredFirstName,
      //   lastName: enteredLastName,
      //   email: enteredEmail,
      //   message: enteredMessage,
      // };
      // display message
      setFormSubmittedSuccessfully(true);
    }

    // reset form
    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();
    messageInputReset();
  };

  return (
    <>
      <form onSubmit={contactUsFormSubmitHandler} className="w-full md:w-1/2">
        <InputComponent
          type={"text"}
          id={"first_name"}
          label={"First name"}
          placeholder={"Eunice"}
          value={enteredFirstName}
          onChange={firstNameInputChangeHandler}
          onBlur={firstNameInputBlurHandler}
          inputInvalid={enteredFirstNameIsInValid}
          errorText={"Enter a name"}
        />
        <InputComponent
          type={"text"}
          id={"last_name"}
          label={"Last name"}
          placeholder={"David"}
          value={enteredLastName}
          onChange={lastNameInputChangeHandler}
          onBlur={lastNameInputBlurHandler}
          inputInvalid={enteredLastNameIsInValid}
          errorText={"Enter a name"}
        />
        <InputComponent
          type={"email"}
          id={"email"}
          label={"Email"}
          placeholder={"eunicedavid@gmail.com"}
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          inputInvalid={enteredEmailIsInValid}
          errorText={"Email is invalid"}
        />
        <div>
          <label
            htmlFor="message"
            className="mb-2 p-0 text-lg font-bold text-stone-900"
          >
            Type your message
          </label>
          <textarea
            rows={"10"}
            id="message"
            placeholder="Hello..."
            value={enteredMessage}
            onChange={messageInputChangeHandler}
            onBlur={messageInputBlurHandler}
            maxLength={100}
            className={` w-full border bg-transparent rounded-lg p-3 outline-none mt-2.5 placeholder:text-slate-400 placeholder:text-base placeholder:font-medium ${
              enteredMessageIsInValid
                ? "border-red-500 focus:border-red-500 text-red-500"
                : "border-gray-400 focus:border-blue-500"
            }`}
          />
          {enteredMessageIsInValid && (
            <small className="text-red-500 text-xs">Enter a message</small>
          )}
          <p className="text-base font-bold text-gray-800">
            Maximum of 100 words
          </p>
        </div>
        <Button
          type="submit"
          className="w-full text-xl font-bold py-2.5 mt-24 mb-9 text-white bg-[#0056D6] rounded-lg"
        >
          Send
        </Button>
      </form>
      {formSubmittedSuccessfully && (
        <FormSuccessModal
          onCloseModal={closeModalHandler}
          btnCloseModal={setFormSubmittedSuccessfully}
        />
      )}
    </>
  );
};

export default ContactUsForm;
