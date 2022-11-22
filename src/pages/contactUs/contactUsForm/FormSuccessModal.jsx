import classes from "./FormSuccessModal.module.css";
import successImg from "../../../assets/img/success-icon.svg";
import Button from "../../../components/Button";
import { IoIosClose } from "react-icons/io";

const FormSuccessModal = (props) => {
  return (
    <div className={classes["success-modal"]} onClick={props.onCloseModal}>
      <div className={classes["notification-box"]}>
        <IoIosClose className={classes["close-icon"]} />
        <div className={classes["success-img"]}>
          <img src={successImg} alt={"success-icon"} />
        </div>
        <p className={classes["first-p"]}>
          Your message has been sent successfully
        </p>
        <p>A mail has been sent to you in response to your message</p>
        <Button className={classes["check-mail-btn"]}>check mail</Button>
      </div>
    </div>
  );
};

export default FormSuccessModal;
