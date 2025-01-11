import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnboardingScreen from './pages/Layouts/onboarding-layout/OnboardingScreen';
import Home from './pages/Layouts/onboarding-layout/Home';
import SignIn from './pages/Layouts/authentication-layout/SignIn';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
      <Route path="/" element={<OnboardingScreen />} />
      <Route path="/home" element={<Home />} />
      <Route path='/sign-in' element={<SignIn/> } />
    </Routes>
  </Router>
  );
};

export default App;
