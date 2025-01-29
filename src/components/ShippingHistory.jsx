import React from 'react';
import { shippingDetails } from '../assets/assets';
import { Link } from 'react-router-dom';

const ShippingHistory = () => {
  return (
    <div className='my-1 border-t border-[#F1F2F6] py-4 h-auto'>
      {shippingDetails.map((detail) => {
        // Determine background color and text color based on status
        const bg = () => {
          if (detail.status === 'Delivered') {
            return 'bg-[#E9FFE5] text-[#29BE10]';
          } else if (detail.status === 'Cancelled') {
            return 'bg-[#FFF8E1] text-[#FF8A00]';
          }
          return 'bg-[#FFF1F1] text-[#F33D3D]';
        };

        // Determine image URL based on status
        const deliveryImg = () => {
          if (detail.status === 'Delivered') {
            return 'https://res.cloudinary.com/dwedz2laa/image/upload/v1737164251/delivered_t2gub7.svg';
          } else if (detail.status === 'Cancelled') {
            return 'https://res.cloudinary.com/dwedz2laa/image/upload/v1737164251/cancelled_dxvrbj.svg';
          }
          return 'https://res.cloudinary.com/dwedz2laa/image/upload/v1737164971/failed_ecrkmt.svg';
        };

        return (
         <Link to={`/page/${detail.id}`}> <div
            key={detail.id}
            className='w-full flex items-start gap-2 my-6 border-b border-[#F1F2F6] py-3 px-6'
          >
            {/* Status Indicator */}
            <span className={`flex items-center justify-center w-[40px] h-[40px] rounded-[10px] ${bg()}`}>
              <img src={deliveryImg()} alt="delivery-status" />
            </span>

            

            {/* Details Section */}
            <div className='w-full flex-col flex gap-2'>
              <header className='w-full flex items-center gap-4 justify-between'>
                <span className='flex items-center flex-row gap-2'>
                  <h2 className='text-[#21252C] text-base font-semibold'>{detail.id}</h2>
                  <span className='bg-[#BABFC5] h-[4px] w-[4px] rounded-full block'></span>
                  <h4 className='text-[#BABFC5] font-normal text-sm'>{detail.date}</h4>
                </span>

                {/* Options Button */}
                <button className='flex flex-col items-center justify-center gap-1'>
                  <span className='bg-[#76889A] h-[4px] w-[4px] rounded-full block'></span>
                  <span className='bg-[#76889A] h-[4px] w-[4px] rounded-full block'></span>
                  <span className='bg-[#76889A] h-[4px] w-[4px] rounded-full block'></span>
                </button>
              </header>

              {/* Content Section */}
              <div className='content h-[200px] flex w-full items-center py-2 gap-4'>
                {/* Dashed Line */}
                <div className='dashed-line h-[90%] w-0 border-dashed border-[#CFD5DB] border relative'>
                  <span className='h-[5px] w-[5px] rounded-full bg-[#21252C] absolute top-0 left-[50%] transform translate-x-[-50%] translate-y-[-50%]'></span>
                  <span className='h-[5px] w-[5px] rounded-full bg-[#21252C] absolute top-[100%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]'></span>
                </div>

                {/* From/To Details */}
                <div className='details h-full flex flex-col items-center justify-between mt-4'>
                  <div>
                    <h2 className='text-[#BABFC5] font-normal text-sm'>From</h2>
                    <h2 className='text-[#76889A] font-normal text-sm'>{detail.from}</h2>
                  </div>
                  <div>
                    <h2 className='text-[#BABFC5] font-normal text-sm'>To</h2>
                    <h2 className='text-[#76889A] font-normal text-sm'>{detail.to}</h2>
                  </div>
                </div>
              </div>

              {/* Status Section */}
              <div className='status flex items-center gap-10 mt-3'>
                <h2 className='text-[#76889A] font-normal text-sm'>Status:</h2>
                <span
                  className={`px-8 py-4 rounded-2xl bg-[#E9FFE5] text-xs font-normal block ${bg()}`}
                >
                  {detail.status}
                </span>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ShippingHistory;
