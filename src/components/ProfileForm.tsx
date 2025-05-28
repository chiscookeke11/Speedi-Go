import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { getNames } from 'country-list';

const ProfileForm = () => {
  const [profile, setProfile] = useState({
    full_name: '',
    phone_number: '00000000000',
    address: '',
    city: '',
    state: '',
    country: '',
    avatar_url: '',
  });

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [avatarFile, setAvatarFile] = useState(null); // State to hold the selected file
  const countries = getNames();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
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

  // Handle avatar file change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  let avatarUrl = profile.avatar_url;

  // If there's a new file, upload it and get the URL
  if (avatarFile) {
    const fileExt = avatarFile.name.split('.').pop();
    const filePath = `${userId}/avatar.${fileExt}`;
    const { data, error } = await supabase.storage
      .from('avatars') // Assuming you've set up a storage bucket named 'avatars'
      .upload(filePath, avatarFile);

    if (error) {
      alert('Error uploading avatar image', error.message);
      console.log(error);
      setLoading(false);
      return;
    }

    // Getting the public URL of the uploaded image
    avatarUrl = supabase.storage.from('avatars').getPublicUrl(filePath).publicURL;
  }

  // Ensure avatarUrl is valid before calling upsert
  console.log("Avatar URL:", avatarUrl);

  const { data, error } = await supabase.from('profiles').upsert(
    {
      id: userId, // This ensures you're updating the existing profile
      ...profile,
      avatar_url: avatarUrl, // Save the avatar URL
    },
    { onConflict: ['id'] } // Ensure the update happens based on 'id' field conflict
  );

  if (error) {
    alert('Error saving profile', error.message);
    console.log(error);
  } else {
    setSuccessMessage('Profile updated successfully!');
    setProfile({
      full_name: '',
      phone_number: '',
      address: '',
      city: '',
      state: '',
      country: '',
      avatar_url: '',
    });
    setTimeout(() => setSuccessMessage(''), 3000);
  }

  setLoading(false);
};


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Edit Your Profile</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={profile.full_name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />

            {/* <input
              type="text"
              name="phone_number"
              placeholder="Phone Number"
              value={profile.phone_number}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            /> */}

            <input
              type="text"
              name="address"
              placeholder="Street Address"
              value={profile.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={profile.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={profile.state}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />

            <select
              name="country"
              value={profile.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* Avatar upload */}
          <input
            type="file"
            name="avatar"
            onChange={handleAvatarChange}
            className="w-full px-3 py-2 border rounded"
          />

          {/* Display avatar preview if there is a file */}
          {avatarFile && (
            <img
              src={URL.createObjectURL(avatarFile)}
              alt="Avatar Preview"
              className="w-20 h-20 rounded-full mx-auto mt-2"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Profile'}
          </button>

          {successMessage && (
            <p className="text-green-600 text-center mt-2">{successMessage}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default ProfileForm;
