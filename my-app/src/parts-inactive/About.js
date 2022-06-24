import '../styles/About.scss';
import '../App.scss';
import React from 'react';
import {motion} from 'framer-motion'

const variantsForContainer = {
  visible:{
    scale:1,
    opacity:1,
    x:0,
  },
  hidden:{
    scale:1,
    opacity:0,
    x:1000,
  },
  exit:{
    scale:0,
    opacity:0,
    x:1000,
  }
}

const AboutInactive = ({ToggleOn}) => {

  const normalState = (
    <motion.div layout
      className="container-wrapper-item about"
      onClick={()=>{ToggleOn(1)}}
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={variantsForContainer}
      transition={{
        duration:2,
      }}
    >
      
      <div className="wrapper about-wrapper">
        <div className="deco">
          <div className="deco-left">
            <div className="deco-left-item"></div>
          </div>
        </div>
        <div className="text">
          <p>ABOUT ME</p>
        </div>
        
        <div className="deco">
          <div className="deco-right">
            <div className="deco-right-item"></div>
          </div>
        </div>
      </div>
    </motion.div>);

  return normalState;
}

export default AboutInactive;

