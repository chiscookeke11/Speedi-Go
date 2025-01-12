import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignIn = () => {

  

  const [showPassword, setShowPassword] = useState(false)
  


  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPaswword) => !prevShowPaswword)
  }

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center px-4 py-4 gap-5 text-center ' >

      {/* header */}
      <h1 className='text-[#21252C] text-2xl font-semibold ' >Sign In</h1>

      

      {/* form */}
      <form action="" className=' w-full py-1  '>
        <label htmlFor="email" className='flex flex-col gap-3 w-full items-start justify-start text-[#21252C] text-base font-medium my-5 ' >
          Email Address
          <input type="email" id='email' name='email' className='w-full p-4 rounded-lg border border-[#CFD5DB] outline-none text-[#21252C] text-base font-medium placeholder-[#BABFC5] ' placeholder='Enter email address' />
        </label>


        <label htmlFor="password" className='flex flex-col gap-3 w-full items-start justify-start text-[#21252C] text-base font-medium mb-4  ' >
        Password
          <div className=' w-full rounded-lg border border-[#CFD5DB] flex items-center justify-start overflow-hidden ' ><input type={showPassword? "text" : "password"} id='pasword' name='password' className=' flex-grow p-4 border-none placeholder-[#BABFC5]  outline-none text-[#21252C] text-base font-medium ' placeholder='Enter password' />
          <button type='button' className='w-12 h-12 flex items-center justify-center cursor-pointer ' onClick={togglePasswordVisibility} > {showPassword?  <FaEyeSlash/> : <FaEye/>} </button> 
          </div>
        </label>


        <p className='w-fit  justify-self-end text-sm font-medium text-[#21252C]  ' >Forgot password?</p>


        <button type='submit' className='w-full bg-[#21252C] p-4 text-[#FFFFFF] text-base font-semibold rounded-[8px] my-4 ' >Sign In</button>







      </form>



      {/* sign-up option */}

      <p className='text-[#76889A] text-sm font-normal  ' >Don't have an account? <a href="#" className=' text-[#21252C] ' > Create account</a></p>
      <p className='text-[#76889A] text-sm font-normal  '>Or Sign in with</p>





      <div className='w-full flex flex-row items-center justify-evenly gap-5' > 
        <button className='w-1/2 whitespace-nowrap border border-[#CFD5DB] flex items-center justify-center flex-row  p-4 rounded-2xl gap-3 ' > <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1736695565/Google_ky0mgu.svg" alt="google logo" /> Google</button>
        <button  className='w-1/2 whitespace-nowrap border border-[#CFD5DB] flex items-center justify-center flex-row  p-4 rounded-2xl gap-3' > <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1736695569/Vector_yfcxgd.svg" alt="apple logo" /> Apple</button>
      </div>

    </div>
  )
}

export default SignIn