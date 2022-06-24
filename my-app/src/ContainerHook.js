import './App.scss';
import React, {useState, useEffect, useRef} from 'react';
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min.js'
import Filtering from './Filtering';


const ContainerWrapper = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [focus, setFocus] = useState(4);
  const myRef = useRef(null);
  useEffect(() => {
    if(!vantaEffect){
      setVantaEffect(NET({
        el: myRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        backgroundColor:"#000",
        color:"#39AECF",
        scale: 1.00,
        scaleMobile: 1.00,
        points: 10.00,
        maxDistance: 30.00,
        spacing: 20.00,
        showDots: false
      }))
    }
  }, [vantaEffect]);
  if (vantaEffect) vantaEffect.destroy();
  const ToggleOn = (index)=>{
    if(focus!==index){
        setFocus(6)
        setTimeout(
        () => {
            setFocus(index);
        },1500)
    }
  }
  const ToggleOff = () => {
    ToggleOn(4)
  }

  return (
      <div className="container-wrapper wrapper" ref={myRef}>
        <Filtering ToggleOn={ToggleOn} ToggleOff={ToggleOff} focus={focus} setFocus={setFocus}/>
      </div>
  );
}

export default ContainerWrapper;