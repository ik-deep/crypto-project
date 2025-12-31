import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import { coinObject } from "../functions/coinObject";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import ChartConfig from "../components/Coin/ChartConfig/index.js";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import SelectChartType from "../components/Coin/SelectChartType.js";
import TogglePriceType from "../components/Coin/PriceType/index.js";
import "./coinPage.css";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [chartType, setChartType] = useState("Line chart");
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  async function getData() {
    const data = await getCoinData(id, setIsLoading);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices && prices.length > 0) {
        settingChartData(setChartData, prices, "", chartType);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices && prices.length > 0) {
      settingChartData(setChartData, prices, "", chartType);
      setIsLoading(false);
    }
  };
  const handleChartChange = async (event) => {
    setChartType(event.target.value);
    const prices = await getCoinPrices(id, days, priceType);
    if (prices && prices.length > 0) {
      settingChartData(setChartData, prices, "", event.target.value);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices && prices.length > 0) {
      settingChartData(setChartData, prices, "", chartType);
      setIsLoading(false);
    }
  };

  return (
    <div className="coin-page">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="coin-content">
          {/* Coin Overview Section */}
          <section className="coin-overview">
            <div className="coin-header">
              <h1 className="page-title">Coin Analysis</h1>
              <p className="page-subtitle">Detailed insights and real-time data</p>
            </div>
            <div className="coin-stats-wrapper">
              <List coin={coinData} />
            </div>
          </section>

          {/* Chart Analysis Section */}
          <section className="chart-section">
            <div className="section-header">
              <h2 className="section-title">Price Analysis</h2>
              <p className="section-subtitle">Interactive charts and market trends</p>
            </div>
            
            <div className="chart-container">
              <div className="chart-wrapper">
                <ChartConfig
                  chartData={chartData}
                  chartType={chartType}
                  priceType={priceType}
                  multiAxis={false}
                />
              </div>
              
              <div className="chart-controls">
                <div className="controls-header">
                  <h3>Chart Settings</h3>
                </div>
                <div className="control-group">
                  <label>Price Type</label>
                  <TogglePriceType
                    priceType={priceType}
                    handlePriceTypeChange={handlePriceTypeChange}
                  />
                </div>
                <div className="control-group">
                  <label>Time Period</label>
                  <SelectDays days={days} handleDaysChange={handleDaysChange} />
                </div>
                <div className="control-group">
                  <label>Chart Type</label>
                  <SelectChartType
                    chartType={chartType}
                    handleChartChange={handleChartChange}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Coin Information Section */}
          <section className="coin-info-section">
            <div className="section-header">
              <h2 className="section-title">About {coinData.name}</h2>
              <p className="section-subtitle">Learn more about this cryptocurrency</p>
            </div>
            <div className="info-wrapper">
              <CoinInfo heading={coinData.name} desc={coinData.desc} />
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default CoinPage;
