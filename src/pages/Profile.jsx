import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import { supabase } from '../utils/supabaseClient';
import Spinner from '../components/Spinner';
import { ExitToApp } from '@mui/icons-material';

const Profile = () => {
  const { signOut, session } = UserAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = session?.user;

  useEffect(() => {
    if (!session) {
      navigate("/sign-in");
      return;
    }



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

    fetchProfile();
  }, [session, navigate, user?.id]);

  if (loading) return <Spinner/>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-[#21252C]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-10">

        {/* Left: Profile Info */}
        <div className="w-full md:w-1/2 bg-gray-400 p-6 shadow rounded">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Profile Overview</h1>
            <button
              onClick={signOut}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
            >
              <ExitToApp/>
            </button>
          </div>

          {profile && (
            <div className="space-y-4 ">
              {profile.avatar_url && (
                <img
                  src={profile.avatar_url}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full border mx-auto mb-4"
                />
              )}
              <p><strong>Full Name:</strong> {profile.full_name}</p>
              <p><strong>Phone:</strong> {profile.phone_number}</p>
              <p><strong>Address:</strong> {profile.address}</p>
              <p><strong>City:</strong> {profile.city}</p>
              <p><strong>State:</strong> {profile.state}</p>
              <p><strong>Country:</strong> {profile.country}</p>
            </div>
          )}
        </div>

        {/* Right: Edit Form */}
        <div className="w-full md:w-1/2 bg-gray-400 p-6 shadow rounded">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;
