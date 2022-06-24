import '../styles/About.scss';
import '../App.scss';
import React from 'react';
import {motion} from 'framer-motion';
import BackToMainBtn from './BackToMainBtn';
import NextBtn from './NextBtn';
import hard1 from '../img/html5.png'
import hard3 from '../img/favicon.ico'
import hard4 from '../img/js.png'
import me from '../img/me.jpg'

const variantsForContainer = {
  toggledVisible:{
    x:0,
    opacity:1,
  },
  toggledHidden:{
    x:-2000,
    opacity:1,
  },
  toggledExit:{
    x:-2000,
    opacity:0,
  }
}

const AboutActive = ({ToggleOff, ToggleOn, focus}) => {

  const toggledState = (
    <motion.div layout
      className="active-about"
      animate="toggledVisible"
      initial="toggledHidden"
      exit="toggledExit"
      variants={variantsForContainer}
      transition={{
        duration:2,
      }}
    >
      
      <div className="wrapper active-about-wrapper">
        <div className="deco deco1">
          <div className="deco-inner">
            <div className="deco-inner-item"></div>
          </div>
        </div>
        <div className="deco deco2">
          <div className="deco-inner">
            <div className="deco-inner-item"></div>
          </div>
        </div>
        <NextBtn focus={focus} ToggleOn={ToggleOn}/>
        <BackToMainBtn ToggleOff={ToggleOff}/>
        <img src={me} alt="" className='face'/>
        <div className='text'>
          <h1>Matiichyn Vladyslav</h1>
          <div className='text-part'>
            <p>
              Welcome to my portfolio!<br/>
              I`m a young Front-end developer <br/> of websites from the Ukraine.
            </p>
          </div>
          <div className='text-part'>
            <h2>Briefly about me:</h2>
            <p>- 16 years old</p>
            <p>- Working solo / in team</p>
            <p>- Responsible and hardworking</p>
          </div>
          <div className='text-part'>
            <h2>Hard skills:</h2>
            <div>
              <img src={hard1} alt="" />
              <img src={hard3} alt="" />
              <img src={hard4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>)

  return toggledState;
}

export default AboutActive;

