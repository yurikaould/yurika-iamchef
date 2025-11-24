import React from 'react';
import logo from '../../../../logo/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 px-4 py-3 flex items-center justify-center fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-10 h-10 bg-white/95 rounded-xl flex items-center justify-center p-2 shadow-md backdrop-blur-sm">
          <img 
            src={logo} 
            alt="I AM CHEF Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Brand Text */}
        <h1 className="text-white font-bold text-xl tracking-wide drop-shadow-md">
          I AM CHEF
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;