import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiWechatLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";

const ContactUsDetails = () => {
  return (
    <div className="flex flex-col mt-12 md:mt-24  md:ml-auto">
      <div className="flex items-start text-base font-bold text-primary-1100 mb-9">
        <RiWechatLine className="w-6 h-6 text-primary-1000 mr-4" />
        <div>
          <p className="text-primary-1200 mb-1">Chat us up</p>
          <p>Our friendly team is here to help</p>
          <a
            href="http://hi@catchup.com"
            className="text-primary-1300 block mt-1 not-italic "
          >
            hi@catchup.com
          </a>
        </div>
      </div>
      <div className="flex items-start text-base font-bold text-primary-1100 mb-9">
        <SlLocationPin className="w-6 h-6 text-primary-1000 mr-4" />
        <div>
          <p className="text-primary-1200 mb-1">Office</p>
          <p>come say hello to our offline HQ</p>
          <address className="text-primary-1300 block mt-1 not-italic">
            42 mark cresent
            <br /> silver tower 3rd floor
          </address>
        </div>
      </div>
      <div className="flex items-start text-base font-bold text-primary-1100 ">
        <FiPhoneCall className="w-6 h-6 text-primary-1000 mr-4" />
        <div>
          <p className="text-primary-1200 mb-1">Phone</p>
          <p>Mon-Fri 9am - 4pm</p>
          <a
            href="tel:+838 8372 226"
            className="text-primary-1300 block mt-1 not-italic "
          >
            +838 8372 226
          </a>
          <div className="flex mt-9">
            <a href="http://www.facebook.com" className="block mr-9">
              <FaFacebook className="w-8 h-8 text-primary-1200" />
            </a>
            <a href="http://www.linkedIn.com" className="block mr-9">
              <FaLinkedin className="w-8 h-8 text-primary-1200" />
            </a>
            <a href="http://www.twitter.com" className="block">
              <AiFillTwitterCircle className="w-8 h-8 text-primary-1200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetails;
