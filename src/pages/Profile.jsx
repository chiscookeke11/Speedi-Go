import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';

const Profile = () => {
  const { signOut, session } = UserAuth();
  const navigate = useNavigate();

  const user = session?.user;

  useEffect(() => {
    if (!session) {
      navigate("/sign-in");
    }
  }, [session, navigate]);

  // Avoid error if user is undefined
  console.log("the user metadata", user?.user_metadata?.name);

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Welcome, {user?.user_metadata?.name || "User"}!</h2>
      <button onClick={signOut}>Sign Out</button>
      <ProfileForm/>
    </div>
  );
};

export default Profile;
