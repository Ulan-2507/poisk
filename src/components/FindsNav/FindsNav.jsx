import React, {useState, useRef, useEffect} from 'react'
// Core modules imports are same as usual
import SwiperCore, { Navigation } from 'swiper/core';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css'

import './FindsNav.style.css'

SwiperCore.use([Navigation ]);



const FindsNav = ({onSelect}) => {
    const [activeNode, setActiveNode] = useState(null)
    const ref = useRef()

    const handleSelect = (e) => {
        if(e.target.closest('.finds__nav-item')) {
            if(activeNode) {
                activeNode.classList.remove('active')
            }
            let elem = e.target.closest('.finds__nav-item')
            elem.classList.add('active')
            setActiveNode(elem)
            onSelect(elem.textContent)
        }
    }
    const handleAll = ({target}) => {
        if(activeNode) {
            activeNode.classList.remove('active')
        }
        target.classList.add('active')
        setActiveNode(target)
        // onSelect(target.textContent)
    }
    useEffect(() => {
        setActiveNode(ref.current)
    }, [])

    // Params definition
    let params = {
    modules: [ Navigation],
    preloadImages: false,
    navigation: {
      nextEl: '.finds__nav__arrow-next',
      prevEl: '.finds__nav__arrow-prev',
      disabledClass: "slick-disabled"
    },
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {
        650: {slidesPerView: 2 },
        860: {slidesPerView: 3 },
        1024: {slidesPerView: 4 }       
    }
  };
    return (
        <>
           <div rel="all" ref={ref} className="finds__nav-item active" onClick={handleAll}>Все категории</div>
            <div className="finds__nav__wrap" onClick={handleSelect}>
                <Swiper {...params}>
                    <SwiperSlide>
                        <NavItem text={'Документы'} rel="documents"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavItem text={'Ключи'} rel="keys"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavItem text={'Техника'} rel="hi-tech"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavItem text={'Кошельки'} rel="wallets"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavItem text={'Животные'} rel="animals"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavItem text={'Украшения'} rel="jewelry"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavItem text={'Сумки'} rel="bags"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <NavItem text={'Другое'} rel="other"/>
                    </SwiperSlide>
                </Swiper>
                    <button className="finds__nav__arrow finds__nav__arrow-next"></button>
                    <button className="finds__nav__arrow finds__nav__arrow-prev"></button>
            </div>
        </>
     
    )
}

function NavItem ({ text, rel }) {
    return (
        <div className="finds__nav-item" rel={rel}>
          <span>{text}</span>
        </div>
    );
}
export default FindsNav
