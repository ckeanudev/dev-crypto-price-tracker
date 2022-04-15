import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

import "./App.css";

const apiUrl =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="coin-app">
      <div className="coin-nav">
        <div className="coin-search">
          <h1 className="coin-text">Cryptocurrency Price Tracker</h1>
          <p>
            by{" "}
            <a href="https://ckn.netlify.app/" target="_blank">
              Ckeanu.
            </a>
          </p>
          <form action="">
            <input
              type="text"
              className="coin-input"
              name=""
              id=""
              placeholder="Search a currency"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <div className="coin-grid-container">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
