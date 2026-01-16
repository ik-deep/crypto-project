import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/CoinInfo";
import ChartConfig from "../components/Coin/ChartConfig";
import { settingChartData } from "../functions/settingChartData";
import TogglePriceType from "../components/Coin/PriceType";
import "./comparePage.css";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1, setIsLoading);
    const data2 = await getCoinData(crypto2, setIsLoading);
    if (data1) {
      coinObject(setCrypto1Data, data1);
    }
    if (data2) {
      coinObject(setCrypto2Data, data2);
    }

    if (data1 && data2) {
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1 && prices1.length > 0 && prices2 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  }

  const handleCoinChange = async (event, isCrypto2) => {
    setIsLoading(true);
    const data = await getCoinData(event.target.value, setIsLoading);
    if (isCrypto2) {
      setCrypto2(event.target.value);
      coinObject(setCrypto2Data, data);
    } else {
      setCrypto1(event.target.value);
      coinObject(setCrypto1Data, data);
    }

    const prices1 = await getCoinPrices(crypto1, days, priceType);
    const prices2 = await getCoinPrices(crypto2, days, priceType);
    if (prices1 && prices1.length > 0 && prices2 && prices2.length > 0) {
      settingChartData(setChartData, prices1, prices2);
      setIsLoading(false);
    }
  };

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);

    if (prices1?.length > 0 && prices2?.length > 0) {
      settingChartData(setChartData, prices1, prices2);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, event.target.value);
    const prices2 = await getCoinPrices(crypto2, days, event.target.value);
    if (prices1 && prices1.length > 0 && prices2 && prices2.length > 0) {
      settingChartData(setChartData, prices1, prices2);
      setIsLoading(false);
    }
  };

  return (
    <div className="compare-page">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="compare-content">
          {/* Page Header */}
          <section className="compare-header">
            <h1 className="page-title">Compare Cryptocurrencies</h1>
            <p className="page-subtitle">Analyze and compare two cryptocurrencies side by side</p>
          </section>

          {/* Coin Selection */}
          <section className="coin-selection">
            <div className="selection-header">
              <h2 className="section-title">Select Coins to Compare</h2>
            </div>
            <div className="selection-wrapper">
              <SelectCoins
                crypto1={crypto1}
                crypto2={crypto2}
                handleCoinChange={handleCoinChange}
              />
            </div>
          </section>

          {/* Coin Comparison */}
          <section className="coins-comparison">
            <div className="section-header">
              <h2 className="section-title">Market Overview</h2>
              <p className="section-subtitle">Current market data and statistics</p>
            </div>
            <div className="comparison-grid">
              <div className="coin-card">
                <div className="coin-label">Coin 1</div>
                <List coin={crypto1Data} />
              </div>
              <div className="coin-card">
                <div className="coin-label">Coin 2</div>
                <List coin={crypto2Data} />
              </div>
            </div>
          </section>

          {/* Chart Analysis */}
          <section className="chart-analysis">
            <div className="section-header">
              <h2 className="section-title">Price Comparison Chart</h2>
              <p className="section-subtitle">Interactive price analysis and trends</p>
            </div>
            <div className="chart-container">
              <div className="chart-wrapper">
                <ChartConfig
                  chartData={chartData}
                  priceType={priceType}
                  multiAxis={true}
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
              </div>
            </div>
          </section>

          {/* Coin Information */}
          <section className="coins-info">
            <div className="section-header">
              <h2 className="section-title">Detailed Information</h2>
              <p className="section-subtitle">Learn more about these cryptocurrencies</p>
            </div>
            <div className="info-grid">
              <div className="info-card">
                <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
              </div>
              <div className="info-card">
                <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
