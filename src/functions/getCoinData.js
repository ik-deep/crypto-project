import axiosInstance from "./axiosInstance";

export const getCoinData=(id,setIsLoading)=>{
   const myData = axiosInstance
    .get(`/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
      setIsLoading(false)
    });

    return myData;
}