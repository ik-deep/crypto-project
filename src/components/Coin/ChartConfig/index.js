import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "./styles.css";
import { convertNumbers } from "../../../functions/convertNumbers";

const ChartConfig = ({ chartData, priceType, multiAxis, chartType }) => {
  // console.log(chartData);
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
      title: {
        display: true,
        text: chartType,
      },
    },

    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
      axis: chartType == "Stepped Line Chart" ? "x" : "",
    },
   
    scales:{
      y:{
        ticks:{
          callback: function (value,index,ticks){
            if(priceType==="prices"){
              return "$"+ value.toLocaleString();
            }else{
              return "$"+convertNumbers(value);
            }
          }
        }
      }
    }

  };

  let horizontalBarChartOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        //   position: 'left',
        display: multiAxis ? true : false,
      },
      title: {
        display: true,
        text: "Horizontal Bar Chart",
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
  };

  return (
    <>
      {chartType === "Horizontal Bar Chart" ? (
        <Bar data={chartData} options={horizontalBarChartOptions} />
      ) : chartType === "Vertical Bar Chart" ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Line data={chartData} options={options} />
      )}
    </>
  );
};

export default ChartConfig;
