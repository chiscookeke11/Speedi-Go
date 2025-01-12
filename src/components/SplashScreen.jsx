import React from 'react'
import 'animate.css';

const SplashScreen = ({darkMode}) => {
  return (
    <div className={`w-full h-screen flex items-center justify-center  text-white ${darkMode? "bg-[#21252C]" : "bg-[#21252C] "}   `} >
      <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1736589441/Logo_srltbt.svg" alt="logo" className='w-[161px] h-[39] object-cover animate__animated animate__lightSpeedInLeft '  />
    </div>
  )
}

export default SplashScreen