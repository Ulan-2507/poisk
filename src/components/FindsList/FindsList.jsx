import React from 'react'
import { Link } from 'react-router-dom';
// Core modules imports are same as usual
import SwiperCore, { Navigation, Lazy } from 'swiper/core';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css'

import './FindsList.style.css'

SwiperCore.use([Navigation, Lazy ]);

const FindsList = ({items=[]}) => {
    // Params definition
  let params = {
    modules: [ Navigation, Lazy],
    preloadImages: false,
    lazy: true,
    navigation: {
      nextEl: '.finds__arrow-next',
      prevEl: '.finds__arrow-prev',
      disabledClass: "slick-disabled"
    },
    loop: false,
    spaceBetween: 10,
    slidesPerView: 2,
    breakpoints: {
        560: {slidesPerView: 3 },
        720: {slidesPerView: 4 },
        930: {slidesPerView: 5 },
        1120: {slidesPerView: 6 }        
    }
  };
    return (
        <div className="finds__wrap">
            <div className="finds__wrap-item active">
                <Swiper {...params}>
                    {items.map(item => {
                        return (
                           <SwiperSlide key={item.id}>
                                <Link className="finds__list-item" to={`/found/details/${item.id}`}>
                                    <div className="image swiper-lazy" data-background={item.img}>
                                        <div className="swiper-lazy-preloader"></div>
                                        <div className="date">{item.date}</div>
                                        <div className="city">{item.city}</div>
                                    </div>
                                    <div className="title">{item.text}</div>
                                </Link>
                           </SwiperSlide>
                        )
                    })}
                </Swiper>
                    <button className=" finds__arrow finds__arrow-next "></button>
                    <button className="finds__arrow finds__arrow-prev "></button>
            </div>
        </div>
    )
}

export default FindsList
