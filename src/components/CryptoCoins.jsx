import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import {
  Card, Row, Col, Input,
} from 'antd';
import { useGetCryptoCoinsQuery } from '../services/cryptoApi';
import Loader from './Loader';

// eslint-disable-next-line react/prop-types
const CryptoCoins = ({ simplified }) => {
  const displayCount = simplified ? 12 : 100;
  const { data: cryptoList, isFetching } = useGetCryptoCoinsQuery(displayCount);
  const [crypto, setCrypto] = useState([]);
  const [searchCoin, setSearchCoin] = useState('');

  useEffect(() => {
    // eslint-disable-next-line max-len
    const filteredCoins = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchCoin.toLowerCase()));

    setCrypto(filteredCoins);
  }, [cryptoList, searchCoin]);
  if (isFetching) return <Loader />;

  return (
    <>
      <div className="container">
        {!simplified && (
          <div className="search-crypto">
            <Input
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchCoin(e.target.value)}
              className="input"
            />
          </div>
        )}
        <Row gutter={[32, 32]} className="crypto-card-group">
          {crypto?.map((currency) => (
            <Col
              xs={12}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.id}
            >
              <Link to={`/crypto/${currency.id}`} className="link">
                <Card
                  className="card"
                  title={`${currency.rank}.${currency.name}`}
                  extra={(
                    <img
                      className="crypto-img"
                      src={currency.iconUrl}
                      alt="coin logo"
                    />
                  )}
                  hoverable
                >
                  <p>
                    Price:
                    {' '}
                    {millify(currency.price)}
                  </p>
                  <p>
                    Market Cap:
                    {' '}
                    {millify(currency.marketCap)}
                  </p>
                  <p>
                    Daily Change:
                    {' '}
                    {millify(currency.change)}
                    %
                  </p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default CryptoCoins;
