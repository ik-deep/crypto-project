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
                return <Grid coin={coin} key={index}/>
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
         <table className="list-table">
          {
            coins && coins.map((item,i)=>{
              return (
                <List coin={item} key={i}/>
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
