import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignIn = ({ darkMode }) => {
  

  const ValidEmail = "chiscookeke11@gmail.com"
  const ValidPassword = "testing"

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errorMessageEmail, setErrorMessageEmail] = useState( "")
  const [formErrorMessage, setFormErrorMessage] = useState("")


  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]:value,
    }))
    if (name === "email" && !validateEmail(value)){
      setErrorMessageEmail("Please enter a valid email address")
    }
    else{
      setErrorMessageEmail("")
    }





  }


  const [showPassword, setShowPassword] = useState(false)



  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPaswword) => !prevShowPaswword)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.email !== ValidEmail && formData.password === ValidPassword ){
      setFormErrorMessage("Invalid Email")
    }
    else if(formData.email === ValidEmail && formData.password !== ValidPassword  ){
      setFormErrorMessage("Invalid Password")
    }
    else if (formData.email !== ValidEmail && formData.password !== ValidPassword ){
      setFormErrorMessage("Invalid Login Credentials")
    }
    else{
      setFormErrorMessage("form submitted")
    }
  }
  

  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center px-4 py-4 gap-5 text-center  ${darkMode ? " bg-[#141924] " : "bg-white"} sign-in `} >

      {/* header */}
      <h1 className={` text-2xl font-semibold  ${darkMode ? "text-[#EFF1F4] " : "text-[#21252C]"} `} >Sign In</h1>



      {/* form */}
      <form onSubmit={handleSubmit} action="" className=' w-full py-1  '>

     
        
        <label htmlFor="email" className={`flex flex-col gap-3 w-full items-start justify-start  text-base font-medium my-5 ${darkMode ? "text-[#eff1f4] " : "text-[#21252C]"} `} >
          Email Address
          <input
          onChange={handleChange}
           type="email" 
           id='email' 
           name='email' 
           className={`w-full p-4 rounded-lg  outline-none  text-base font-medium  ${darkMode ? "bg-[#2B303A] focus:border border-[#6D7688] placeholder-[#6D7688] text-[#EFF1F4] " : "bg-white border border-[#CFD5DB] placeholder-[#BABFC5] text-[#21252C]"} `} 
           placeholder='Enter email address'
            required 
            value={formData.email} />


          <p className='text-[#F33D3D] text-sm font-normal ' >{errorMessageEmail} </p>
        </label>


        <label htmlFor="password" className={`flex flex-col gap-3 w-full items-start justify-start text-[#21252C] text-base font-medium mb-4 ${darkMode ? "text-[#eff1f4]  " : "text-[#21252C]"}  `} >
          Password
          <div className={`w-full rounded-lg border border-[#CFD5DB] flex items-center justify-start overflow-hidden     ${darkMode ? "bg-[#2B303A]" : "bg-white"}`} >
            <input 
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
             id='pasword'
              name='password' 
              className={` flex-grow p-4 border-none   outline-none text-base font-medium ${darkMode ? "placeholder-[#6D7688] text-[#EFF1F4] bg-[#2B303A] focus:border border-[#6D7688] " : " text-[#21252C] placeholder-[#BABFC5] bg-white"} `} 
              placeholder='Enter password' 
              required
              value={formData.password} />
            <button type='button' className={`w-12 h-12 flex items-center justify-center cursor-pointer ${darkMode ? "text-[#BABFC5]" : "text-[#BABFC5] "}`} onClick={togglePasswordVisibility} > {showPassword ? <FaEyeSlash /> : <FaEye />} </button>
          </div>
        </label>


        <p className={`w-fit  justify-self-end text-sm font-medium  ${darkMode ? "text-[#EFF1F4] " : "text-[#21252C] "} `} >Forgot password?</p>


        <button type='submit' className={`w-full  p-4  text-base font-semibold rounded-[8px] my-4 ${darkMode ? "text-[#21252C] bg-[#D7E0EE] " : "text-[#FFFFFF] bg-[#21252C]"} `} >Sign In</button>

        <p className='text-[#F33D3D] text-sm font-normal '> {formErrorMessage} </p>





      </form>



      {/* sign-up option */}

      <p className={`text-sm font-normal ${darkMode ? "text-[#8A9199] " : "text-[#76889A] "} `} >Don't have an account? <a href="#" className={` ${darkMode ? "text-white" : " text-[#21252C]"} `} > Create account</a></p>
      <p className='text-[#76889A] text-sm font-normal  '>Or Sign in with</p>





      <div className='w-full flex flex-row items-center justify-evenly gap-5' >
        <button className={`w-1/2 whitespace-nowrap flex items-center justify-center flex-row  p-4 rounded-2xl gap-3  ${darkMode ? "bg-[#2B303A] text-[#EFF1F4] " : "border-[#CFD5DB] border"} `} > <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1736695565/Google_ky0mgu.svg" alt="google logo" /> Google</button>
        <button className={`w-1/2 whitespace-nowrap flex items-center justify-center flex-row  p-4 rounded-2xl gap-3  ${darkMode ? "bg-[#2B303A] text-[#EFF1F4]" : "border-[#CFD5DB] border"} `} > <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1736695569/Vector_yfcxgd.svg" alt="apple logo" /> Apple</button>
      </div>

    </div>
  )
}

export default SignIn