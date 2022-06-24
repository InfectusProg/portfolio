import React from 'react';
import Message from './Message';
import Modal from './Modal'

import LogoInactive from './parts-inactive/Logo';
import AboutInactive from './parts-inactive/About';
import ProjectsInactive from './parts-inactive/Projects';
import ContactsInactive from './parts-inactive/Contacts';

import AboutActive from './parts-active/About';
import ProjectsActive from './parts-active/Projects';
import ContactsActive from './parts-active/Contacts';
import {motion, AnimatePresence } from 'framer-motion';



const Filtering = ({ToggleOn, ToggleOff, focus}) =>{
    const activeParts = [
        <AboutActive focus={focus} ToggleOn={ToggleOn} ToggleOff={ToggleOff}/>,
        <ProjectsActive focus={focus} ToggleOn={ToggleOn} ToggleOff={ToggleOff}/>,
        <ContactsActive focus={focus} ToggleOn={ToggleOn} ToggleOff={ToggleOff}/>
    ]

    return(
        <motion.div className='filtering-wrapper wrapper'>
            {
                focus===4 ? 
                    (
                        <AnimatePresence>
                            <Message/>
                            <LogoInactive ToggleOn={ToggleOn}/>
                            <AboutInactive ToggleOn={ToggleOn}/>
                            <ProjectsInactive ToggleOn={ToggleOn}/>
                            <ContactsInactive ToggleOn={ToggleOn}/>
                        </AnimatePresence>
                    ): 
                focus===5 ? 
                    (   
                        <AnimatePresence>
                            <Modal ToggleOff={ToggleOff} />
                        </AnimatePresence>
                    ):
                    (
                        <AnimatePresence>
                            {activeParts[focus-1]}
                        </AnimatePresence>
                    )
            }
        </motion.div>
    )

    
    
}

export default Filtering;