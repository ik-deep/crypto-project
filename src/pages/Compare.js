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
import SelectChartType from "../components/Coin/SelectChartType.js";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [chartType, setChartType] = useState("Line chart");

  useEffect(() => {
    getData();
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
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2, chartType);
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
    if (prices1.length > 0 && prices2.length > 0) {
      settingChartData(setChartData, prices1, prices2, chartType);
      setIsLoading(false);
    }
  };

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    console.log(crypto1, event.target.value, priceType);
    console.log(crypto2, event.target.value, priceType);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);

    console.log(prices1, prices2);
    if (prices1?.length > 0 && prices2?.length > 0) {
      settingChartData(setChartData, prices1, prices2, chartType);
      setIsLoading(false);
    }
  };
  // const handleChartChange = async (event) => {
  //   setChartType(event.target.value);
  //   setIsLoading(true);
  //   const prices1 = await getCoinPrices(crypto1, days, priceType);
  //   const prices2 = await getCoinPrices(crypto2, days, priceType);
  //   if (prices1.length > 0 && prices2.length > 0) {
  //     settingChartData(setChartData, prices1, prices2, priceType);
  //     setIsLoading(false);
  //   }
  // };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, event.target.value);
    const prices2 = await getCoinPrices(crypto2, days, event.target.value);
    if (prices1.length > 0 && prices2.length > 0) {
      settingChartData(setChartData, prices1, prices2, chartType);
      setIsLoading(false);
    }
  };

  // console.log("crypto1",crypto1Data)
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="coin-days-flex">
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />
           
          </div>
          <div className="grey-wrapper">
            <List coin={crypto1Data} />
          </div>
          <div className="grey-wrapper">
            <List coin={crypto2Data} />
          </div>

          <div className="grey-wrapper chart-widget">
            {/* <SelectChartType
              chartType={chartType}
              handleChartChange={handleChartChange}
            /> */}
             <SelectDays days={days} handleDaysChange={handleDaysChange} />
                <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />
            
            <ChartConfig
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>
          <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
          <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
        </>
      )}
    </div>
  );
};

export default ComparePage;
