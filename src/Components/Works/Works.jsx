import React from 'react'
import {motion} from 'framer-motion';

import './Works.css'
import Upwork from '../../img/Upwork.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'

const Works = () => {

    const transition = {duration:3, type:'spring'};

    return (
        <div className="works" id='Works'>
            <div className="text">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing 
                    <br /> 
                    Repellat harum enim corporis excepturi, voluptatem tempora.
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                    <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing 
                </span>
                <a  href='/' target='_blank'>
                <button className="button s-button">Hire me</button>
                </a>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            <div className="w-right">
                <motion.div 
                initial={{rotate:45}}
                whileInView={{rotate:0}}
                viewport={{margin:'-40px'}}
                transition={transition}
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    );        
}

export default Works