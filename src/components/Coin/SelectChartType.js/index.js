import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css";

export default function SelectChartType({chartType,handleChartChange}) {

  return (
    <div className='select-days'>
      <p>Select Chart Type</p>
        <Select
        sx={{
          height:"2.5rem",
          color:"var(--white)",
          "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"var(--white)",
          },
          "& :hover":{
            "&& fieldSet":{
              borderColor:"#3a80e9",
            },
          },
        }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={chartType}
          onChange={handleChartChange}                                              
        >
        
          <MenuItem value={"Line Chart"}>Line Chart</MenuItem>
          <MenuItem value={"Bar Chart"}>Bar Chart</MenuItem>
          {/* <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={180}>180 Days</MenuItem>
          <MenuItem value={365}>1 Years</MenuItem> */}
        </Select>
    </div>
  );
}