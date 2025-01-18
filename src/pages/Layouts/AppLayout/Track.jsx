import React from 'react'
import { FaCopy } from 'react-icons/fa'

const Track = () => {
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












    <div className="container bg-white w-full flex flex-col mb-11  py-3  ">
      <h1 className='text-[#21252C] text-lg font-bold px-5 ' >Parcel Tracking</h1>

      <div className='w-full flex flex-row items-center justify-between my-3 border-t border-b border-[#F1F2F6] py-4 px-5 ' >
        <span className='text-sm font-normal text-[#BABFC5] ' >Tracking ID:</span>
        <span className='flex items-center gap-3 text-[#76889A] text-base font-medium ' >#9R9G87R <FaCopy className='text-xl ' /> </span>
      </div>

      



      </div>

    </div>
  )
}

export default Track