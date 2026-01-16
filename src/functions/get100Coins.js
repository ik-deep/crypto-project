import axiosInstance from "./axiosInstance";

export const get100Coins = ()=>{
   const myCoins = axiosInstance.get("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((response)=>{
     return response.data;
    })
    .catch((error)=>{
      console.log("Error:",error);
      if (error.response && error.response.status === 429) {
        throw new Error('SERVER_DOWN');
      }
      throw error;
    })

    return myCoins;
}