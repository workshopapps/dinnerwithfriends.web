import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from 'react-icons/fi'
import signInImage from "../../assets/img/Rectangle 254.png";
import userServices from "../../services/userServices";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (data) => {
    setIsSubmit(true);
    const result = await userServices.login(data);

    if (result.status === "fail") {
      setIsSubmit(false);
      setInvalidCredentials(true);
    }

    if (result.status === "success") {
      setIsloggedIn(true);
      localStorage.setItem("jwt-token", result.accessToken);
      setTimeout(() => {
        navigate("/dashboard/upcoming_events");
      }, 1000);
    }
  };

  const errorMsg = () => {
    let element;
    if (isLoggedIn) {
      element = (
        <p className="mt-4 text-xl text-green-600 text-center">
          Login Successful!
        </p>
      );
    } else if (invalidCredentials) {
      element = (
        <p className="mt-4 text-xl text-red-600 text-center">
          Incorrect Email or Password
        </p>
      );
    }
    return element;
  };

  return (
    <div>
      <section className=" min-h-screen flex items-center justify-center mb-4">
        <div className="form-container flex justify-between w-full items-start">
          <div className="form-wrapper h-screen w-1/2 px-8 mt-6">
            <div className="flex justify-between items-center gap-8">
              <div>
                <Link to="/">
                  <span className="font-bold text-3xl lg:text-5xl text-[#0056D6]">
                    Catch
                  </span>
                  <span className="font-bold text-3xl lg:text-5xl ml-1">
                    Up
                  </span>
                </Link>
              </div>
              <div className="px-1 rounded-[20px] w-29 tablet:w-35 tablet:h-10 h-[34px]  bg-blue-100 flex justify-around items-center">
                <select
                  className="language-select bg-blue-100 w-full font-semibold focus:outline-none text-xs tablet:text-sm"
                  name="language"
                  id="language"
                >
                  <option value="uk">English (UK)</option>
                  <option value="us">English (US)</option>
                </select>
              </div>
            </div>
            <div className="px-2 lg:px-14 mt-10 lg:mt-14">
              <h3 className="font-medium text-xl lg:text-4xl font-bold text-gray-600 ">
                Welcome!
              </h3>
              <p className="mt-2 text-[#424245] text-base tablet:text-xl mb-7">
                Sign in here! Please enter your details
              </p>
              {errorMsg()}
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className=" flex flex-col gap-2 text-[#4B4B4C]"
              >
                <label className="pb-0">Email</label>
                <input
                  className="p-2 rounded-xl border-[#D0D5DD] border-[1px] focus:outline-none"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+$/,
                      message: "This is not a valid email",
                    },
                  })}
                />
                
                <p className="text-red-500 text-sm ">{errors.email?.message}</p>
                  <label className="pb-0">Password</label>
                <div className="relative flex flex-col">
                  <input
                    className="p-2 rounded-xl border"
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 9,
                        message: "Password must be at least 9 characters",
                      },
                      maxLength: {
                        value: 30,
                        message: "Password cannot exceed more than 30 characters",
                      },
                    })}
                  />
                  <span
                    className='absolute bottom-3 right-3 cursor-pointer'
                    onClick={togglePassword}>
                      {passwordShown ?  <FiEye /> : <FiEyeOff />}
                  </span>
                </div>
                  <p className="text-red-500 text-sm">
                    {errors.password?.message}
                  </p>
                <div className="flex justify-between items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input mt-0"
                      id="anime"
                      name="form-check-input"
                    />
                    <label
                      className="form-check-label text-xs w-full inline ml-2 lg:text-base"
                      htmlFor="form-check-input"
                    >
                      Remember for 30days
                    </label>
                  </div>
                  <div className="text-[#0056D6] text-xs lg:text-base">
                    <Link to="/forgot_password">Forgot password?</Link>
                  </div>
                </div>

                <button
                  type="submit"
                  className=" transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-white bg-[#0056D6] w-full h-11 rounded-lg"
                >
                  {isSubmit ? "Loading..." : "Sign In"}
                </button>
              </form>
              <div className="mt-6 items-center text-[#0056D6]">
                <p className="text-center text-sm">Or</p>
              </div>
              <a href=" ">
                <button className="bg-[white] border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-[#344054] font-medium">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="25px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Sign In with Google
                </button>
              </a>
              <div className="text-center text-[#0056D6] text-base mt-4">
                <Link to="/sign_up">
                  <span>Dont have an account yet?</span>
                  <span className="ml-2">Sign Up for free</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="form-image w-1/2">
            <img className="" src={signInImage} alt=" " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
