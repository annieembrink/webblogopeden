import React from "react";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import MenuComponent from "../MenuComponent/MenuComponent";
import "./HeaderComponent.css"; // if you have styling

const HeaderComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
        <div id="headerImgContainer">
            <img
                src="/img/webblogopeden-high-resolution-logo-transparent.png"
                alt="Site Logo"
                className="logo"
            />
        </div>
              {/* Menu component */}
      <MenuComponent 
      isMenuOpen={isMenuOpen} 
      toggleMenu={toggleMenu} 
      />

      <div id="menuBarContainer" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={35} color="#44745F"/> : <FiMenu size={35} color="#44745F"/>}
      </div>

      {/* Add nav or other header content here */}
    </header>
  );
};

export default HeaderComponent;
