import React from "react";
import "./styles.css";
import { TrendingDownRounded, TrendingUpRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";
import { Link } from "react-router-dom";

function List({ coin }) {
  //   console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className="list-row">
      <Tooltip title="Coin Logo" placement="bottom-start">
        <td className="td-image">
          <img className="coin-logo" src={coin.image}></img>
        </td>
      </Tooltip>

      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      <Tooltip title="Price Change in 24Hrs" placement="bottom-start">
        {coin.price_change_percentage_24h &&
        coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <div className="price-chip">
              +{coin.price_change_percentage_24h.toFixed(2)}%
            </div>

            <div className="icon-chip td-icon">
              <TrendingUpRounded />
            </div>
          </td>
        ) : (
          <td className="chip-flex">
            <div className="price-chip chip-red ">
              {coin.price_change_percentage_24h &&
                coin.price_change_percentage_24h.toFixed(2)}
              %
            </div>

            <div className="icon-chip chip-red td-icon">
              <TrendingDownRounded />
            </div>
          </td>
        )}
      </Tooltip>
      <Tooltip title="Current price" placement="bottom">
      <td>
        <h3
          className="coin-price td-center-align"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement="bottom">
        <td>
          <p className="total_valume td-right-align td-total-volume">
            {coin.total_volume.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom">
        <td  className="desktop-td-mkt">
          <p className="total_valume td-right-align">
            ${coin.market_cap.toLocaleString()}
          </p>
        </td>
      </Tooltip>
      <Tooltip title="Market Cap" placement="bottom">
        <td className="mobile-td-mkt">
          <p className="total_valume td-right-align">
            ${convertNumbers(coin.market_cap)}
          </p>
        </td>
      </Tooltip>
    </tr>
    </Link>
  );
}

export default List;
