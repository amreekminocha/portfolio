import React from 'react'
import wave from '../../img/wave.png';

import { FaInstagram, FaGithub, FaFacebook} from 'react-icons/fa'

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>talktoamreek@gmail.com</span>
            <div className="f-icons">
                <FaInstagram color='white' size='3rem'/>
                <FaFacebook color='white' size='3rem'/>
                <FaGithub color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer