import React from 'react'
import { Bar, Line } from 'react-chartjs-2';
import "./styles.css"

const LineChart = ({chartData,priceTYpe,multiAxis,chartType}) => {
    const options = {
        plugins:{
            legend:{
                display:multiAxis ? true:false,
            },
            zoom:false
        },
     
        responsive:true,
        interaction:{
            mode:"index",
            intersect:false,
        },
    };

    if(chartType==="Bar Chart"){
        return <Bar data={chartData} options={options}/>
    }
    // console.log(chartData);
  return  (
    <>
     <Line data={chartData} options={options}/>
    </>
  )
 
}

export default LineChart