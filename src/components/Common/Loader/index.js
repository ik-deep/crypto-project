import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css"
const Loader = () => {
  return (
    <div className='loader-container'>
        <CircularProgress/> <h1 style={{color:"var(--white)"}}>LOADING...</h1>
    </div>
  )
}

export default Loader