import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { themeContext } from '../../Context';
import { useContext } from "react";

import './Contact.css';

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const sendMail = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_1vywsmk','template_btzp36a',form.current,'kpSvr1v5yugpsEj-u')
        .then(res=>{
            console.log(res.text);
            alert('Thanks for contacting!');
        },err=>{
            console.log(err.text);
        });
    };

  return (
    <div className="contact" id='Contact'>
        <div className="c-left">
            <span style={{color: darkMode?'white':''}}>Get in Touch</span>
            <span>Contact me</span>
            <div className="blur c-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendMail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message'></textarea>
                <input type="submit" value="Send" className='button' />
                <div className="blur c-blur2" style={{background:'var(--purple)'}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact