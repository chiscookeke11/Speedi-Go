import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import OnboardingContent from '../../../components/OnboardingContent';
import SplashScreen from '../../../components/SplashScreen';

const screens = [
    {
        id: 1,
        title: "Ship Your Parcel",
        description: "Experience smooth and completely stress free shipping of your parcel",
        image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1736592169/Car_pkppsb.svg",
        buttonText: "Continue"
    },
    {
        id: 2,
        title: "Ship International",
        description: "Ship your parcel internationally with our reliable shipping service",
        image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1736592169/ship_nqfka6.svg",
        buttonText: "Continue"
    },
    {
        id: 3,
        title: "Track Your Parcel",
        description: "Stay informed about the parcel and get the real-time location",
        image: "https://res.cloudinary.com/dwedz2laa/image/upload/v1736592171/map_vpj4ga.svg",
        buttonText: "Get Started"
    },
]


const OnboardingScreen = ({darkMode, lightMode}) => {

const [currentScreen, setCurrentScreen] = useState(0);
const [showSplash, setShowSplash] = useState(true);

const navigate = useNavigate()
useEffect(()=> {
    const timer = setTimeout(()=> {
        setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
}, []);

const handleSkip = () => {
    setCurrentScreen(screens.length - 1)
};

const handleContinue = () => {
    if (currentScreen < screens.length -1 ){
        setCurrentScreen(currentScreen + 1)
    }
    else{
        navigate('/sign-in')
    }
};
if (showSplash){
    return <SplashScreen darkMode={darkMode} />
}
const showFirstScreen = () => {
    setCurrentScreen(screens.length - 3)
}
const showSecondScreen = () => {
    setCurrentScreen(screens.length - 2)
}
const showThirdScreen = () => {
    setCurrentScreen(screens.length - 1)
}







  return (
    <div className='h-screen w-full bg-red-800'  >
        <OnboardingContent 
        title={screens[currentScreen].title}
        description={screens[currentScreen].description}
        image={screens[currentScreen].image}
        buttonText={screens[currentScreen].buttonText}
        onSkip={handleSkip}
        onContinue={handleContinue}
        visibilityClass= { currentScreen === screens.length -1 ? "hidden" : "block" } 
        darkMode={darkMode}
        firstScreen = {currentScreen === screens.length - 3  }
        secondScreen = {currentScreen === screens.length - 2 }
        thirdScreen = {currentScreen === screens.length - 1  }
        lightMode = {lightMode}
        showFirstScreen = {showFirstScreen}
        showSecondScreen ={showSecondScreen}
        showThirdScreen={showThirdScreen}
        />
    </div>
  )
}

export default OnboardingScreen