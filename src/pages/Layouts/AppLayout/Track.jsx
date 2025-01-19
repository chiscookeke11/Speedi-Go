import React from 'react'
import { FaCopy } from 'react-icons/fa'
import { shippingDetails, steps } from '../../../assets/assets'

const Track = () => {

  const currentId = shippingDetails.trackingId


  console.log(currentId)
  





  return (
    <div className="w-full min-h-screen bg-[#21252C]  ">
    <div className="flex flex-col gap-8 py-10 px-7 ">
      <span className="w-full flex flex-row items-center justify-between">
        <img
          src="https://res.cloudinary.com/dwedz2laa/image/upload/v1736589441/Logo_srltbt.svg"
          alt="logo"
          className="w-[151px] h-[39px] object-contain"
        />
        <span>
          <img
            src="https://res.cloudinary.com/dwedz2laa/image/upload/v1737113146/notifications_vffj72.svg"
            alt="notification bell"
          />
        </span>
      </span>

      <span className='mb-3' >
        <h1 className='text-[#FFFFFF] text-2xl font-bold text-left mb-2 ' >Track your parcel</h1>
        <p className='text-[#CFD5DB] text-sm font-normal ' >Enter your parcel tracking number to track your parcel live</p>
      </span>

      <div className='bg-white flex w-full flex-row px-4 rounded-lg items-center  gap-3 ' >

        <span className='w-[10%] border-r border-[#D2D6DB] pr-3   ' ><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1737113217/location_searching_f0owft.svg" alt="pointer" className="w-[20px] h-[20px]" /> </span>

        <input type="text" className='w-full px-2 py-4 outline-none border-none' />

        <span className='w-[10%]  cursor-pointer'><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1737113171/QRcode_pamm9x.svg " alt="" className="w-[20px] h-[20px]" /></span>
      </div>
    </div>












    <div className="container bg-white w-full flex flex-col mb-11 py-3 pb-10  ">
      <h1 className='text-[#21252C] text-lg font-bold px-5 ' >Parcel Tracking</h1>

      <div className='w-full flex flex-row items-center justify-between my-3 border-t border-b border-[#F1F2F6] py-4 px-5 ' >
        <span className='text-sm font-normal text-[#BABFC5] ' >Tracking ID:</span>
        <span className='flex items-center gap-3 text-[#76889A] text-base font-medium ' >#9R9G87R <FaCopy className='text-xl ' /> </span>
      </div>


      <div className='w-full flex items-center justify-between px-6 py-4 gap-3  border-t border-b border-[#F1F2F6]  ' >  
         <div className='w-1/2' >
          <h2 className='text-[#BABFC5] font-normal text-sm mb-2 ' >From</h2>
          <p className='text-[#76889A] font-normal text-sm ' >1234 Elm Street Springfield, IL 62701</p>
         </div>


         <div className='w-1/2'>
          <h2 className='text-[#BABFC5] font-normal text-sm mb-2 '>To</h2>
          <p  className='text-[#76889A] font-normal text-sm '>5678 Maple Avenue Seattle, WA 98101</p>
         </div>
      </div>

      <div className='w-full flex items-center justify-between px-6 py-3 border-t border-b border-[#F1F2F6] ' >
        <p  className='text-[#BABFC5] font-normal text-sm '>Recipient:</p>
        <p className='text-[#76889A] font-normal text-sm '>Jonathan Anderson</p>
      </div>

      <div className='w-full flex items-center justify-between px-6 py-3 border-t border-b border-[#F1F2F6] '>
        <p className='text-[#BABFC5] font-normal text-sm '>Est. Delivery:</p>
        <p className='text-[#76889A] font-normal text-sm '>20 Sept 2023</p>
      </div>






      <div className='w-full px-6 py-8 ' >
      <div className="flex flex-col p-4 gap-8">
  {steps.map((step, index) => (
    <div className="flex items-start" key={index}>
      <div className="flex flex-col items-center mr-4">
        <div
          className={`w-6 h-6 flex items-center justify-center border-2 rounded-full ${
            step.completed ? "border-green-500 bg-green-500 text-white" : "border-gray-300 bg-white"
          }`}
        >
          ✓
        </div>
        {index !== steps.length - 1 && (
          <div className="w-[2px] h-8 bg-gray-300"></div>
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-500">{step.date}</p>
        <p
          className={`text-base font-semibold ${
            step.completed ? "text-green-500" : "text-gray-800"
          }`}
        >
          {step.status}
        </p>
        <p className="text-sm text-gray-500">{step.description}</p>
      </div>
    </div>
  ))}
</div>


      </div>

      



      </div>



      





    </div>
  )
}

export default Track