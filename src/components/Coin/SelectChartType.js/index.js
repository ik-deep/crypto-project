import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./styles.css";

export default function SelectChartType({ chartType, handleChartChange }) {
  return (
    <div className="select-days">
      <p>Chart Type</p>
      <Select
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
            maxwidth: "126px",
          },
          "& :hover": {
            "&& fieldSet": {
              borderColor: "#3a80e9",
            },
          },
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={chartType}
        onChange={handleChartChange}
      >
        <MenuItem value={"Line Chart"}  className='toggle-btn'> Line Chart</MenuItem>
        <MenuItem value={"Stepped Line Chart"} className='toggle-btn'>Stepped Line Chart</MenuItem>
        <MenuItem value={"Vertical Bar Chart"} className='toggle-btn'>Vertical Bar Chart</MenuItem>
        <MenuItem value={"Horizontal Bar Chart"} className='toggle-btn'>Horizontal Bar Chart</MenuItem>
      </Select>
    </div>
  );
}
