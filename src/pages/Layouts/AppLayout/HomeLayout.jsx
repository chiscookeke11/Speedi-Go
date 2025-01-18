import React, { useEffect, useState } from 'react';
import { FaBus, FaHome, FaMapMarkedAlt, FaUser } from 'react-icons/fa';
import { FaVanShuttle } from 'react-icons/fa6';
import { Link, NavLink, Outlet } from 'react-router-dom';
import SplashScreen from '../../../components/SplashScreen';

const HomeLayout = () => {

    const [loading, setLoading] = useState(false);

    
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
        <div>
         
          <Outlet />
    
    
    
          <nav className='w-full px-8 py-6 bg-[#21252C] fixed bottom-0 left-0 flex flex-row items-center justify-between gap-3 text-[#76889A]  text-sm font-normal   ' >
    
            <NavLink to="/home-layout"  end className={({isActive}) => isActive? "text-white" : "" }  > <button className=' flex items-center gap-1 justify-center flex-col border-none outline-none text-center ' >
                <FaHome/>
                Home
            </button>
            </NavLink>
    
           <NavLink to="/home-layout/track" className={({isActive}) => isActive? "text-white" : "" }   > <button className=' flex gap-1 items-center justify-center flex-col border-none outline-none text-center'>
                <FaMapMarkedAlt />
                Track
            </button>
            </NavLink>
            
            <button className=' flex gap-1 items-center justify-center flex-col border-none outline-none text-center'>
                <FaVanShuttle/>
                Booking
            </button>
    
            <button className=' flex gap-1 items-center justify-center flex-col border-none outline-none text-center'>
                <FaUser/>
                Profile
            </button>
            
            
            
             </nav>
    
    
        </div>
      );
    };
  }







  

export default HomeLayout;
