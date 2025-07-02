import React, { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import MenuComponent from "../MenuComponent/MenuComponent";
import "./HeaderComponent.css";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
const [open, setOpen] = useState(false);
const [activePage, setActivePage] = useState("Hem");

const toggleMenu = () => {
setOpen(prev => !prev);
};

const navigate = useNavigate();

const handleLogoClick = () => {
  navigate("/");
};

return (
<header className="header">
<div id="headerImgContainer" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
  <img
    src="/img/webblogopeden-high-resolution-logo-transparent.png"
    alt="Site Logo"
    className="logo"
  />
</div>


  {open && (
  <MenuComponent open={open} setOpen={setOpen} setActivePage={setActivePage} />
  )}

  <div id="menuBarContainer" onClick={toggleMenu} style={{ cursor: "pointer" }}>
    {open ?
    <FiX size={35} color="#44745F" /> :
    <FiMenu size={35} color="#44745F" />}
  </div>

</header>
);
};

export default HeaderComponent;