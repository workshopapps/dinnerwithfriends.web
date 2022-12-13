import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import userServices from "../../services/userServices";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ForgetPasswordImage from "../../assets/img/ForgetPasswordImage.png";
import BackToSignIn from "../../assets/img/BackToSignIn.png";

const ForgetPassword = () => {
	const [isSubmit, setIsSubmit] = useState(false);
	const [validCredentials, setValidCredentials] = useState(false);
	const [invalidCredentials, setInvalidCredentials] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		setIsSubmit(true)
		const recovery = await userServices.recoverPassword(data);
	

		if (recovery.status === "fail") {
			setIsSubmit(false);
			setInvalidCredentials(true);
		}

		if (recovery.status === "success") {
			setValidCredentials(true);
			setTimeout(() => {
				navigate("/reset_link");
			}, 2000);
		}
	};

	const errorMsg = () => {
		let element;
		if (validCredentials) {
			element = (
				<p className='mt-4 text-xl text-green-600 text-center'>
					Successful, Kindly proceed to your email!
				</p>
			);
		} else if (invalidCredentials) {
			element = (
				<p className='mt-4 text-xl text-red-600 text-center'>
					Incorrect email address
				</p>
			);
		}
		return element;
	};
	const pattern =
	/* eslint-disable-next-line */
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return (
		<>
			<Navbar />
			<div className='container mx-auto  mt-20 px-10 mb-20'>
				<div className='md:flex items-center justify-center gap-20'>
					<div className='grid items-center justify-center'>
						<div className='md:hidden mb-5'>
							<Link to='/sign_in'>
								<img src={BackToSignIn} alt='arrow' />
							</Link>
						</div>
						<h1 className='text-3xl font-bold'>Forgot Password?</h1>
						<p className='w-60 md:w-96 mt-3 text-base lg:text-lg'>
							Don’t worry we have got you covered, Please enter the email
							associated with you account
						</p>
						{errorMsg()}
						<form className='mt-7' onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label
									className='block mb-2 font-normal text-gray-600'
									HtmlFor='email'>
									Email
								</label>
								<input
									type='email'
									id='email'
									placeholder='Enter your email address'
									className='block w-60 md:w-96 p-3 border rounded-md'
									{...register("email", { required: true, pattern: pattern })}
								/>
								{errors.email && (
									<p className='italic text-sm mt-2' style={{ color: "red" }}>
										Please enter a valid email
									</p>
								)}
							</div>

							<div className='mt-5'>
								<button
									type='submit'
									className='w-60 md:w-96 text-white bg-[#0056D6] hover:bg-[#0056D6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#0056D6] dark:hover:bg-[#0056D6] dark:focus:ring-blue-800'>
									{isSubmit ? "Loading..." : "Submit"}
								</button>
							</div>

							<p className='w-60 md:w-96 mt-5 text-sm xl:text-base'>
								Don’t have an account yet?{" "}
								<Link to='/sign_up' className='text-[#0056D6] font-semi-bold'>
									Sign Up for free
								</Link>
							</p>
						</form>
					</div>
					<div className='hidden lg:flex'>
						<img src={ForgetPasswordImage} alt='beautiful girl' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ForgetPassword;
