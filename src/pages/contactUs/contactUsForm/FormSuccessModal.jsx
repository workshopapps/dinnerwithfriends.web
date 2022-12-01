import successImg from "../../../assets/img/success-icon.svg";
import Button from "../../../components/Button";
import { IoIosClose } from "react-icons/io";

const FormSuccessModal = (props) => {
  return (
    <div
      className="fixed top-0 left-0 z-40  w-full h-screen bg-black bg-opacity-40 flex items-center justify-center"
      onClick={props.onCloseModal}
      data-close="close"
    >
      <div className="bg-white w-5/6 sm:w-2/3 px-2 flex flex-col items-center font-bold  text-center text-xl pb-12">
        <IoIosClose
          className="w-10 h-10 self-end cursor-pointer my-2"
          data-close="close"
          onClick={props.onCloseModal}
        />
        <div className="my-8">
          <img src={successImg} alt={"success-icon"} />
        </div>
        <p className="text-3xl mb-4">Your message has been sent successfully</p>
        <p>A mail has been sent to you in response to your message</p>
        <Button
          type="button"
          onClick={() => {
            props.btnCloseModal(false);
          }}
          data-close="close"
          className=" text-xl font-bold py-2.5 px-8 mt-16 mb-8 text-white bg-[#0056D6] rounded-lg"
        >
          check mail
        </Button>
      </div>
    </div>
  );
};

export default FormSuccessModal;
