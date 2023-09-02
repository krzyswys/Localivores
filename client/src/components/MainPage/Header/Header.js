import React, { useState, useEffect } from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";


import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../UI/Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import AccountSlider from "./AccountSlider/AccountSlider";
import AdressInput from "./AdressInput/AdressInput";
import ShoppingCart from "../../ShoppingCart/ShoppingCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const [isCartShown, setIsCartShown] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };
  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  const handleCartToggle = () => {
    setIsCartShown(!isCartShown);
  };

  const bottomLeftRadius = 150 - scrollValue * 0.8 + "px";
  const bottomRightRadius = 150 - scrollValue * 0.8 + "px";
  const divStyle = {
    borderBottomLeftRadius: bottomLeftRadius,
    borderBottomRightRadius: bottomRightRadius,
  };

  const handleScroll = () => {
    const scrollValue = window.scrollY;
    setScrollValue(scrollValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isOnHomePage = () => {
    return location.pathname === "/";
  };

  return (
    <div
      className="main-header-container"
      style={{
        position: isOnHomePage ? "static" : "sticky",
        top: isOnHomePage ? "auto" : 0,
      }}
    >
      <AccountSlider
        handleMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
      />
      
      <ShoppingCart show={isCartShown} onClick={handleCartToggle}/>
      

      <div className="searchBar-container " style={divStyle}>
        <header className="header">
          <Logo onClick={navigateHandler} />
          {/* <div className='account'> */}
          <SearchBar />

          <div className="open-account-menu-button">
            <FaShoppingCart className="icon" onClick={handleCartToggle} />
            <RiAccountCircleFill className="icon" onClick={handleMenuToggle} />
          </div>

          {/* <button className='login-button'>Log in</button> */}
          {/* <button className='register-button'>Register</button> */}
          {/* </div> */}
        </header>
        {isOnHomePage() && <h3>Find best quality product in your area</h3>}
        {isOnHomePage() && <AdressInput />}
      </div>
    </div>
  );
};
export default Header;
