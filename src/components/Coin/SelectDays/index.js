import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./styles.css";

export default function SelectDays({days,handleDaysChange}) {


  return (
    <div className='select-days'>
      <p>Price change in </p>
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
          value={days}
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={20}>20 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={180}>180 Days</MenuItem>
          <MenuItem value={365}>1 Years</MenuItem>
        </Select>
    </div>
  );
}