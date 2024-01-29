import React from 'react'
import './styles.css'
import Button from '../../Common/Button'
import iphone from "../../../assets/phone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion";
import { Link } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div className='flex-info'>
       <motion.div className='left=component'
        initial={{x:-30}}
        animate={{x:0}}
        transition={{ type:"smooth",
        duration:1.5}}
       >
            <motion.h1 className='track-crypto-heading'
            initial={{y:0}}
            animate={{y:0}}
            transition={{duration:0.5}}
            >Track Crypto</motion.h1>
            <motion.h1 
             initial={{y:0}}
             animate={{y:0}}
             transition={{duration:0.5}}
            className='real-time-heading'>Real Time.</motion.h1>
            <p className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
            <motion.div className='btn-flex'
             initial={{x:-30}}
             animate={{x:0}}
             transition={{ type:"smooth",
             duration:2}}
            >
               <Link to='/dashboard'>
               <Button text={"Dashboard"}/>
               </Link>
  
              <Button text={"Share"} outlined={true}/>
            </motion.div>
       </motion.div>
       <motion.div className='phone-container'
        initial={{x:30}}
        animate={{x:0}}
        transition={{ type:"smooth",
        duration:1.5}}
       >
           <motion.img src={iphone} className='iphone'
           initial={{y:-10}}
           animate={{y:10}}
           transition={{
            type:"smooth",
            repeatType:"mirror",
            duration:2,
            repeat:Infinity
           }}
           />
           <img src={gradient} className="gradient"/>
       </motion.div>
    </div>
  )
}

export default MainComponent