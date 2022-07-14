import React from 'react'
import {motion} from 'framer-motion';

import { themeContext } from '../../Context';
import { useContext } from "react";

import './Services.css'
import Card from '../Card/Card'
import HeartImoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'

const Services = () => {
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {duration:1, type:'spring'};
    
    return (
    <div className="services" id='Services'>
        <div className="text">
            <span style={{color: darkMode?'white':''}}>My Awesome</span>
            <span>Services</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat harum enim corporis excepturi, voluptatem tempora.</span>
            <a href={Resume} target='_blank' rel='noreferrer'>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        <div className="cards">
            <motion.div
            initial={{left:'20rem'}}
            whileInView={{left:'14rem'}}
            transition={transition}
            style={{left:'14rem'}}>
                <Card  image={HeartImoji} heading='Design'
                detail = 'Adobe Illustrator, Adobe XD, Figma,  Photoshop'
                />
            </motion.div>
            <motion.div 
            initial={{left:'-10rem'}}
            whileInView={{left:'-4rem'}}
            transition={transition}
            style={{top:'12rem' ,left:'-4rem'}}>
                <Card image={Glasses}
                heading='Devloper'
                detail={'Html, CSS, Javascript, ReactJs'}
                />
            </motion.div>
            <motion.div 
            initial={{left:'18rem'}}
            whileInView={{left:'12rem'}}
            transition={transition}
            style={{top:'19rem', left:'12rem'}}>
                <Card image={Humble}
                heading='Backend'
                detail='Node Js, Express Js'
                />
            </motion.div>
        <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services