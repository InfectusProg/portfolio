import '../App.scss';
import '../styles/Contacts.scss';
import React from 'react';
import {motion} from 'framer-motion'
import BackToMainBtn from './BackToMainBtn';
import BackBtn from './BackBtn';
import ds from '../img/ds.png'
import tg from '../img/tg.png'
import gh from '../img/gh.png'

const variantsForContainer = {
  toggledExit:{
    opacity:0, scale:0,
  },
  toggledHidden:{
    x:0,
    opacity:0,
  },
  toggledVisible:{
    x:0,
    y:0,
    rotate:0, 
    scale:1,
    opacity:1,
  }
}

const ContactsActive = ({ToggleOff, ToggleOn, focus}) =>{
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [text, setText] = React.useState('');


  const setNameInfo = (e) =>{
    setName(e.target.value);
  }
  const setEmailInfo = (e) =>{
    setEmail(e.target.value);
  }
  const setTextInfo = (e) =>{
    setText(e.target.value);
  }
  const submitCheck = () =>{
    if(name!=='' && email!=='' && text!=='') ToggleOn(5)
  }


  const toggledState = (
    <motion.div layout
      className="active-contacts" 
      initial="toggledHidden"
      animate="toggledVisible"
      exit="toggledExit"
      variants={variantsForContainer}
      transition={{
        duration:2,
      }}
    >
      <div className="wrapper active-contacts-wrapper">
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
        <div className="deco deco3">
          <div className="deco-inner">
            <div className="deco-inner-item">
              <div></div>
            </div>
          </div>
        </div>
        <BackToMainBtn ToggleOff={ToggleOff}/>
        <BackBtn focus={focus} ToggleOn={ToggleOn}/>
        <h1>Contacts and How to get in touch</h1>
        <div className="socials">
          <h2>My Socials:</h2>
          <div>
            <h3>Discord</h3>
            <a href="#">
              <img src={ds} alt="" />
            </a>
          </div>
          <div>
            <h3>Telegram</h3>
            <a href="https://t.me/infectus_cpslocd" target='_blank' rel="noreferrer">
              <img src={tg} alt="" />
            </a>
          </div>
          <div>
            <h3>GitHub</h3>
            <a href="https://github.com/InfectusProg" target='_blank' rel="noreferrer">
              <img src={gh} alt="" />
            </a>
          </div>
        </div>
        <div className="form">
          <h2>Send me an e-mail:</h2>
          <form className='form-blocks'>
            <div className='form-blocks-inputs' >
              <p>Your name:</p>
              <input onChange={setNameInfo} type="text" />
            </div>
            <div className='form-blocks-inputs' >
              <p>Your e-mail:</p>
              <input type="text" onChange={setEmailInfo}/>
            </div>
            <div className='form-blocks-inputs' >
              <p>Your message:</p>
              <textarea name="" id="" cols="30" rows="10" onChange={setTextInfo}></textarea>
            </div>
            <button
              onClick={submitCheck}
              className='form-blocks-inputs'>
              <p>Submit</p>
            </button>
          </form>
          
        </div>
      </div>
    </motion.div>
  )

  return toggledState
}

export default ContactsActive;

