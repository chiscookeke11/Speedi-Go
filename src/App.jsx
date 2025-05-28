import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import OnboardingScreen from './pages/Layouts/onboarding-layout/OnboardingScreen';
import SignIn from './pages/Layouts/authentication-layout/SignIn';
import Home from './pages/Layouts/AppLayout/Home';
import ForgotPassword from './pages/Layouts/authentication-layout/ForgotPassword';
import OtpPage from './pages/Layouts/authentication-layout/OtpPage';
import ChangePassword from './pages/Layouts/authentication-layout/ChangePassword';
import HomeLayout from './pages/Layouts/AppLayout/HomeLayout';
import Track from './pages/Layouts/AppLayout/Track';
import QRcodePage from './pages/Layouts/AppLayout/QRcodePage';
import DynamicPage from './pages/Layouts/AppLayout/DynamicPage';
import SignUp from './pages/Layouts/authentication-layout/SignUp';
import Profile from './pages/Profile';
import { Toaster } from 'sonner';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [darkMode, setDarkMode] = useState(false);

  const lightMode = () => !darkMode;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMobile) {
    return (
      <div className="flex h-screen items-center justify-center w-full">
        <h1>Desktop view is not supported.</h1>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Main Onboarding Route */}
        <Route
          path="/"
          element={<OnboardingScreen darkMode={darkMode} lightMode={lightMode()} />}
        />

        {/* Home Layout with Nested Routes */}
        <Route path="/home-layout" element={<HomeLayout darkMode={darkMode} />}>
          <Route  index element={<Home darkMode={darkMode} />} />
          <Route path='track' element={<Track/>} />
          <Route path='profile' element={<Profile/>} />
        </Route>

        {/* Authentication Routes */}
        <Route path="/sign-in" element={<SignIn darkMode={darkMode} />} />
        <Route path="/forgot-password" element={<ForgotPassword darkMode={darkMode} />} />
        <Route path="/otp-page" element={<OtpPage darkMode={darkMode} />} />
        <Route path="/change-password" element={<ChangePassword darkMode={darkMode} />} />
        <Route path="/SignUp" element={<SignUp darkMode={darkMode} />} />




{/* Auxillary pages */}
        <Route path="/Qrcode" element={<QRcodePage darkMode={darkMode}/> } />
        <Route  path="/page/:id" element={<DynamicPage/>} />
      </Routes>
        <Toaster />
    </BrowserRouter>
  );
};

export default App;
