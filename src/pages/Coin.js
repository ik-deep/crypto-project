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
import { Chart as ChartJS } from "chart.js/auto";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import SelectChartType from "../components/Coin/SelectChartType.js";
import TogglePriceType from "../components/Coin/PriceType/index.js";

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
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper chart-box">
          
        <div className="grey-wrapper">
            <ChartConfig
              chartData={chartData}
              chartType={chartType}
              priceType={priceType}
              multiAxis={false}
            />
   
            </div>
         
            <div className="filter-options">
              <TogglePriceType
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />
              <SelectDays days={days} handleDaysChange={handleDaysChange} />
              <SelectChartType
                chartType={chartType}
                handleChartChange={handleChartChange}
              />
            </div>
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
          </>
      )}
    </div>
  );
};

export default CoinPage;
