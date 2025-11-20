import React, { useEffect } from 'react';
import logo from '../logo/logo.png';
import '../styles/SplashScreen.css';

interface SplashScreenProps {
  onSplashEnd: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onSplashEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashEnd();
    }, 3000); // 3 secondi di splash screen

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src={logo} alt="I AM CHEF Logo" className="splash-logo" />
      </div>
    </div>
  );
};

export default SplashScreen;