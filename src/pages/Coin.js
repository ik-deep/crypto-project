import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import List from "../components/Dashboard/List";
import { coinObject } from "../functions/coinObject";
import CoinInfo from "../components/Coin/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
import {Chart as ChartJS} from "chart.js/auto";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import SelectChartType from "../components/Coin/SelectChartType.js";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData,setChartData] = useState({});
  const [chartType, setChartType] = useState("Bar chart")

  useEffect(() => {
    if (id) {
        getData();
    }
  }, [id]);

  async function getData(){
    const data = await getCoinData(id,setIsLoading);
    if(data){
      coinObject(setCoinData,data);
      const prices = await getCoinPrices(id,days);
      if(prices && prices.length>0){
        settingChartData(setChartData,prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id,event.target.value);
    if(prices && prices.length>0){
      settingChartData(setChartData,prices);
      setIsLoading(false);
    }
  };
  const handleChartChange = (event) => {
    setChartType(event.target.value);
  }

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
        <div className="grey-wrapper">
          <SelectDays days={days} handleDaysChange={handleDaysChange}/>
          <SelectChartType chartType={chartType} handleChartChange={handleChartChange}/>
          <LineChart chartData={chartData} chartType={chartType}/>
        </div>
         <CoinInfo heading={coinData.name} desc={coinData.desc} />
        </>
       )}
    </div>
  );
};

export default CoinPage;
