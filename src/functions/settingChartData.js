import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2, chartType) => {
  let labelData = prices1?.map((item) => convertDate(item[0]));
  // console.log(chartType==="Stepped Line Chart");
  if (prices1!==''&&prices2!=='') {
    console.log(prices1,prices2)
    setChartData({
      labels: labelData,
      datasets: [
        {
          label: "crypto1",
          data: prices1?.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          // backgroundColor: "rgbs(58,128,0.1)",
          pointRadius: 0,
          yAxisID: "crypto1",
          stepped: chartType === "Stepped Line Chart" ? true : false,
        },
        {
          label: "crypto2",
          data: prices2?.map((price) => price[1]),
          borderColor: "#61c96f",
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          // backgroundColor: "rgbs(58,128,0.1)",
          pointRadius: 0,
          yAxisID: "crypto2",
          stepped: chartType === "Stepped Line Chart" ? true : false,
        },
      ],
    });
  } else {
    setChartData({
      labels: labelData,
      datasets: [
        {
          data: prices1?.map((price) => price[1]),
          borderColor: "#3a80e9",
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          backgroundColor: "rgbs(58,128,0.1)",
          pointRadius: 0,
          stepped: chartType === "Stepped Line Chart" ? true : false,
          yAxisID: "crypto1",
        },
        
      ],
    });
  }
};
