import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import { UserAuth } from '../context/AuthContext';
import Spinner from './Spinner';

const ShippingHistory = () => {
  const [shippingDetails, setShippingDetails] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const { session } = UserAuth();
  const user = session?.user;

  useEffect(() => {
    if (!user) return;

    const fetchShippingHistory = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id); // ✅ Use correct column
      if (error) {
        console.log('error fetching history data', error);
      } else {
        setShippingDetails(data);
        console.log('data fetched', data);
      }
    };

    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, address, phone_number, city, state, country, avatar_url')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error.message);
      } else {
        setProfile(data);
      }
      setLoading(false);
    };

    fetchShippingHistory();
    fetchProfile();
  }, [user]); // ✅ Add user to dependencies

  if (loading) return <Spinner />;

  if (!shippingDetails.length) return <p>No shipping history found</p>;

  return (
    <div className="my-1 border-t border-[#F1F2F6] py-4 h-auto pb-[50px]">
      {shippingDetails.map((detail) => {
        const bg = () => {
          if (detail.status === 'Delivered') return 'bg-[#E9FFE5] text-[#29BE10]';
          if (detail.status === 'Cancelled') return 'bg-[#FFF8E1] text-[#FF8A00]';
          return 'bg-[#FFF1F1] text-[#F33D3D]';
        };

        const deliveryImg = () => {
          if (detail.status === 'Delivered') return 'https://res.cloudinary.com/dwedz2laa/image/upload/v1737164251/delivered_t2gub7.svg';
          if (detail.status === 'Cancelled') return 'https://res.cloudinary.com/dwedz2laa/image/upload/v1737164251/cancelled_dxvrbj.svg';
          return 'https://res.cloudinary.com/dwedz2laa/image/upload/v1737164971/failed_ecrkmt.svg';
        };

        return (
          <Link key={detail.id} to={`/page/${detail.id}`}>
            <div className="w-full flex items-start gap-2 my-6 border-b border-[#F1F2F6] py-3 px-6">
              <span className={`flex items-center justify-center w-[40px] h-[40px] rounded-[10px] ${bg()}`}>
                <img src={deliveryImg()} alt="delivery-status" />
              </span>

              <div className="w-full flex-col flex gap-2">
                <header className="w-full flex items-center gap-4 justify-between">
                  <span className="flex items-center flex-row gap-2">
                    <h2 className="text-[#21252C] text-base font-semibold">{detail.tracking_id}</h2>
                    <span className="bg-[#BABFC5] h-[4px] w-[4px] rounded-full block"></span>
                    <h4 className="text-[#BABFC5] font-normal text-sm">{detail.Date}</h4>
                  </span>
                  <button className="flex flex-col items-center justify-center gap-1">
                    <span className="bg-[#76889A] h-[4px] w-[4px] rounded-full block"></span>
                    <span className="bg-[#76889A] h-[4px] w-[4px] rounded-full block"></span>
                    <span className="bg-[#76889A] h-[4px] w-[4px] rounded-full block"></span>
                  </button>
                </header>

                <div className="content h-[200px] flex w-full items-center py-2 gap-4">
                  <div className="dashed-line h-[90%] w-0 border-dashed border-[#CFD5DB] border relative">
                    <span className="h-[5px] w-[5px] rounded-full bg-[#21252C] absolute top-0 left-[50%] transform translate-x-[-50%] translate-y-[-50%]"></span>
                    <span className="h-[5px] w-[5px] rounded-full bg-[#21252C] absolute top-[100%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"></span>
                  </div>

                  <div className="details h-full flex flex-col items-center justify-between mt-4">
                    <div>
                      <h2 className="text-[#BABFC5] font-normal text-sm">From</h2>
                      <h2 className="text-[#76889A] font-normal text-sm">{profile?.address}</h2>
                    </div>
                    <div>
                      <h2 className="text-[#BABFC5] font-normal text-sm">To:</h2>
                      <h2 className="text-[#BABFC5] font-normal text-sm">{detail.Reciepient} </h2>
                      <h2 className="text-[#76889A] font-normal text-sm">{detail.delivery_address}</h2>
                    </div>
                  </div>
                </div>

                <div className="status flex items-center gap-10 mt-3">
                  <h2 className="text-[#76889A] font-normal text-sm">Status:</h2>
                  <span className={`px-8 py-4 rounded-2xl text-xs font-normal block ${bg()}`}>
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
