import React, { useState } from "react";
// import div from '@mui/material/div';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material";
import Grid from "../Grid";
import "./styles.css"
import List from "../List";

export default function TabsComponent({coins}) {
  const [value, setValue] = useState("grid");
  let localStoredData = JSON.parse(localStorage.getItem("watchData"))|| [];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--white)",
    width: "50vw",
    fonSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };


  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        <TabPanel value="grid">
          <div className="grid-flex">
            {
              coins && coins.map((coin,index)=>{
                coin["watchData"]=localStoredData.length>0&&localStoredData.indexOf(coin.id)!==-1?true:false;
                return <Grid coin={coin} key={index}/>
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
         <table className="list-table">
          {
            coins && coins.map((coin,i)=>{
                coin["watchData"]=localStoredData.length>0&&localStoredData.indexOf(coin.id)!==-1?true:false;
              return (
                <List coin={coin} key={i}/>
              )
            }
            )
          }
         </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
