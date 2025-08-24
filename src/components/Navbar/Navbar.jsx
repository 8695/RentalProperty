import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";


const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();
  
  const gotoHome = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
    setNavHeight(false); // Close menu after clicking login
  };

  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className="logo" onClick={() => gotoHome()}>
          <span className="logo-text">PROPERTY RENTALS</span>
          <span className="logo-accent">LUXURY</span>
        </div>
        
        <ul>
          <li>
            <Link to={"/aboutus"} onClick={() => setNavHeight(false)}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/villas"} onClick={() => setNavHeight(false)}>VILLAS</Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setNavHeight(false)}>CONTACT</Link>
          </li>
          
          {/* Mobile Login Button - Only visible in hamburger menu */}
          <li className="mobile-login-btn">
            <button onClick={handleLogin}>
              <FaUserCircle className="login-icon" />
              LOGIN
            </button>
          </li>
        </ul>
        
        {/* Desktop Login Button - Hidden on mobile */}
        <div className="nav-buttons">
          <button className="login-btn" onClick={handleLogin}>
            <FaUserCircle className="login-icon" />
            LOGIN
          </button>
        </div>
        
        <RxHamburgerMenu
          className="hamburger"
          onClick={() => setNavHeight(!navHeight)}
        />
      </nav>
    </>
  );
};

export default Navbar;