import '../App.scss';
import '../styles/Projects.scss';
import React from 'react';
import {motion} from 'framer-motion';

const variantsForContainer = {
  visible:{
    opacity:1,
    scale:1,
    y:0,
  },
  hidden:{
    opacity:0, scale:0, y:1000,
  },
  exit:{
    opacity:0, scale:0, y:1000,
  }
}

const ProjectsInactive = ({ToggleOn}) => {

  const normalState = (
    <motion.div
      className="container-wrapper-item projects"
      onClick={()=>{ToggleOn(2)}}
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={variantsForContainer}
      transition={{
        duration:2,
      }}
    >
      <div className="wrapper projects-wrapper">
        <div className="deco">
          <div className="deco-left">
            <div className="deco-left-item"></div>
          </div>
        </div>
        <div className="text">
          <p>MY PROJECTS</p>
        </div>
        <div className="deco">
          <div className="deco-right">
            <div className="deco-right-item"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return normalState;
}

export default ProjectsInactive;
