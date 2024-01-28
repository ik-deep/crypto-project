import React from 'react'
import './styles.css'
import TemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
       <h1 className='logo'>
        CryptoTracker<span style={{color:"var(--blue)"}}>.</span>
       </h1>
       <div className='links'>
        <Link to='/'>
          <p className='link'>Home</p>
        </Link>
        <Link to='/compare'>
          <p className='link'>Compare</p>
        </Link>
        <Link to='/watchlist'>
          <p className='link'>Watchlist</p>
        </Link>
        <Link to='/dashboard'>
         <Button text={"Dashboard"} 
         outlined={false}
         onClick={()=> console.log("Btn Clicked")}
         />
        </Link>
       </div>
       <div className='drawer'>
        <TemporaryDrawer/>
       </div>
    </div>
  )
}

export default Header
