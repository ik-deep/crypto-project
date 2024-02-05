import React, { useState,useEffect } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import './styles.css'

const SelectCoins = ({crypto1,crypto2,handleCoinChange}) => {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(()=>{
    getData();
  },[])



  const getData=async ()=>{
    const myCoins = await get100Coins();
   if(myCoins){
    setAllCoins(myCoins);
   }
   console.log("allCoina",allCoins);
  }
  return (
    <div className="coin-flex">
      <p>Crypto 1</p>
      <Select
        sx={{ height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& :hover": {
          "&& fieldSet": {
            borderColor: "#3a80e9",
          },
        },
       
    }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={crypto1}
        onChange={(event)=>handleCoinChange(event,false)}
      >
        {allCoins.map((coin,i) => {
         return <MenuItem value={coin.id} key={i} className="toggle-btn">
           {coin.name}
          </MenuItem>;
        })}
      </Select>
      <p>Crypto 2</p>
      <Select
        sx={{ height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "var(--white)",
        },
        "& :hover": {
          "&& fieldSet": {
            borderColor: "#3a80e9",
          },
        },
       
    }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={crypto2}
        onChange={(event)=>handleCoinChange(event,true)}
      >
        {allCoins.map((coin,i) => {
         return <MenuItem value={coin.id} key={i} className="toggle-btn">
           {coin.name}
          </MenuItem>;
        })}
      </Select>
    </div>
  );
};

export default SelectCoins;
