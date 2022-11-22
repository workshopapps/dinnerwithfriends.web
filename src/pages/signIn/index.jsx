import React from "react";
import image from "../../assets/img/Sign-in-image.png";
import nigeria from "../../assets/img/Nigeria-flag.png";
import { emailValidator, passwordValidator } from "../../utils/LoginRegex";
import { useState } from "react";

const SignIn = () => {
  const [input, setInput] = useState({
    email: "Enter your email address",
    password: "**********",
  });
  const [errorMessage, seterrorMessage] = useState("");
  const [successMessage, setsuccessMessage] = useState("");
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email");

    if (!passwordValidator(input.password))
      return seterrorMessage(
        "Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters"
      );
    // setsuccessMessage('Successfully Log in');
    if (input.email !== "admin@gmail.com" || input.password !== "Password@1")
      return seterrorMessage("Invalid email and password");
    else if (
      input.email === "admin@gmail.com" &&
      input.password !== "Password@1"
    )
      return seterrorMessage("invalid password");
    else if (
      input.email !== "admin@gmail.com" &&
      input.password === "Password@1"
    )
      return seterrorMessage("invalid email");
    else if (
      input.email === "admin@gmail.com" &&
      input.password === "Password@1"
    )
      return setsuccessMessage("successfully logged in");
  };
  return (
    <div>
      <section className=" min-h-screen flex items-center justify-center ">
        <div className="form-container flex justify-between w-full items-start">
          <div className="form-wrapper h-screen w-1/2 px-8 mt-6">
            <div className="flex justify-between items-center gap-8">
              <div>
                <span className="font-bold text-2xl text-blue-600">Catch</span>
                <span className="font-bold text-2xl ml-1">Up</span>
              </div>
              <div className="relative">
                <label className="block mt-4">
                  <img
                    className="flag-image absolute top-[28px] left-[8px]"
                    src={nigeria}
                    alt=" "
                  />
                  <select className="form-select text-bold text-center rounded-2xl mt-1 block w-[140px] px-6 py-2 bg-blue-100">
                    <option className="bg-blue-200 text-bold text-black">
                      English
                    </option>
                    <option className="bg-blue-200 text-bold text-black">
                      French
                    </option>
                    <option className="bg-blue-200 text-bold text-black">
                      German
                    </option>
                  </select>
                </label>
              </div>
            </div>
            <div className="border p-8 rounded mt-24">
              <h2 className="text-4xl font-bold text-center text-blue-600 mb-16">
                Sign In
              </h2>
              <h3 className="text-2xl font-bold text-gray-600">Welcome!</h3>
              <p className="text-sm text-gray-600">
                Sign in here! Please enter your details
              </p>
              <a href=" ">
                <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
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
              <div className="mt-6 items-center text-blue-600">
                <p className="text-center text-sm">Or</p>
              </div>

              <form
                onSubmit={formSubmitter}
                action=""
                className=" flex flex-col gap-4"
              >
                {errorMessage.length > 0 && (
                  <div style={{ marginBottom: "10px", color: "red" }}>
                    {errorMessage}
                  </div>
                )}
                {successMessage.length > 0 && (
                  <div style={{ marginBottom: "10px", color: "green" }}>
                    {successMessage}
                  </div>
                )}
                <label className="pb-0">Email</label>
                <input
                  className="p-2 rounded-xl border"
                  type="text"
                  name="email"
                  id="email"
                  placeholder={input.email}
                  onChange={handleChange}
                />
                <label className="pb-0">Password</label>
                <input
                  className="p-2 rounded-xl border"
                  type="password"
                  name="password"
                  id="password"
                  placeholder={input.password}
                  onChange={handleChange}
                />
                <div className="flex justify-between items-center">
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input mt-0"
                      id="anime"
                      name="form-check-input"
                    />
                    <label
                      className="form-check-label text-xs w-full inline ml-2"
                      Htmlfor="form-check-input"
                    >
                      Remember for 30days
                    </label>
                  </div>
                  <div className="font-bold text-xs">
                    <a href=" ">Forgot password?</a>
                  </div>
                </div>

                <input
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-500 rounded-xl text-white py-2 hover:scale-105 duration-300"
                  value="Sign in"
                />
              </form>
            </div>
          </div>
          {/*image*/}
          <div className="form-image">
            <img className="" src={image} alt=" " />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
