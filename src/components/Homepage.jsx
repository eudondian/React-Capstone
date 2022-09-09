import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import Cryptocurrencies from './CryptoCoins';

const { Title } = Typography;

const Homepage = () => (
  <>
    <div className="container">
      <Title level={3} className="title">
        World Crypto Statistics
      </Title>
      <div className="home-heading-container">
        <Title level={4} className="home-title">Top 12 Cryptocurrencies in the World</Title>
        <Title className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
    </div>
  </>
);

export default Homepage;
