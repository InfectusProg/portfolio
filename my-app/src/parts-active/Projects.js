import '../App.scss';
import '../styles/Projects.scss';
import React from 'react';
import {motion} from 'framer-motion'
import BackToMainBtn from './BackToMainBtn';
import BackBtn from './BackBtn';
import NextBtn from './NextBtn';
import project1 from '../img/Screenshot_3.png'
import project2 from '../img/Screenshot_4.png'
import project3 from '../img/Screenshot_6.png'

const variantsForContainer = {
  toggledExit:{
    y:-2000,
    opacity:0,
  },
  toggledHidden:{
    y:2000,
    opacity:0,
  },
  toggledVisible:{
    y:0,
    opacity:1,
  }
}

const slider_items = [project1, project2, project3];

const ProjectsActive = ({ToggleOff, ToggleOn, focus}) => {
  const [sliderCount, setSliderCount] = React.useState(0);
  
  const counter = setTimeout(()=>{
      if(sliderCount===2){
        setSliderCount(0)
      }
      else{
        setSliderCount(sliderCount+1)
      }
    }, 5000)
  const toggledState = (
    <motion.div
      className="active-projects"
      animate="toggledVisible"
      initial="toggledHidden"
      exit="toggledExit"
      variants={variantsForContainer}
      transition={{
        duration:2,
      }}
    >
      <div className="wrapper active-projects-wrapper">
        <div className="deco deco3">
          <div className="deco-inner">
            <div className="deco-inner-item"></div>
          </div>
        </div>
        <NextBtn focus={focus} ToggleOn={ToggleOn}/>
        <BackBtn focus={focus} ToggleOn={ToggleOn}/>
        <BackToMainBtn ToggleOff={ToggleOff}/>
        <h2>PROJECTS I WORKED ON RECENTLY</h2>
        <div className='auto-slider'>
        {counter}
          <img src={slider_items[sliderCount]} alt="" />
        </div>
      </div>
    </motion.div>
  )

  return toggledState;
}

export default ProjectsActive;
