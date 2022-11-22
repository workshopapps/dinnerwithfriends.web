import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForgetPasswordImage from "../../assets/img/ForgetPasswordImage.png";
import BackToSignIn from "../../assets/img/BackToSignIn.png";
const ForgetPassword = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto  mt-10 px-10">
        <div className="md:flex items-center justify-center gap-20">
          <div className="grid items-center justify-center">
            <div className="md:hidden mb-5">
              <img src={BackToSignIn} alt="" />
            </div>
            <h1 className="text-3xl font-bold">Forgot Password?</h1>
            <p className="w-60 md:w-96 mt-3">
              Don’t worry we have got you covered, Please enter the email
              associated with you account
            </p>

            <form className="mt-7">
              <div>
                <label className="block mb-2 font-normal text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="block w-60 md:w-96 p-3 border rounded-md"
                />
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-60 md:w-96 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link to="/reset"> Submit</Link>
                </button>
              </div>

              <p className="w-60 md:w-96 mt-5">
                Don’t have an account yet?{" "}
                <a href="#SignUp" className="text-blue-700 font-semi-bold">
                  Sign Up for free
                </a>
              </p>
            </form>
          </div>
          <div className="hidden md:flex">
            <img src={ForgetPasswordImage} alt="beautiful girl" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPassword;
