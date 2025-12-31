import React from 'react'
import './styles.css'
import Button from '../../Common/Button'
import iphone from "../../../assets/phone.png"
import gradient from "../../../assets/gradient.png"
import {motion} from "framer-motion";
import { Link } from 'react-router-dom'

const MainComponent = () => {
  return (
    <div className='hero-section'>
      <div className='hero-background'></div>
      <div className='flex-info'>
        <motion.div className='left-component'
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div className='hero-badge'
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 0.6}}
          >
            🚀 Live Crypto Tracking
          </motion.div>
          
          <motion.h1 className='track-crypto-heading'
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4, duration: 0.8}}
          >
            Track Crypto
          </motion.h1>
          
          <motion.h1 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.6, duration: 0.8}}
            className='real-time-heading'
          >
            Real Time.
          </motion.h1>
          
          <motion.p className='info-text'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.8, duration: 0.6}}
          >
            Monitor cryptocurrency prices and trends with real-time data from trusted APIs. 
            Get instant insights and make informed decisions with our comprehensive dashboard.
          </motion.p>
          
          <motion.div className='features-list'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1, duration: 0.6}}
          >
            <div className='feature-item'>✓ Real-time price updates</div>
            <div className='feature-item'>✓ Interactive charts & analytics</div>
            <div className='feature-item'>✓ Portfolio tracking</div>
          </motion.div>
          
          <motion.div className='btn-flex'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 1.2, duration: 0.6}}
          >
            <Link to='/dashboard'>
              <Button text={"Get Started"}/>
            </Link>
            <Button text={"Learn More"} outlined={true}/>
          </motion.div>
        </motion.div>
        
        <motion.div className='phone-container'
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img src={iphone} className='iphone'
            initial={{y: -10}}
            animate={{y: 10}}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 3,
              repeat: Infinity
            }}
          />
          <img src={gradient} className="gradient"/>
          <div className='floating-cards'>
            <motion.div className='price-card'
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 1.5, duration: 0.5}}
            >
              <span className='crypto-symbol'>BTC</span>
              <span className='crypto-price'>$45,230</span>
              <span className='crypto-change positive'>+2.4%</span>
            </motion.div>
            
            <motion.div className='price-card card-2'
              initial={{opacity: 0, scale: 0.8}}
              animate={{opacity: 1, scale: 1}}
              transition={{delay: 1.7, duration: 0.5}}
            >
              <span className='crypto-symbol'>ETH</span>
              <span className='crypto-price'>$3,120</span>
              <span className='crypto-change positive'>+1.8%</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MainComponent