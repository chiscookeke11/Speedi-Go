import React, { useRef, useState } from 'react';

const OtpPage = ({ darkMode }) => {

  const [otp, setOtp] = useState(new Array(4).fill("") )

  function handleChange(e, index){
    if  ( isNaN(e.target.value))  return false
    setOtp([...otp.map((data, indx)=>(indx === index ? e.target.value:data) )]);

    if (e.target.value && e.target.nextElementSibling ) {
      e.target.nextElementSibling?.focus();
  }

  if (e.target.value === "" && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
}

  
  } 

  function handlePaste(e) {
    const value = e.clipboardData.getData("text")

    if(isNaN(value)) return false

    const updatedValue = value.toString().split("").slice(0, otp.length)
    setOtp(updatedValue)

    const focusedInput = e.target.parentNode.querySelector("input:focus")
    if(focusedInput){
      focusedInput.blur()
    }

    const lastInput = e.target.parentNode.querySelector('input[type="password"]:last-child')
    if(lastInput){
      lastInput.focus()
    }



  }
   
  return (
    <div>
      <div
        className={`h-screen w-full flex flex-col items-center text-center justify-center px-4 py-4 gap-5 ${
          darkMode ? "bg-[#141924]" : "bg-[#fff]"
        }`}
      >
        <h1
          className={`text-2xl font-semibold ${
            darkMode ? "text-[#EFF1F4]" : "text-[#21252C]"
          }`}
        >
          Enter OTP
        </h1>
        <p
          className={`max-w-[276px] text-sm font-normal ${
            darkMode ? "text-[#8A9199]" : "text-[#76889A]"
          }`}
        >
          We’ve sent an OTP code to your email, Random3321@gmail.com
        </p>

        <form  className="w-full py-1">
          <label
            className={`flex flex-col gap-3 w-full items-start justify-start text-base font-medium my-5 ${
              darkMode ? "text-[#eff1f4]" : "text-[#21252C]"
            }`}
          >
            Email Address
            <div className="w-full flex flex-row items-center justify-evenly gap-3 px-4">
              {
                otp.map((data, i) => {
                  return <input
                   type="password"
                   value={data}
                   maxLength="1"
                   onPaste={(e)=> {handlePaste(e)}}
                   onChange={(e)=> handleChange(e, i) }
                   className={`w-full p-4 rounded-lg outline-none text-base font-medium flex items-center justify-center text-center
                    ${
                      darkMode
                        ? "bg-[#2B303A] border border-[#6D7688] focus:border-[#EFF1F4]"
                        : "bg-white border border-[#CFD5DB] focus:border-[#21252C]"
                    }`}
                   />
})
              }
            </div>
            <p className={`text-[#F33D3D] text-sm font-normal`}>
              
            </p>
            <p
              className={`text-sm font-normal mt-3 self-center ${
                darkMode ? "text-[#8A9199]" : "text-[#76889A]"
              }`}
            >
              Didn’t receive any code?{" "}
              <a href="#" className={`${darkMode ? "text-white" : "text-[#21252C]"}`}>
                Resend
              </a>
            </p>
          </label>
          <button
            type="submit"
            className={`w-full p-4 text-base font-semibold rounded-[8px] my-4 ${
              darkMode ? "text-[#21252C] bg-[#D7E0EE]" : "text-[#FFFFFF] bg-[#21252C]"
            }`}
          >
            Verify
          </button>
          <p
            className={`text-sm font-normal mt-6 ${
              darkMode ? "text-[#8A9199]" : "text-[#76889A]"
            }`}
          >
            Remembered password?{" "}
            <a href="#" className={`${darkMode ? "text-white" : "text-[#21252C]"}`}>
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default OtpPage;
