import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingScreen from './pages/Layouts/onboarding-layout/OnboardingScreen';
import SignIn from './pages/Layouts/authentication-layout/SignIn';
import Home from './pages/Layouts/AppLayout/Home';
import ForgotPassword from './pages/Layouts/authentication-layout/ForgotPassword';
import OtpPage from './pages/Layouts/authentication-layout/OtpPage';
import ChangePassword from './pages/Layouts/authentication-layout/ChangePassword';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const[darkMode, setDarkMode] = useState(false)

  const lightMode = () => {
    return darkMode !== true
 }

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

  return (<Router>
    <Routes>
      <Route path="/" element={<OnboardingScreen darkMode={darkMode} lightMode={lightMode()} />} />
      <Route path="/home" element={ <Home darkMode={darkMode}/>} />
      <Route path='/sign-in' element={<SignIn darkMode={darkMode}/> } />
      <Route path='/forgot-password' element={<ForgotPassword darkMode={darkMode} /> } />
      <Route path='/otp-page' element={<OtpPage darkMode={darkMode} /> }/>
      <Route path='/change-password' element={<ChangePassword darkMode={darkMode} />} />
    </Routes>
  </Router>
  );
};

export default App;
