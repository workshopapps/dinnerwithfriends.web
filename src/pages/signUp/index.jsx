import React from "react";
import image from "./signup_image.svg";
import catchup from "./catchup_logo.svg";
import google from "./google.svg";
import nigeria from "./nigeria.svg";
import chevron from "./chevron.svg";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  !errors.email ? console.log(" no email error") : console.log(" email error");
  const onSubmit = (data) => {
    console.log(data);
    !errors.email && navigate("/create_event");
  };
  /* eslint-disable-next-line */
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className="w-full mx-auto tablet:flex tablet:justify-center">
      <div className=" w-full h-full bg-white tablet:w-6/12 tablet:p-3.5 mx-auto ">
        <header className=" w-full flex justify-between items-center px-4 pt-4 mt-3.5 tablet:mt-0">
          <Link to="/">
            <Logo />
          </Link>
          <div className="px-1 rounded-[20px] w-24 tablet:w-32 tablet:h-10 h-[32px]  bg-blue-100 flex justify-around items-center">
            <img className="w-5" src={nigeria} alt="nigerian flag" />
            <strong className="text-xs tablet:text-sm">English</strong>
            <img className="w-[12px]" src={chevron} alt="dropdown " />
          </div>
        </header>
        <div className="mt-10 tablet:mt-14 px-4 w-full max-w-md mx-auto">
          <h2 className="font-medium text-xl text-[#717172] tablet:text-4xl">
            Welcome!
          </h2>
          <p className="mt-2 text-[#424245] text-base tablet:text-xl">
            Sign up here! Please enter your details
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" mt-7 text-[#4B4B4C] font-normal [&>input]:mt-2 [&>input]:w-full [&>input]:mb-3.5"
          >
            <div className="relative w-full mb-4 ">
              <label className="pb-0" htmlFor="email">
                Email
              </label>

              <input
                style={{
                  border: errors.email ? "1px solid red" : "1px solid #D0D5DD",
                }}
                className={`focus:outline-none focus:${
                  !errors.email
                    ? "shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                    : "shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                }  mt-2 w-full h-11 p-3.5 rounded-lg`}
                type="text"
                name="email"
                placeholder="Enter your email"
                {...register("email", { required: true, pattern: pattern })}
              />
              {errors.email && (
                <p
                  className="right-0 bottom-[-37px] italic absolute text-sm mb-4"
                  style={{ color: "red" }}
                >
                  Please enter a valid email
                </p>
              )}
            </div>

            <div className="relative w-full mb-4 ">
              <label className="pb-0" htmlFor="password">
                Passsword
              </label>

              <input
                style={{
                  border: errors.password
                    ? "1px solid red"
                    : "1px solid #D0D5DD",
                }}
                className={`focus:outline-none focus:${
                  !errors.password
                    ? "shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]"
                    : "shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]"
                } mt-2 w-full h-11 p-3.5 rounded-lg`}
                type="password"
                name="password"
                placeholder="Please enter your unique password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p
                  className="right-0 bottom-[-37px] italic absolute text-sm mb-4"
                  style={{ color: "red" }}
                >
                  Password must not be empty
                </p>
              )}
            </div>

            <button
              className=" transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-white bg-[#0056D6] w-full h-11 rounded-lg"
              type="submit"
            >
              Create a free account
            </button>
          </form>

          <p className="my-2.5 text-center text-[#0056D6]">Or</p>

          <button className="flex justify-center items-center font-medium text-[#344054] w-full  border border-[#D0D5DD] h-11 p-2 rounded-lg">
            <img className="mr-2 w-6" src={google} alt="google logo" />
            Sign Up with Google
          </button>

          <p className=" my-8 font-normal text-center text-[#0056D6]">
            Have an account already? Sign in for free
          </p>
        </div>
      </div>
      <div
        className="hidden tablet:block tablet:w-6/12 h-[670px] bg-cover bg-gray-100"
        style={{
          backgroundImage: `linear-gradient(115deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${image})`,
        }}
      ></div>
    </div>
  );
};

export default SignUp;
