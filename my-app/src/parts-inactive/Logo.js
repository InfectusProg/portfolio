import '../styles/Logo.scss';
import '../App.scss';
import logo from '../img/logo.png'
import React from 'react';
import {motion} from 'framer-motion'

const variantsForContainer = {
  visible:{opacity:1, scale:1},
  hidden:{opacity:0, scale:0},
  exit:{opacity:0, scale:0},
}


const LogoInactive = (props) =>{

  return(
          <motion.div layout
            animate="visible"
            initial="hidden"
            exit="exit"
            transition={{
              duration:2,
            }}
            variants={variantsForContainer}
            className="container-wrapper-item logo"
          >
              <div className="wrapper logo-wrapper">
                <img src={logo}/>
              </div>
          </motion.div>
      )
}

export default LogoInactive;

