import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
//import { RiWechatLine } from "react-icons/ri";
import { SlLocationPin } from "react-icons/sl";
import { FaRegEnvelope } from 'react-icons/fa'

const ContactUsDetails = () => {
  return (
    <div className="flex flex-col mt-12 md:mt-0  ">
      <div className="leading-10 flex items-start text-base font-bold text-primary-1100 mb-9">
        <FaRegEnvelope className="w-6 h-6 text-primary-1000 mr-6" />
        <div className="leading-6">
          <p className="text-[#424245] font-medium mb-1">Leave us a message</p>
          <p className='text-[#898989] font-light'>Our team is always here to help</p>
          <a
            href="http://hi@catchup.com"
            className="text-[#B1B1B1] block mt-1 not-italic font-light"
          >
            contact@catchup.rsvp
          </a>
        </div>
      </div>
      <div className="flex items-start text-base font-bold text-primary-1100 mb-9">
        <SlLocationPin className="w-6 h-6 text-primary-1000 mr-6" />
        <div>
          <p className="text-[#424245] font-medium mb-1">Office</p>
          <p className='text-[#898989] font-light'>Come say hello at our office</p>
          <address className="text-[#B1B1B1] block mt-1 not-italic font-light">
            Monday - Friday
            <br /> 9am - 4pm
            <br /> 42 Shalom Silver Tower 3rd floor
          </address>
        </div>
      </div>
      <div className="flex items-start text-base font-bold text-primary-1100 ">
        <FiPhoneCall className="w-6 h-6 text-primary-1000 mr-6" />
        <div>
          <p className="text-[#424245] font-medium mb-1">Phone</p>
          
          <a
            href="tel:+234 703 184 24946"
            className="text-[#B1B1B1] block mt-1 not-italic "
          >
            +234-703-184-24946
          </a>
          <div className="flex mt-6">
            <a href="http://www.facebook.com" className="block mr-9">
              <FaFacebook className="w-6 h-6 text-primary-1200" />
            </a>
            <a href="http://www.linkedIn.com" className="block mr-9">
              <FaLinkedin className="w-6 h-6 text-primary-1200" />
            </a>
            <a href="http://www.twitter.com" className="block">
              <AiFillTwitterCircle className="w-6 h-6 text-primary-1200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetails;
