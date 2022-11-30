import React, { useState }  from "react";
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import signInImage from "../../assets/img/Rectangle 254.png";
import nigeriaFlag from "../../assets/img/Group.png";
import userServices from "../../services/userServices";


const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false)
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSubmit(true)
    const result = await userServices.login(data);

    if(result.status === 'fail'){
      setIsSubmit(false)
      setInvalidCredentials(true)
    }

    if(result.status === 'success'){
       setIsloggedIn(true)
       localStorage.setItem("jwt-token", result.accessToken);
       setTimeout(() => {
        navigate('/dashboard/upcoming_events')
        }, 1000)
      }
  };

  const errorMsg = () => {
    let element;
    if (isLoggedIn) {
      element =  <p className='mt-4 text-xl text-green-600 text-center'>Login Successful!</p>
     } else if(invalidCredentials) {
      element = <p className='mt-4 text-xl text-red-600 text-center'>Incorrect Email or Password</p>
     }
     return element
  }

  return (
    <div>
      <section className=" min-h-screen flex items-center justify-center mb-4">
        <div className="form-container flex justify-between w-full items-start">
          <div className="form-wrapper h-screen w-1/2 px-8 mt-6">
            <div className="flex justify-between items-center gap-8">
              <div>
              <Link to='/'>
                <span className="font-bold text-3xl lg:text-5xl text-blue-600">Catch</span>
                <span className="font-bold text-3xl lg:text-5xl ml-1">Up</span>
              </Link>
              </div>
              <div className="relative">
                <label className="block mt-4">
                  <img
                    className="flag-image absolute top-[26px] left-[8px]"
                    src={nigeriaFlag}
                    alt=" "
                  />
                  <select className="language-select font-bold text-black text-center rounded-2xl mt-1 block w-[140px] px-6 py-2 bg-blue-100">
                    <option className="bg-blue-200">English</option>
                    <option className="bg-blue-200">French</option>
                    <option className="bg-blue-200">German</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="px-2 lg:px-14 mt-10 lg:mt-14">
              <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
                Sign In
              </h2>
              <h3 className="font-medium text-xl lg:text-4xl font-bold text-gray-600 ">
                Welcome!
              </h3>
              <p className="sm:text-base lg:text-xl text-gray-600 mb-8 ">
                Sign in here! Please enter your details
              </p>
              {errorMsg()}
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className=" flex flex-col gap-4"
              >
                <label className="pb-0">Email</label>
                <input
                  className="p-2 rounded-xl border"
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
                <input
                  className="p-2 rounded-xl border"
                  type="password"
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

                <button type="submit" className="bg-blue-700 hover:bg-blue-500 rounded-xl text-white py-2 hover:scale-105 duration-300">
                  {isSubmit ? 'Loading...' : 'Sign In'}
                </button>
              </form>
              <div className="mt-6 items-center text-blue-600">
                <p className="text-center text-sm">Or</p>
              </div>
              <a href=" ">
                <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-base hover:scale-105 duration-300">
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
                  Sign in with Google
                </button>
              </a>
              <div className="text-center text-blue-700 text-base mt-4">
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
