import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';


const ProfileForm = () => {
  const [profile, setProfile] = useState({
    full_name: '',
    address: '',
    avatar_url: '',
  });

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get current user
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        // Optionally load existing profile data
        const { data: existingProfile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (existingProfile) {
          setProfile(existingProfile);
        }
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('profiles').upsert({
      id: userId,
      full_name: profile.full_name,
      address: profile.address,
      avatar_url: profile.avatar_url,
    });

    if (error) {
      alert('Error saving profile');
      console.log(error);
    } else {
      alert('Profile saved!');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            value={profile.full_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={profile.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />

          <input
            type="text"
            name="avatar_url"
            placeholder="Avatar URL"
            value={profile.avatar_url}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfileForm;
