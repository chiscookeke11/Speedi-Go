import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'






const ChangePassword = ({ darkMode }) => {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  })



  const toggleShowNewPassword = () => {
    setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword)
  }
  const toggleconfirmVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword)
  }



  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword === formData.confirmPassword) {
      alert("correct match");
      e.target.reset();
      setErrorMessage("")
    }
    else {
      setErrorMessage("passwords doesnt  match")
    }
  }






  return (
    <div className={`w-full min-h-screen flex flex-col items-center justify-center px-4 py-4 gap-5 text-center  ${darkMode ? " bg-[#141924] " : "bg-white"} NewPassword `} >

      {/* header */}
      <h1 className={` text-2xl font-semibold  ${darkMode ? "text-[#EFF1F4] " : "text-[#21252C]"} `} >Set New Password</h1>



      {/* form */}
      <form onSubmit={handleSubmit} className=' w-full py-1  '>






        <label htmlFor="password" className={`flex flex-col gap-3 w-full items-start justify-start text-[#21252C] text-base font-medium mb-4 ${darkMode ? "text-[#eff1f4]  " : "text-[#21252C]"}  `} >
          New Password
          <div className={`w-full rounded-lg border border-[#CFD5DB] flex items-center justify-start overflow-hidden     ${darkMode ? "bg-[#2B303A]" : "bg-white"}`} >
            <input
              type={showNewPassword ? "text" : "password"}
              id='newPassword'
              name='newPassword'
              className={` flex-grow p-4 border-none   outline-none text-base font-medium ${darkMode ? "placeholder-[#6D7688] text-[#EFF1F4] bg-[#2B303A] focus:border border-[#6D7688] " : " text-[#21252C] placeholder-[#BABFC5] bg-white"} `}
              placeholder='New password'
              value={formData.newPassword}
              onChange={handleChange}
              required />
            <button onClick={toggleShowNewPassword} type='button' className={`w-12 h-12 flex items-center justify-center cursor-pointer ${darkMode ? "text-[#BABFC5]" : "text-[#BABFC5] "}`} >  {showNewPassword ? <FaEyeSlash /> : <FaEye />}  </button>
          </div>
        </label>



        <label htmlFor="password" className={`flex flex-col gap-3 w-full items-start justify-start text-[#21252C] text-base font-medium mb-4 ${darkMode ? "text-[#eff1f4]  " : "text-[#21252C]"}  `} >
          Confirm Password
          <div className={`w-full rounded-lg border border-[#CFD5DB] flex items-center justify-start overflow-hidden     ${darkMode ? "bg-[#2B303A]" : "bg-white"}`} >
            <input
              type={showConfirmPassword ? "text" : "password"}
              id='confirmPassword'
              name='confirmPassword'
              className={` flex-grow p-4 border-none   outline-none text-base font-medium ${darkMode ? "placeholder-[#6D7688] text-[#EFF1F4] bg-[#2B303A] focus:border border-[#6D7688] " : " text-[#21252C] placeholder-[#BABFC5] bg-white"} `}
              placeholder='Confirm password'
              value={formData.confirmPassword}
              onChange={handleChange}
              required />
            <button onClick={toggleconfirmVisibility} type='button' className={`w-12 h-12 flex items-center justify-center cursor-pointer ${darkMode ? "text-[#BABFC5]" : "text-[#BABFC5] "}`} >  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}  </button>
          </div>
        </label>





        <button type='submit' className={`w-full  p-4  text-base font-semibold rounded-[8px] my-4 ${darkMode ? "text-[#21252C] bg-[#D7E0EE] " : "text-[#FFFFFF] bg-[#21252C]"} `} >Sign In</button>

        <p className='text-[#F33D3D] text-sm font-normal '>{errorMessage}  </p>





      </form>



      {/* remebered password */}
      <p
        className={`text-sm font-normal mt-6 ${darkMode ? "text-[#8A9199]" : "text-[#76889A]"
          }`}
      >
        Remembered password?{" "}
        <a onClick={() => navigate("/sign-in")} href="#" className={`${darkMode ? "text-white" : "text-[#21252C]"}`}>
          Sign in
        </a>
      </p>







    </div>
  )
}

export default ChangePassword