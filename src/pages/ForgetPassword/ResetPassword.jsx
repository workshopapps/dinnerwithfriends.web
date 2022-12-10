import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import userServices from "../../services/userServices";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForgetPasswordImage from "../../assets/img/ForgetPasswordImage.png";
import BackToSignIn from "../../assets/img/BackToSignIn.png";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ResetPassword = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [validCredentials, setValidCredentials] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const togglePassword = () => {
		setPasswordShown(!passwordShown);
	};

  const onSubmit = async (data) => {
    setIsSubmit(true);
    const reset = await userServices.resetPassword(data);

    if (reset.status === "fail") {
      setIsSubmit(false);
      setInvalidCredentials(true);
    }

    if (reset.status === "success") {
      setValidCredentials(true);
      setTimeout(() => {
        navigate('/sign_in')
        }, 3000)
    }
  };

  const errorMsg = () => {
    let element;
    if (validCredentials) {
      element = (
        <p className="mt-4 text-xl text-green-600 text-center">
          Password Reset Successful!
        </p>
      );
    } else if (invalidCredentials) {
      element = (
        <p className="mt-4 text-xl text-red-600 text-center">
          Invalid code or incorrect email address
        </p>
      );
    }
    return element;
  };
  /* eslint-disable-next-line */
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* eslint-disable-next-line */
  const secondPattern = /^[a-z][a-z0-9]+$/ig;
  return (
    <>
      <Navbar />
      <div className="container mx-auto  mt-20 px-10 mb-20">
        <div className="md:flex items-center justify-center gap-20">
          <div className="grid items-center justify-center">
            <div className="md:hidden mb-5">
              <Link to="/forgot_password">
                <img src={BackToSignIn} alt="arrow" />
              </Link>
            </div>
            <h1 className="text-3xl font-bold">Reset Password?</h1>
            <p className="w-60 md:w-96 mt-3 text-base lg:text-lg">
              Please enter the code sent to your email and your new password
            </p>
            {errorMsg()}
            <form className="mt-7" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  className="block font-normal text-gray-600"
                  HtmlFor="code"
                >
                  Code
                </label>
                <input
                  type="number"
                  id="code"
                  placeholder="Enter code"
                  name="code"
                  className="block w-60 md:w-96 p-3 border rounded-md mb-4"
                  {...register("token", { required: true})}
                />

                {errors.token && (
                  <p className="italic text-sm mt-2" style={{ color: "red" }}>
                    Please enter a valid code
                  </p>
                )}
              </div>

              <div>
                <label
                  className="block font-normal text-gray-600"
                  HtmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="block w-60 md:w-96 p-3 border rounded-md mb-4"
                  {...register("email",
                  {required: true, pattern: pattern })}
                />
                  {errors.email && <p className='italic text-sm mt-2' style={{color: 'red'}}>Please enter a valid email</p>}
              </div>

              <div className="relative">
                <label
                  className="block font-normal text-gray-600"
                  HtmlFor="password"
                >
                  New Password
                </label>
                <input
                  style={{
                    border: errors.password
                      ? "1px solid red"
                      : "1px solid #D0D5DD",
                  }}
                  className="block w-60 md:w-96 p-3 border rounded-md mb-4"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  placeholder="Please enter your unique password"
                  {...register("password", {
                    required: "Password cannot be empty",
                    minLength: {
                      value: 9,
                      message: "Password must be at least 9 characters",
                    },
                    maxLength: {
                      value: 30,
                      message: "Password must not be more than 30 characters",
                    },
                    pattern: {
                      value: secondPattern,
                      message:
                        "Password has to start with a letter, can contain numbers. No spaces and special characters allowed",
                    },
                  })}
                />
                	<span
								className={`absolute ${
									errors.password ? "bottom-11" : "bottom-3.5"
								} right-3 cursor-pointer`}
								onClick={togglePassword}>
								{passwordShown ? <FiEyeOff /> : <FiEye />}
							</span>
                {errors.password && (
                  <p
                    className="right-0 bottom-[-37px] italic text-sm mt-2"
                    style={{ color: "red" }}
                  >
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-60 md:w-96 text-white bg-[#0056D6] hover:bg-[#0056D6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-[#0056D6] dark:focus:ring-blue-800"
                >
                  {isSubmit ? "Loading..." : "Submit"}
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
            </form>
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

export default ResetPassword;
