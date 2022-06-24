import React from 'react';
import {motion} from 'framer-motion'
import './App.scss';
import BackToMainBtn from './parts-active/BackToMainBtn';

const variants = {
    visible:{
        opacity:1,
        scale:1,
        y:0,
    },
    hidden:{
        opacity:0, scale:0, y:-10000,
    },
    exit:{
        opacity:0, scale:0, y:-10000,
    }
}

const Modal = ({ToggleOff}) =>{
    
    return(
        <motion.div 
            className="modal container-wrapper-item"
            animate="visible"
            initial="hidden"
            exit="exit"
            variants={variants}
            transition={{
                duration:2,
            }}
        >
            <h2>Thank you for submiting a letter!</h2>
            <p>It will be checked soon, and then I will contact with You during the day.</p>
            <BackToMainBtn ToggleOff={ToggleOff}/>
        </motion.div>
    )
}
export default Modal;