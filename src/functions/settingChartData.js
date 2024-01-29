import { convertDate } from "./convertDate";

export const settingChartData=(setChartData,prices)=>{
    let labelData = prices?.map((item)=> convertDate(item[0]));
    setChartData({
        labels:labelData,
        datasets:[{
          data:prices?.map(price=> price[1]),
          borderColor:"#3a80e9",
          borderWidth:2,
          fill:true,
          tension:0.25,
          backgroundColor: "rgbs(58,128,0.1)",
          pointRadius:0
        }]
      })
    
}