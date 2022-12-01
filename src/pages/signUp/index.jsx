import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useForm } from "react-hook-form"
import image from './signup_image.webp'
import google from './google.svg'
import nigeria from './nigeria.svg'
import catchup from './catchup_logo.svg'

const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [existingUser, setExistingUser] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [accountCreated, setAccountCreated] = useState(false)
  const nav = useNavigate()
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  /*const googleSubmit = () => {
    fetch('https://catchup.hng.tech/api/v1/auth/google/url')
    .then(response => {
      if (!response.ok) {
          throw Error(response.status);
      }
      return response})
    .then(result => console.log(result.text()))
    .catch(err => {
        console.log(err)
        setSubmitting(false)
    })

  }*/

  const onSubmit = (data) => {
    reset()
    setSubmitting(true)
    setExistingUser(false)
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

    fetch('https://prybar.onrender.com/api/v1/auth/signup', options)
        .then(response => {
            if (!response.ok) {
                throw Error(response.status);
            }
            return response.json()})
        .then(result => {
          if(result.status === 'error'){
              setExistingUser(true)
              setSubmitting(false)
          }
          if(result.status === 'success'){
            setAccountCreated(true)
            setTimeout(() => {
              nav('/sign_in')
            }, 2000)

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
  const secondPattern = /^[a-z][a-z0-9]+$/ig; const thirdPattern = /^[a-z][a-z0-9\s]+$/ig;
  return (
    <div className='w-full mx-auto tablet:flex tablet:justify-center'>
      <div className=' w-full h-full bg-white tablet:w-6/12 tablet:p-3.5 mx-auto '>
        <header className=' w-full flex justify-between items-center px-4 pt-4 mt-3.5 tablet:mt-0'>
        <Link to='/'><img className='w-32 tablet:w-48' src={catchup} alt="logo of app" /></Link>
          <div className='px-1 rounded-[20px] w-29 tablet:w-35 tablet:h-10 h-[34px]  bg-blue-100 flex justify-around items-center'>
            <img className='w-5' src={nigeria} alt="nigerian flag" />
            <select className='language-select bg-blue-100 w-full font-semibold focus:outline-none text-xs tablet:text-sm' name="language" id="language">
              <option value="uk">English (UK)</option>
              <option value="us">English (US)</option>
            </select>
          </div>
        </header>
        <div className='mt-10 tablet:mt-14 px-4 w-full max-w-md mx-auto'>

          <h2 className='font-medium text-xl text-[#717172] tablet:text-4xl'>Welcome!</h2>
          <p className='mt-2 text-[#424245] text-base tablet:text-xl'>Sign up here! Please enter your details</p>
          {existingUser && <p style={{color: 'red'}} className='mt-4 text-base text-center'>User already exists!</p>}
          {accountCreated && <p className='mt-4 text-base text-green-600 text-center'>Account Created Successfully!</p>}
          <form onSubmit={handleSubmit(onSubmit)} className=' mt-7 text-[#4B4B4C] font-normal [&>input]:mt-2 [&>input]:w-full [&>input]:mb-3.5'>
            <div className='relative w-full mb-4 '>
              <label className='pb-0' htmlFor="email">Name</label>

              <input
              style={{border:errors.name ? '1px solid red': '1px solid #D0D5DD'}}
              className={`focus:outline-none focus:${!errors.name?  'shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]' : 'shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]'}  mt-2 w-full h-11 p-3.5 rounded-lg`} type="text" name="email" placeholder="Enter your name"
              {...register("name",
              {required: "Name cannot be empty",
               minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters"
               },
               maxLength: {
                value: 30,
                message: "Name must not be more than 30 characters"

              },

               pattern: {
                value: thirdPattern,
                message: "Name must start with a letter and no special characters are allowed"
              }
              })}
              />
              {errors.name && <p className='right-0 bottom-[-37px] italic text-sm mt-2' style={{color: 'red'}}>{errors.name?.message}</p>}
            </div>

            <div className='relative w-full mb-4 '>
              <label className='pb-0' htmlFor="email">Email</label>

              <input
              style={{border:errors.email ? '1px solid red': '1px solid #D0D5DD'}}
              className={`focus:outline-none focus:${!errors.email?  'shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]' : 'shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]'}  mt-2 w-full h-11 p-3.5 rounded-lg`} type="email" name="email" placeholder="Enter your email"
              {...register("email",
              {required: "Email cannot be empty",
              pattern: {
                value: pattern,
                message: "Please enter a valid email"
              }
              })}
              />
              {errors.email && <p className='italic text-sm mt-2' style={{color: 'red'}}>{errors.email?.message}</p>}
            </div>


            <div className='relative w-full mb-4 '>
              <label className='pb-0' htmlFor="password">Passsword</label>

              <input
              style={{border: errors.password ? '1px solid red': '1px solid #D0D5DD'}}
              className=
                {`relative focus:outline-none ${!errors.password? 'focus:shadow-[0px_0px_0px_4px_rgba(74,74,104,0.1)]' : 'focus:shadow-[0px_0px_0px_4px_rgba(249,50,50,0.1)]'} mt-2 w-full h-11 p-3.5 rounded-lg`} 
              type={passwordShown ? "text" : "password"} 
              name="password" 
              placeholder="Please enter your unique password"
              {...register("password",
              {required: "Password cannot be empty",
                minLength: {
                  value: 9,
                  message: "Password must be at least 9 characters"
               },
               maxLength: {
                value: 30,
                message: "Password must not be more than 30 characters"
              },
              pattern: {
                value: secondPattern,
                message: "Password has to start with a letter, can contain numbers. No spaces and special characters allowed"
              }
              })}/>
              <span 
                className='absolute bottom-4 right-3 cursor-pointer' 
                onClick={togglePassword}>
                  {passwordShown ?  <FiEyeOff /> : <FiEye />}
              </span>
              {errors.password && <p className='right-0 bottom-[-37px] italic text-sm mt-2' style={{color: 'red'}}>{errors.password?.message}</p>}
            </div>


            <button className=' transition ease-in duration-200 hover:bg-[#66A3FF] mt-4 text-white bg-[#0056D6] w-full h-11 rounded-lg' type="submit">{submitting ? 'Loading...' : 'Create a free account'}</button>

            </form>

            <p className='my-2.5 text-center text-[#0056D6]' >Or</p>

            <a href="https://catchup.hng.tech/api/v1/auth/google/url" className='flex justify-center items-center font-medium text-[#344054] w-full  border border-[#D0D5DD] h-11 p-2 rounded-lg'>
              <img className='mr-2 w-6' src={google} alt="google logo"/>
               Sign Up with Google
            </a>


          <Link to='/sign_in'> <p className=' my-8 font-normal text-center text-[#0056D6]'>Have an account already? Sign in for free</p></Link>


        </div>
      </div>
      <div className="hidden tablet:block tablet:w-6/12 bg-cover bg-gray-100" style={{backgroundImage: `linear-gradient(115deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${image})`}}></div>
    </div>
  )
}

export default SignUp
