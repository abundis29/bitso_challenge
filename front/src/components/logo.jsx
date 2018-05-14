import React from 'react';
import logo from '../assets/Images/2x/bitso_logo.png'; // Tell Webpack this JS file uses this image

// console.log(logo); // /logo.84287d09.png

function Logo() {
  // Import result is the URL of your image
  return <img className="logo" src={logo} alt="Logo" />;
}

export default Logo;