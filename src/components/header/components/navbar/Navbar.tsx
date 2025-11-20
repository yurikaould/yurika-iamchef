import React from 'react';
import logo from '../../../../logo/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-green-500 px-4 py-3 flex items-center justify-center fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-2">
          <img 
            src={logo} 
            alt="I AM CHEF Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Brand Text */}
        <h1 className="text-white font-bold text-xl tracking-wide">
          I AM CHEF
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;