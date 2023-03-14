import successImg from "../../assets/icons/success-icon.svg";
import Button from "../Button";
import { IoIosClose } from "react-icons/io";

export const ContactFormSuccessModal = ({modal, setModal}) => {
  return (
    <div className={`${modal ?'fixed top-0 right-0 left-0 bottom-0 w-screen z-20  bg-black bg-opacity-50': 'hidden'}`}>
      <div className="bg-white mx-auto w-5/6 sm:w-2/3 px-2 flex flex-col justify-center items-center font-bold  text-center text-xl my-[40px]">
        <IoIosClose
          className="w-10 h-10 self-end cursor-pointer my-2"
          data-close="close"
          onClick={() => {
            setModal(false);
          }}
        />
        <div className="my-5">
          <img src={successImg} alt={"success-icon"} />
        </div>
        <p className="text-xl md:text-3xl mb-4">Your message has been sent successfully</p>
        <p className="text-[14px] md:text-[24px]">A mail will be sent to you in response to your message</p>
        <Button
          type="button"
          onClick={() => {
            setModal(false);
          }}
          data-close="close"
          className=" text-xl font-bold py-2.5 px-8 mt-5 md:mt-10 mb-8 text-white bg-[#0056D6] rounded-lg"
        >
          check mail
        </Button>
      </div>
    </div>
  );
};

