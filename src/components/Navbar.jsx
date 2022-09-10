import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-con">
        <Typography.Title level={3}>
          <Link to="/">CryptoChart</Link>
        </Typography.Title>
      </div>
      {activeMenu && (
        <nav className="menu">
          <div>
            <Link to="/" className="menu-link">
              Home
            </Link>
          </div>
          <div>
            <Link to="/cryptocurrencies" className="menu-link">
              Cryptocurrencies
            </Link>
          </div>
          <div>
            <Link to="/cryptodetails" className="menu-link">
              Crypto Details
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
