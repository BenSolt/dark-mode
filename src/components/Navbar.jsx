import React, { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";
import { useDarkMode2 } from "../hooks/useDarkModeRed";
import { useDarkMode3 } from "../hooks/useDarkModeGreen";




const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);

    
  };

  // DarkMode Red
  const [darkMode2, setDarkMode2] = useDarkMode2(false);
  const toggleMode2 = e => {
    e.preventDefault();
    setDarkMode2(!darkMode2);

    
  };
  
    // DarkMode Green
  const [darkMode3, setDarkMode3] = useDarkMode3(false);
  const toggleMode3 = e => {
    e.preventDefault();
    setDarkMode3(!darkMode3);

    
  };

   



  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    
      
  {/* Dark Mode Red */}
        <div className="dark-mode__toggle">
        <div
        onClick={toggleMode2}
        className={darkMode2 ? 'toggle toggled' : 'toggle'}
        />
        </div>
      
 {/* Dark Mode Green */}
 <div className="dark-mode__toggle">
        <div
        onClick={toggleMode3}
        className={darkMode3 ? 'toggle toggled' : 'toggle'}
        />
        </div>


</nav>

  );





  
};

export default Navbar;
