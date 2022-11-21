import { Link } from "react-router-dom"
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ForgetPasswordImage from "../../assets/img/ForgetPasswordImage.png";
import BackToSignIn from "../../assets/img/BackToSignIn.png";
const ResetLink = () => {
  return (
    <>
    <Navbar />
    <div className="container mx-auto  mt-20 px-10 mb-20">
      <div className="md:flex items-center justify-center gap-20">
        <div className="grid items-center justify-center">
          <div className="md:hidden mb-5">
            <Link to="/sign_in"><img src={BackToSignIn} alt="" /></Link>
          </div>
          <h1 className="text-3xl font-bold">Reset Link Sent</h1>
          <p className="w-60 md:w-96 mt-3">
            A password reset link has been sent to john@gmail.com
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
                Open email app
              </button>
            </div>

            <p className="w-60 md:w-96 mt-5">
              Didn't receive the email yet?{" "}
              <Link to="/forget_password" className="text-blue-700 font-semi-bold">
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

export default ResetLink;
