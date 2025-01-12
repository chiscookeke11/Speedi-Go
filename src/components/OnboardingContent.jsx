import React from 'react'

const OnboardingContent = ({ title, description, image, buttonText, onSkip, onContinue, visibilityClass, darkMode, firstScreen, secondScreen, thirdScreen, lightMode, showFirstScreen, showSecondScreen, showThirdScreen } ) => {


  

    const firstMarker = () => {
        if (darkMode && firstScreen === true) {
          return "bg-[#EFF1F4] ";
        } else if (darkMode && firstScreen !== true) {
            return " bg-[#2B303A] "
        }
      };

      const secondMarker = () => {
        if (darkMode && secondScreen === true) {
          return "bg-[#EFF1F4] ";
        } else if (darkMode && secondScreen !== true) {
            return " bg-[#2B303A] "
        }
      };
      const thirdMarker = () => {
        if (darkMode && thirdScreen === true) {
          return "bg-[#EFF1F4] ";
        } else if (darkMode && thirdScreen !== true) {
            return " bg-[#2B303A] "
        }
      };

      const lightFirstMarker = () => {
        if(lightMode && firstScreen === true){
            return "bg-[#21252C]"
        }
        else if (lightMode && firstScreen !== true){
            return "bg-[#D2D6DB]"
        }
      }

      const lightSecondMarker = () => {
        if(lightMode && secondScreen === true){
            return "bg-[#21252C]"
        }
        else if (lightMode && secondScreen !== true){
            return "bg-[#D2D6DB]"
        }
      }
      const lightThirdMarker = () => {
        if(lightMode && thirdScreen === true){
            return "bg-[#21252C]"
        }
        else if (lightMode && thirdScreen !== true){
            return "bg-[#D2D6DB]"
        }
      }
      
      

  return (
    <div className={`w-full h-screen flex flex-col items-center justify-center  relative ${darkMode? "bg-[#141924] " : "bg-white" } `} >

        {/* header */}

        <div className='w-full flex justify-end items-center absolute right-[8%] top-[7%] ' >
            <button onClick={onSkip} className={` text-base font-medium  ${visibilityClass } ${darkMode? "text-[#8A9199] " : "text-[#76889A]" } `} >Skip</button>
        </div>

        {/* image */}
        <div className={` relative flex items-center justify-center my-16 mt-28 w-[186px] h-[186px] rounded-full   ${darkMode? "bg-[#1C222D] " : "bg-[#F1F2F6]"} `} >
            <img src={image} alt={title} className='max-w-[240px] max-h-[150px]  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  ' />

        </div>

        {/* content */}
        <div className='text-center px-3 ' >
            <h1 className={` font-semibold text-2xl my-3 mb-2 ${darkMode? "text-[#EFF1F4] " : "text-[#21252C]" } `} >{title} </h1>
            <p className={`text-base font-normal max-w-[335px] ${darkMode? "text-[#8A9199] " : "text-[#76889A] "} `} >  {description} </p>

        </div>


        {/* button */}
        <div className='mt-8  w-full flex items-center justify-center ' >
            <button onClick={onContinue} className={`px-4 py-4   rounded-lg max-w-[335px] w-full font-semibold text-base  ${darkMode? "bg-[#D7E0EE] text-[#21252C] " : "bg-[#21252C] text-white"}`} > {buttonText}</button>
        </div>

        <div className='markers flex items-center justify-center mb-2 mt-12 gap-2  ' >
            <span onClick={showFirstScreen} className={`block h-1 w-6 rounded-[2px] cursor-pointer ${firstMarker()} ${lightFirstMarker()}  `} ></span>
            <span onClick={showSecondScreen} className={`block h-1 w-6 rounded-[2px] cursor-pointer ${secondMarker()} ${lightSecondMarker()}   `} ></span>
            <span onClick={showThirdScreen} className={`block h-1 w-6  rounded-[2px] cursor-pointer ${thirdMarker()} ${lightThirdMarker()}  `}></span>

        </div>

      
  </div>
  )
}

export default OnboardingContent
