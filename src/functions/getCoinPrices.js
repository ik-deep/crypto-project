import axiosInstance from "./axiosInstance"

export const getCoinPrices=(id, days,priceType)=>{
    const prices = axiosInstance.get(`/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response)=>{
        console.log(response.data)
        return response.data[priceType];
    })
    .catch((error)=>{
        console.log("ERROR>>>",error);
    });
if(prices)  return prices;
   
}