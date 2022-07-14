import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper';

import { themeContext } from '../../Context';
import { useContext } from "react";


import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'

import 'swiper/css/pagination';
import 'swiper/css';
import './Testimonials.css';

const Testimonials = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const clients = [
        {
            img: profile1,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?'
        },
        {
            img: profile2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?'
        },
        {
            img: profile3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?'
        },
        {
            img: profile4,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam suscipit ullam, necessitatibus quasi itaque sit commodi quis quidem corporis expedita vitae eveniet?'
        }
    ]

  return (
    <div className="testimonials" id='Testimonials'>
        <div className="t-heading">
            <span style={{color: darkMode?'white':''}}>Clients always get </span>
            <span >Exceptional Work </span>
            <span style={{color: darkMode?'white':''}}>from me!</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable : true}}
        >
            {clients.map((client,id)=>{
                return (
                    <SwiperSlide key={id}>
                        <div className="testimonial">                    
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials