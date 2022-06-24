import '../App.scss';
import '../styles/Contacts.scss';
import React from 'react';
import {motion} from 'framer-motion'
const variantsForContainer = {
  visible:{
    x:0,
    y:0,
    rotate:0, 
    scale:1,
    opacity:1
  },
  hidden:{
    x:500,
    y:500,
    rotate:90,
    scale:0.01,
    opacity:0
  },
  exit:{
    opacity:0,
    x:500,
    y:500,
    rotate:90,
    scale:0.01
  }
}

const ContactsInactive = ({ToggleOn}) =>{

  const normalState = (
    <motion.div layout
      className="container-wrapper-item contacts"
      onClick={()=>{ToggleOn(3)}}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variantsForContainer}
      transition={{
        duration:2,
      }}
    >
      <div className="wrapper contacts-wrapper">
        <div className="deco">
          <div className="deco-left">
            <div className="deco-left-item"></div>
          </div>
        </div>
        <div className="text">
          <p>CONTACTS</p>
        </div>
      </div>
    </motion.div>
  )

  return normalState
}

export default ContactsInactive;

