import { convertDate } from "./convertDate";

export const settingChartData=(setChartData,prices,chartType)=>{
    let labelData = prices?.map((item)=> convertDate(item[0]));
    // console.log(chartType==="Stepped Line Chart");
    setChartData({
        labels:labelData,
        datasets:[{
          data:prices?.map(price=> price[1]),
          borderColor:"#3a80e9",
          borderWidth:2,
          fill:true,
          tension:0.25,
          backgroundColor: "rgbs(58,128,0.1)",
          pointRadius:0,
          stepped: chartType==="Stepped Line Chart"?true:false,
        }]
      })
    
}