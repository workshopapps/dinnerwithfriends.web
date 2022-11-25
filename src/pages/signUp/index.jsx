import React, {useState} from 'react'
import image from './signup_image.webp'
import google from './google.svg'
import nigeria from './nigeria.svg'
import chevron from './chevron.svg'
import { useForm } from "react-hook-form"
import catchup from './catchup_logo.svg'
import { useNavigate, Link } from 'react-router-dom'
const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [existingUser, setExistingUser] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const nav = useNavigate()
  !errors.email ? console.log(' no email error') : console.log(' email error')

  const googleSubmit = () => {
    fetch('https://api.catchup.hng.tech/api/v1/auth/google/url')
    .then(response => {
      if (!response.ok) {
          throw Error(response.status);
      }
      return response.json()})
    .then(result => console.log(result))
    .catch(err => {
        console.log(err)
        setSubmitting(false)
    })
    
  }

  const onSubmit = (data) => {
    
    setSubmitting(true)
   
    console.log(data)
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          },
      body: JSON.stringify({
          'name': data.name,
          'email': data.email,
          'password': data.password,

      }),

    }
    

    fetch('/auth/signup', options)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json()})
        .then(result => {
          console.log(result)
          if(result.status === 'error'){
              setExistingUser(true)
              setSubmitting(false)
          }
          if(result.status === 'success'){
            nav('/sign_in')
        }
          
          
        })
        .catch(err => {
            console.log(err)
            setSubmitting(false)
        })
  }
  /* eslint-disable-next-line */
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  /* eslint-disable-next-line */
  const secondPattern = /^[a-z][a-z0-9]+$/ig
  return (
    <div className='w-full mx-auto tablet:flex tablet:justify-center'>
      <div className=' w-full h-full bg-white tablet:w-6/12 tablet:p-3.5 mx-auto '>
        <header className=' w-full flex justify-between items-center px-4 pt-4 mt-3.5 tablet:mt-0'>
        <Link to='/'><img className='w-32 tablet:w-48' src={catchup} alt="logo of app" /></Link>
          <div className='px-1 rounded-[20px] w-24 tablet:w-32 tablet:h-10 h-[32px]  bg-blue-100 flex justify-around items-center'>
            <img className='w-5' src={nigeria} alt="nigerian flag" />
            <strong className='text-xs tablet:text-sm'>English</strong>
            <img className='w-[12px]' src={chevron} alt="dropdown " />

          </div>
        </header>
        <div className='mt-10 tablet:mt-14 px-4 w-full max-w-md mx-auto'>
         
          <h2 className='font-medium text-xl text-[#717172] tablet:text-4xl'>Welcome!</h2>
          <p className='mt-2 text-[#424245] text-base tablet:text-xl'>Sign up here! Please enter your details</p>
          {existingUser && <p style={{color: 'red'}} className='mt-4 text-lg'>User already exists!</p>}
          <form onSubmit={handleSubmit(onSubmit)} className=' mt-7 text-[#4B4B4C] font-normal [&>input]:mt-2 [&>input]:w-full [&>input]:mb-3.5'>
            <div className='relative w-full mb-4 '>
              <label className='pb-0' htmlFor="email">Name</label>
              
              <input 
              style={{border:errors.name ? '1px solid red': '1px solid #D0D5DD'}}
              className={`focus:outline-none focus:${!errors.name?  'shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]' : 'shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]'}  mt-2 w-full h-11 p-3.5 rounded-lg`} type="text" name="email" placeholder="Enter your name"
              {...register("name", 
              {required: true, minLength: 3, maxLength: 30, pattern: secondPattern})}
              />
              {errors.name && <p className='right-0 bottom-[-37px] italic text-sm mt-2' style={{color: 'red'}}>Name has to start with a letter, can contain spaces, must be at least 3 characters, and no more than 30 characters. No special characters allowed</p>}
            </div>

            <div className='relative w-full mb-4 '>
              <label className='pb-0' htmlFor="email">Email</label>
              
              <input 
              style={{border:errors.email ? '1px solid red': '1px solid #D0D5DD'}}
              className={`focus:outline-none focus:${!errors.email?  'shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]' : 'shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]'}  mt-2 w-full h-11 p-3.5 rounded-lg`} type="email" name="email" placeholder="Enter your email"
              {...register("email", 
              {required: true, pattern: pattern })}
              />
              {errors.email && <p className='italic text-sm mt-2' style={{color: 'red'}}>Please enter a valid email</p>}
            </div>


            <div className='relative w-full mb-4 '>
              <label className='pb-0' htmlFor="password">Passsword</label>

              <input 
              style={{border: errors.password ? '1px solid red': '1px solid #D0D5DD'}}
              className={`focus:outline-none ${!errors.password? 'focus:shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]' : 'focus:shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]'} mt-2 w-full h-11 p-3.5 rounded-lg`} type="password" name="password" placeholder="Please enter your unique password"
              {...register("password", {required: true, minLength: 8, maxLength: 30, pattern: secondPattern})}/>
              {errors.password && <p className='right-0 bottom-[-37px] italic text-sm mt-2' style={{color: 'red'}}>Password has to start with a letter, can contain numbers, must be at least 8 characters, and no more than 30 characters. No spaces and special characters allowed</p>}
            </div>
          

            <button className=' transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-white bg-[#0056D6] w-full h-11 rounded-lg' type="submit">{submitting ? 'Loading...' : 'Create a free account'}</button>

            </form>

            <p className='my-2.5 text-center text-[#0056D6]' >Or</p>

            <button onClick ={googleSubmit}className='flex justify-center items-center font-medium text-[#344054] w-full  border border-[#D0D5DD] h-11 p-2 rounded-lg'>
              <img className='mr-2 w-6' src={google} alt="google logo"/>
               Sign Up with Google
            </button>


          <Link to='/sign_in'> <p className=' my-8 font-normal text-center text-[#0056D6]'>Have an account already? Sign in for free</p></Link>

             
        </div>
      </div>
      <div className="hidden tablet:block tablet:w-6/12 bg-cover bg-gray-100" style={{backgroundImage: `linear-gradient(115deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${image})`}}></div>
    </div>
  )
}

export default SignUp
