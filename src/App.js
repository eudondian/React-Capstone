import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Space } from 'antd';

import { Navbar, Cryptocurrencies } from './components';
import Homepage from './components/Homepage';
import CryptoDetails from './components/CryptoDetails';
import './App.css';

const App = () => (
  <div className="app-body">
    <div className="nav">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route exact path="/cryptodetails" element={<CryptoDetails />} />
          </Routes>
        </div>
      </Layout>

      <div className="footer-section">
        <Space>
          <Link to="/" className="space-box">Home</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
