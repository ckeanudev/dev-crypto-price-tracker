import React from "react";

import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" srcset="" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <div className="inner-coin">
            <p className="coin-title-desc">Current Price:</p>
            <p className="coin-description">₱ {price.toLocaleString()}</p>
          </div>
          <div className="inner-coin">
            <p className="coin-title-desc">Total Volume:</p>
            <p className="coin-description">₱ {volume.toLocaleString()}</p>
          </div>

          {priceChange < 0 ? (
            <div className="inner-coin">
              <p className="coin-title-desc">Price Change Percentage:</p>
              <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
            </div>
          ) : (
            <div className="inner-coin">
              <p className="coin-title-desc">Price Change Percentage:</p>
              <p className="coin-percent green">+{priceChange.toFixed(2)}%</p>
            </div>
          )}
          <div className="inner-coin">
            <p className="coin-title-desc">Market Cap:</p>
            <p className="coin-description">₱ {marketcap.toLocaleString()}</p>
          </div>
          <div className="inner-coin"></div>
          <div className="inner-coin"></div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
