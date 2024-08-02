import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">COZY HAVEN STAYS</span>
        <div className="navItems">
          {isLoggedIn ? (
            <>
              <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
              <button onClick={handleLogout} className="navButton">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register" className="navButton">Register</Link>
              <Link to="/login" className="navButton">Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
