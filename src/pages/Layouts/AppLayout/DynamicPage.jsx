import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { shippingDetails } from '../../../assets/assets';
import QRCode from 'react-qr-code';
import { FaCopy } from 'react-icons/fa';

const DynamicPage = () => {
  const { pageId } = useParams(); 
  const shipment  = shippingDetails.find((item) => item.id === pageId);
  const trackingUrl = `${window.location.origin}/page/${shipment.id}`;

  const [copiedModal, setCopiedModal] =  useState(false)

  const copiedTrackingId = shipment.trackingId


  useEffect(() => {
    if (copiedModal) {
      const timer = setTimeout(() => {
        setCopiedModal(false);
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [copiedModal]);

  const copyId = () => {
    navigator.clipboard
    .writeText(copiedTrackingId)
    .then(() => {
      setCopiedModal(true)
    })
    .catch((err)=> {
      console.error("failed to copy trackingId:", err);
      alert("failed to copy trackingId");
    });
  }

  return (
    <div className='w-full min-h-screen bg-[#21252C]' >
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
            <span className='flex items-center gap-3 text-[#76889A] text-base font-medium ' >#9R9G87R <FaCopy onClick={copyId} className='text-xl ' /> </span>
          </div>

          </div>


      <h3>{pageId}</h3>
      {shipment.date}
      {shipment.trackingId}
      hey
      <QRCode value={trackingUrl} />

      <div className={`success w-[250px] h-[150px] px-3 py-3 flex items-center justify-center bg-green-500 fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ${copiedModal? "visible" : "invisible" } `} >
        <h1>Tracking Id copied</h1>

      </div>
    </div>
  );
};

export default DynamicPage;
