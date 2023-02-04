import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { FaRegEnvelope } from 'react-icons/fa'

export const ContactUsDetails = () => {
  return (
    <div className="flex flex-col mt-12 md:mt-0  ">
      <div className="leading-10 flex items-start text-base font-bold text-primary-1100 mb-9">
        <FaRegEnvelope className="w-6 h-6 text-primary-1000 mr-6" />
        <div className="leading-6">
          <p className="text-[#424245] font-medium mb-1">Leave us a message</p>
          <p className='text-[#898989] font-light'>Our team is always here to help</p>
          <a
            href="mailto:contact@catchup.rsvp"
            className="text-[#B1B1B1] block mt-1 not-italic font-light underline"
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
          
        </div>
      </div>
    </div>
  );
};

