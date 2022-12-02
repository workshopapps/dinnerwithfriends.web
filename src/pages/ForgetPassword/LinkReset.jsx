import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForgetPasswordImage from "../../assets/img/ForgetPasswordImage.png";
import BackToSignIn from "../../assets/img/BackToSignIn.png";
const ResetLink = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto  mt-20 px-10 mt-20">
        <div className="md:flex items-center justify-center gap-20">
          <div className="grid items-center justify-center">
            <div className="md:hidden mb-5">
              <Link to="/forgot_password">
                <img src={BackToSignIn} alt="arrow" />
              </Link>
            </div>
            <h1 className="text-3xl font-bold">Reset Link Sent</h1>
            <p className="w-60 md:w-96 mt-3 text-base xl:text-lg">
              A password reset code has been sent to your Email
            </p>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-60 md:w-96 text-white bg-[#0056D6] hover:bg-[#0056D6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#0056D6] dark:hover:bg-[#0056D6] dark:focus:ring-blue-800"
                >
                  <Link to="/reset_password">Click here to reset password</Link>
                </button>
              </div>

            <p className="w-60 md:w-96 mt-5 text-sm xl:text-base">
              Didn't receive the email yet?{" "}
              <Link
                to="/forgot_password"
                className="text-[#0056D6] font-semi-bold"
              >
                Click here to resend
              </Link>
            </p>
          </div>
          <div className="hidden lg:flex">
            <img src={ForgetPasswordImage} alt="beautiful girl" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetLink;
