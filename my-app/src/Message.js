import React from 'react';
import {motion} from 'framer-motion'
import './App.scss';

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
        opacity:0, scale:0,
    }
}

const Message = () =>{
    
    return(
        <motion.div 
            className="message wrapper"
            animate="visible"
            initial="hidden"
            exit="exit"
            variants={variants}
            transition={{
                duration:2,
            }}
        >
            <p>Matiichyn Vlad - young web dev</p>
        </motion.div>
    )
}
export default Message;