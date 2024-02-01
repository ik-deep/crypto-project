import React from "react";

const SelectCoins = () => {
  const [crypto1, setCrypto1] = useState()

  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& :hover": {
      "&& fieldSet": {
        borderColor: "#3a80e9",
      },
    },
  };

const handleCoinChange = (event) =>{
    setCrypto1(event.target.value)
}
  return (
    <div>
      <p>Price change in </p>
      <Select
        sx={{ styles }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={crypto1}
        onChange={handleCoinChange}
      >
        <MenuItem value={7} className="toggle-btn">
          7 Days
        </MenuItem>
        <MenuItem value={20} className="toggle-btn">
          20 Days
        </MenuItem>
        <MenuItem value={30} className="toggle-btn">
          30 Days
        </MenuItem>
        <MenuItem value={60} className="toggle-btn">
          60 Days
        </MenuItem>
        <MenuItem value={180} className="toggle-btn">
          180 Days
        </MenuItem>
        <MenuItem value={365} className="toggle-btn">
          1 Years
        </MenuItem>
      </Select>
    </div>
  );
};

export default SelectCoins;
