import React, { useEffect, useState } from 'react';
import SplashScreen from '../../../components/SplashScreen';
import { icons, services } from '../../../assets/assets';
import { MdFilterList } from 'react-icons/md';
import ShippingHistory from '../../../components/ShippingHistory';

const Home = () => {

  const [newMessage, setNewMessage] = useState(["hello", "hello", "hello"]);

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





        <div className="container bg-white w-full flex flex-col mb-11  ">
          <div className="services mt-4 pt-3 py-2 ">
            <h1 className='px-6 text-[#21252C] text-lg font-bold ' >Our Services</h1>


            <div className='w-full flex flex-row items-center overflow-x-auto mt-8 px-6 gap-8 py-3 ' >

              {services.map((service, index) => (
                < button key={index} className='flex items-center justify-center flex-col gap-3  border-none outline-none ' >
                  <div className='w-[72px] h-[72px] bg-[#F1F2F6] rounded-2xl flex items-center justify-center ' >
                    <img src={service.image} alt="" />
                  </div>
                  <h2 className='text-xs font-semibold text-[#21252C] text-center w-full whitespace-nowrap ' >{service.name} </h2>
                </button>
              ))}

            </div>
          </div>



          <div className="history-wrapper  mt-6 pt-3 py-2">
              <h1 className='px-5 text-[#21252C] text-lg font-bold w-full flex flex-row justify-between ' > <span>Shipping History</span>     <button> <MdFilterList/> </button></h1>

<ShippingHistory/>




          </div>





        </div>







      </div>
    );
  }
;

export default Home;
