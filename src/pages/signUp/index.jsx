import React from 'react'
import image from './signup_image.svg'
import catchup from './catchup_logo.svg'
import google from './google.svg'
import nigeria from './nigeria.svg'
import chevron from './chevron.svg'
import { useForm } from "react-hook-form"
const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  
  const onSubmit = (data) => {
    console.log(data)
  }
  
  return (
    <div className='w-full mx-auto mt-4 tablet:flex tablet:justify-center'>
      <div className='w-full h-full bg-white tablet:w-6/12 tablet:p-3.5 mx-auto '>
        <header className=' w-full flex justify-between items-center px-4 tablet:mt-4'>
          <img className='w-32 tablet:w-48' src={catchup} alt="logo of app" />
          <div className='px-1 rounded-[20px] w-24 tablet:w-32 tablet:h-10 h-[32px]  bg-blue-100 flex justify-around items-center'>
            <img src={nigeria} alt="nigerian flag" />
            <strong className='text-xs tablet:text-sm'>English</strong>
            <img src={chevron} alt="dropdown " />

          </div>
        </header>
        <div className='mt-10 tablet:mt-14 px-4 w-full max-w-md mx-auto'>
         
          <h2 className='font-medium text-xl text-[#717172] tablet:text-4xl'>Welcome!</h2>
          <p className='mt-2 text-[#424245] text-base tablet:text-xl'>Sign up here! Please enter your details</p>
          <form onSubmit={handleSubmit(onSubmit)} className=' mt-7 text-[#4B4B4C] font-normal [&>input]:mt-2 [&>input]:w-full [&>input]:mb-3.5'>
            
            <label className='pt-3.5' htmlFor="email">Email</label><br />

            <input 
            style={{border: errors.email ? '1px solid red': '1px solid #D0D5DD'}}
            className='focus:outline-none   h-11 p-3.5 rounded-lg' type="text" name="email" placeholder="Enter your email"
            {...register("email", 
            {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            />
            {errors.email && <p className='text-sm mb-4' style={{color: 'red'}}>Please enter a valid email</p>}

               
            <label htmlFor="password">Passsword</label><br />

            <input 
            style={{border: errors.password ? '1px solid red': '1px solid #D0D5DD'}}
            className='focus:outline-none h-11 p-3.5 rounded-lg'  type="password" name="password" placeholder="Please enter your unique password"
            {...register("password", {required: true})}/>
            {errors.password && <p className='text-sm mb-4' style={{color: 'red'}}>Password must not be empty</p>}

          

            <button className=' mt-2 text-white bg-[#0056D6] w-full h-11 rounded-lg' type="submit">Create a free account</button>

            </form>

            <p className='my-2.5 text-center text-[#0056D6]' >Or</p>

            <button className='flex justify-center items-center font-medium text-[#344054] w-full  border border-[#D0D5DD] h-11 p-2 rounded-lg'>
              <img className='mr-2 w-6' src={google} alt="google logo"/>
               Sign Up with Google
            </button>

            <p className=' my-8 font-normal text-center text-[#0056D6]'>Have an account already? Sign in for free</p>
             
        </div>
      </div>
      <img className="hidden tablet:block tablet:w-6/12 h-full " src={image} alt="fornmimage" />
    </div>
  )
}

export default SignUp