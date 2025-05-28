import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FaCopy } from 'react-icons/fa';
import { supabase } from '../../../utils/supabaseClient';
import { toast } from 'sonner';
// import MapComponent from '../../../components/MapComponent';

const DynamicPage = () => {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);
  const [copiedModal, setCopiedModal] = useState(false);

  useEffect(() => {
    const fetchShipment = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching shipment:', error);
      } else {
        setShipment(data);
      }
    };

    fetchShipment();
  }, [id]);

  useEffect(() => {
    if (copiedModal) {
      const timer = setTimeout(() => setCopiedModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copiedModal]);

  const copyId = () => {
    if (shipment?.tracking_id) {
      navigator.clipboard
        .writeText(shipment.tracking_id)
        .then(() => toast.success("Copied!"))
        .catch((err) => {
          console.error("Failed to copy tracking ID:", err);
          toast.error("Failed to copy tracking ID");
        });
    }
  };

  if (!shipment) {
    return <div className="text-white p-10">Loading shipment details...</div>;
  }

  // const trackingUrl = `${window.location.origin}/page/${shipment.id}`;

  return (
    <div className='w-full min-h-screen bg-[#21252C]'>
      <div className="flex flex-col gap-8 py-10 px-7">
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

        <span className='mb-3'>
          <h1 className='text-[#FFFFFF] text-2xl font-bold'>Track your parcel</h1>
          <p className='text-[#CFD5DB] text-sm'>Track your parcel live using the tracking ID</p>
        </span>

        <div className='bg-white flex w-full flex-row px-4 rounded-lg items-center gap-3'>
          <span className='w-[10%] border-r border-[#D2D6DB] pr-3'>
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1737113217/location_searching_f0owft.svg" alt="pointer" className="w-[20px] h-[20px]" />
          </span>
          <input
            type="text"
            className='w-full px-2 py-4 outline-none border-none'
            value={shipment.tracking_id}
            disabled
          />
          <span className='w-[10%] cursor-pointer'>
            <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1737113171/QRcode_pamm9x.svg" alt="" className="w-[20px] h-[20px]" />
          </span>
        </div>
      </div>

      <div className="container bg-white w-full flex flex-col mb-11 py-3 pb-10">
        <h1 className='text-[#21252C] text-lg font-bold px-5'>Parcel Tracking</h1>

        <div className='w-full flex flex-row items-center justify-between my-3 border-t border-b border-[#F1F2F6] py-4 px-5'>
          <span className='text-sm font-normal text-[#BABFC5]'>Tracking ID:</span>
          <span className='flex items-center gap-3 text-[#76889A] text-base font-medium'>
            #{shipment.tracking_id}
            <FaCopy onClick={copyId} className='text-xl cursor-pointer' />
          </span>
        </div>

        <div className='px-5 mt-4'>
          <p className="text-[#21252C] mb-2">Status: <strong>{shipment.status}</strong></p>
          <p className="text-[#21252C] mb-2">Date: <strong>{new Date(shipment.Date).toLocaleDateString()}</strong></p>
          <p className="text-[#21252C] mb-2">Destination: <strong>{shipment.delivery_address || 'N/A'}</strong></p>
        </div>

        <div className="mt-6  mx-auto w-[95%] h-[300px] flex flex-col items-center justify-center overflow-hidden ">
   <p className='text-base font-bold ' >       Map</p>
               {/* <MapComponent /> */}
               <div className='w-8 h-8 rounded-full mx-auto my-auto border-[2px] border-b-0 border-blue-600 animate-spin ' ></div>
        </div>
      </div>

      <div className={`success w-[250px] h-[150px] px-3 py-3 flex items-center justify-center bg-green-500 fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] ${copiedModal ? "visible" : "invisible"}`}>
        <h1 className='text-white font-bold'>Tracking ID copied</h1>
      </div>
    </div>
  );
};

export default DynamicPage;
