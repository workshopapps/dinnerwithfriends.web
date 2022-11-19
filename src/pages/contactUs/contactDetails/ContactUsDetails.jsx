import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWechatLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import classes from "./ContactDetails.module.css";

const ContactUsDetails = () => {
  return (
    <div className={classes["details-container"]}>
      <div className={classes["detail-item"]}>
        <RiWechatLine className={classes.icon} />
        <div>
          <p className={classes.title}>Chat us up</p>
          <p>Our friendly team is here to help</p>
          <a href="http://hi@catchup.com">hi@catchup.com</a>
        </div>
      </div>
      <div className={classes["detail-item"]}>
        <SlLocationPin className={classes.icon} />
        <div>
          <p className={classes.title}>Office</p>
          <p>come say hello to our offline HQ</p>
          <address>
            42 mark cresent
            <br /> silver tower 3rd floor
          </address>
        </div>
      </div>
      <div className={classes["detail-item"]}>
        <FiPhoneCall className={classes.icon} />
        <div>
          <p className={classes.title}>Phone</p>
          <p>Mon-Fri 9am - 4pm</p>
          <a href="tel:+838 8372 226">+838 8372 226</a>
          <div className={classes["links"]}>
            <a href="http://www.facebook.com">
              <FaFacebook />
            </a>
            <a href="http://www.linkedIn.com">
              <FaLinkedin />
            </a>
            <a href="http://www.twitter.com">
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetails;
