import React from 'react'

const OnboardingContent = ({ title, description, image, buttonText, onSkip, onContinue, visibilityClass} ) => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">

        {/* header */}

        <div className='w-full flex justify-end items-center  px-6 ' >
            <button onClick={onSkip} className={`text-[#76889A] text-base font-medium  ${visibilityClass } `} >Skip</button>
        </div>

        {/* image */}
        <div className=' relative flex items-center justify-center my-16 mt-28 w-[186px] h-[186px] rounded-full bg-[#F1F2F6]  ' >
            <img src={image} alt={title} className='max-w-[240px] max-h-[150px]  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  ' />

        </div>

        {/* content */}
        <div className='text-center px-3 ' >
            <h1 className='text-[#21252C] font-semibold text-2xl my-3 mb-2  '>{title} </h1>
            <p className='text-[#76889A] text-base font-normal max-w-[335px] ' >  {description} </p>

        </div>


        {/* button */}
        <div className='mt-8  w-full flex items-center justify-center ' >
            <button onClick={onContinue} className='px-4 py-4 text-white bg-[#21252C] rounded-lg max-w-[335px] w-full font-semibold text-base  ' > {buttonText}</button>
        </div>

    
  </div>
  )
}

export default OnboardingContent