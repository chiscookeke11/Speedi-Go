import React from 'react'

const OtpPage = ({darkMode}) => {
  return (
    <div>
         <div className={`h-screen w-full flex flex-col items-center text-center justify-center px-4 py-4 gap-5 ${darkMode? "bg-[#141924] " : " bg-[#fff] "} `} >
        <h1 className={` text-2xl font-semibold  ${darkMode ? "text-[#EFF1F4] " : "text-[#21252C]"} `}  >Enter OTP</h1>
        <p className={`max-w-[276px] text-sm font-normal ${darkMode ? "text-[#8A9199] " : "text-[#76889A] "} `}>We’ve sent an OTP code to your email, Random3321@gmail.com</p>

        <form action=""  className=' w-full py-1  ' >
            <label htmlFor="email" className={`flex flex-col gap-3 w-full items-start justify-start  text-base font-medium my-5 ${darkMode ? "text-[#eff1f4] " : "text-[#21252C]"} `} >
                Email Address

               <div className='w-full flex flex-row items-center justify-evenly gap-3 px-4' >
            {[...Array(4)].map((_, index)=> (
                   <input type="text"
                   maxLength="1"
                   required
                   id='email'
                    name='email'
                    className={`w-full p-4 rounded-lg  outline-none  text-base font-medium  ${darkMode ? "bg-[#2B303A] focus:border border-[#6D7688] placeholder-[#6D7688] text-[#EFF1F4] " : "bg-white border border-[#CFD5DB] placeholder-[#BABFC5] text-[#21252C]"} `}  />
  
            ) )}

               </div>
                  <p className='text-[#F33D3D] text-sm font-normal '>errro meddar</p>
                  <p  className={` text-sm font-normal mt-3 self-center ${darkMode ? "text-[#8A9199] " : "text-[#76889A] "} `} >Didn’t receive any code?  <a href="#"  className={` ${darkMode ? "text-white" : " text-[#21252C]"} `} > Resend</a></p>
                 </label>
            <button className={`w-full  p-4  text-base font-semibold rounded-[8px] my-4 ${darkMode ? "text-[#21252C] bg-[#D7E0EE] " : "text-[#FFFFFF] bg-[#21252C]"} `} >Verify</button>
            <p  className={` text-sm font-normal mt-6 ${darkMode ? "text-[#8A9199] " : "text-[#76889A] "} `} >Remembered password? <a href="#"  className={` ${darkMode ? "text-white" : " text-[#21252C]"} `} > Sign in</a></p>
        </form>
        
        
        
        
        </div>
    </div>
  )
}

export default OtpPage