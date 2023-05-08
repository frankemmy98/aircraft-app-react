import React, { useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import logo from "../../assets/logo.png";

const Navbar = () => {
  // Toggling the Navbar on mobile screen
  const [active, setActive] = useState("navBarMenu");
  const [isNavBar, setIsNavBar] = useState(true);
  const handleNavBar = () => {
    setIsNavBar(!isNavBar);
    if (isNavBar) {
      setActive("navBarMenu showNavBar");
    } else {
      setActive("navBarMenu");
    }
  };

  // Adding Background color to the second Navbar
  const [noBg, addBg] = useState("navBarTwo");
  const handleAddBgColor = () => {
    if (window.scrollY >= 10) {
      addBg("navBarTwo navbar_With_Bg");
    } else {
      addBg("navBarTwo");
    }
  };
  window.addEventListener("scroll", handleAddBgColor);

  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>

        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate className="icon" />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal className="icon" />
            Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Up</span>
        </div>
      </div>

      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} alt="logo" className="Logo" />
        </div>

        <div className={active}>
          <ul className="menu flex">
            <li onClick={handleNavBar} className="listItem">
              Home
            </li>
            <li onClick={handleNavBar} className="listItem">
              About
            </li>
            <li onClick={handleNavBar} className="listItem">
              Offers
            </li>
            <li onClick={handleNavBar} className="listItem">
              Seats
            </li>
            <li onClick={handleNavBar} className="listItem">
              Destinations
            </li>
          </ul>

          <button onClick={handleNavBar} className="btn flex btnOne">
            Contact
          </button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div onClick={handleNavBar} className="toggleIcon">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
