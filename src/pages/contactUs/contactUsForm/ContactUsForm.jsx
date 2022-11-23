import Button from "../../../components/Button";
import classes from "./ContactUsForm.module.css";
import { useState } from "react";
import FormSuccessModal from "./FormSuccessModal";
import useInput from "../../../hooks/user-input";
import InputComponent from "../../../components/InputComponent/InputComponent";

const ContactUsForm = () => {
  const [formSubmittedSuccessfully, setFormSubmittedSuccessfully] =
    useState(false);

  // close the form submission modal
  const closeModalHandler = () => {
    setFormSubmittedSuccessfully(false);
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
      <form onSubmit={contactUsFormSubmitHandler} className={classes.form}>
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
        <div
          className={`${classes["text-area-container"]} ${
            enteredMessageIsInValid
              ? classes["invalid-input"]
              : classes["valid-input"]
          }`}
        >
          <label htmlFor="message">Type your message</label>
          <textarea
            rows={"10"}
            id="message"
            placeholder="Hello..."
            value={enteredMessage}
            onChange={messageInputChangeHandler}
            onBlur={messageInputBlurHandler}
            maxLength={100}
          />
          {enteredMessageIsInValid && <small>Enter a message</small>}
          <p>Maximum of 100 words</p>
        </div>
        <Button className={classes["contact-submit-btn"]}>Send</Button>
      </form>
      {formSubmittedSuccessfully && (
        <FormSuccessModal onCloseModal={closeModalHandler} />
      )}
    </>
  );
};

export default ContactUsForm;
