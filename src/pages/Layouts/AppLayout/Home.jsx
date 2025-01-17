import React, { useEffect, useState } from 'react';
import SplashScreen from '../../../components/SplashScreen';
import icons from '../../../assets/assets'; 
import { FaBell } from 'react-icons/fa6';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState(["hello", "hello", "hello"]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  } else {
    return (
      <div className="w-full min-h-screen bg-[#21252C]">
        <div className="flex flex-col gap-8 py-10 px-7">
          <span className="w-full flex flex-row items-center justify-between">
            <img
              src="https://res.cloudinary.com/dwedz2laa/image/upload/v1736589441/Logo_srltbt.svg"
              alt="logo"
              className="w-[151px] h-[39px] object-contain"
            />
            <span>
              <img
                src={newMessage.length > 0 ? icons.notificationBell : icons.notificationBell }
                alt="notification bell"
              />
            </span>
          </span>

          <span>
            <h1 className='text-[#FFFFFF] text-2xl font-bold text-left mb-2 ' >Track your parcel</h1>
            <p className='text-[#CFD5DB] text-sm font-normal ' >Enter your parcel tracking number to track your parcel live</p>
          </span>

          <div className='bg-white flex w-full flex-row px-4 rounded-lg items-center  ' >

            <span className='w-[10%] ' ><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1737113217/location_searching_f0owft.svg" alt="pointer" /> </span>

            <input type="text" className='w-full px-2 py-4 outline-none border-none'  />

            <span className='w-[10%]  cursor-pointer'><img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1737113171/QRcode_pamm9x.svg " alt="" /></span>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
