import React, { useState } from 'react'

const ForgotPassword = ({darkMode}) => {

 const ValidEmail = "chiscookeke11@gmail.com";

 const [resetEmail, setResetEmail] = useState("");

 const validEmail = "chiscookeke11@gmail.com";
 const [errorMessageEmail, setErrorMessageEmail] = useState( "");

 const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (event) => {
    const {value} = event.target;

    setResetEmail(value);

    if (!validateEmail(value)){
      setErrorMessageEmail("Please enter a valid email address")
    }
    else{
      setErrorMessageEmail("")
    }
  }








    
  return (
    <div className={`h-screen w-full flex flex-col items-center text-center justify-center px-4 py-4 gap-5 ${darkMode? "bg-[#141924] " : " bg-[#fff] "} `} >
        <h1 className={` text-2xl font-semibold  ${darkMode ? "text-[#EFF1F4] " : "text-[#21252C]"} `}  >Forgot Password?</h1>
        <p className={`max-w-[276px] text-sm font-normal ${darkMode ? "text-[#8A9199] " : "text-[#76889A] "} `}>Enter your email address, and we will send an OTP</p>

        <form action=""  className=' w-full py-1  ' >
            <label htmlFor="email" className={`flex flex-col gap-3 w-full items-start justify-start  text-base font-medium my-5 ${darkMode ? "text-[#eff1f4] " : "text-[#21252C]"} `} >
                Email Address
                <input type="text"
                 required 
                 onChange={handleChange}
                 id='email'
                  name='email'
                  value={resetEmail}
                  className={`w-full p-4 rounded-lg  outline-none  text-base font-medium  ${darkMode ? "bg-[#2B303A] focus:border border-[#6D7688] placeholder-[#6D7688] text-[#EFF1F4] " : "bg-white border border-[#CFD5DB] placeholder-[#BABFC5] text-[#21252C]"} `}  />
                  <p className='text-[#F33D3D] text-sm font-normal '>{errorMessageEmail}</p>
                 </label>
            <button className={`w-full  p-4  text-base font-semibold rounded-[8px] my-4 ${darkMode ? "text-[#21252C] bg-[#D7E0EE] " : "text-[#FFFFFF] bg-[#21252C]"} `} >Continue</button>
            <p className={` text-sm font-normal mt-6 ${darkMode ? "text-[#8A9199] " : "text-[#76889A] "} `} >Remembered password? Sign in</p>
        </form>
        
        
        
        
        </div>
  )
}

export default ForgotPassword