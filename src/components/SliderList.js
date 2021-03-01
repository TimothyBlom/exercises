import React, {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import sliderImg1 from "../images/addButton.png"

SwiperCore.use([Navigation, Scrollbar, EffectCoverflow])

const SliderList = () => {
    return (
        <div id='sliderList'>

            <p className="pageHeaderText">
                Mobile friendly slider
            </p>
      
            <Swiper className="swiperContainer"
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                pagination
                scrollbar={{ draggable: true }}
                grabCursor={true}
                effect="coverflow"
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 0.8,
                modifier: 1,
                slideShadows: false
                }}
            >

                <SwiperSlide className="swiperItemContainer">
                    <img className="swiperItem" src={sliderImg1} alt="" />
                    <p>slider 1</p>
                </SwiperSlide>

                <SwiperSlide className="swiperItemContainer">
                    <img className="swiperItem" src={sliderImg1} alt="" />
                    <p>slider 2</p>
                </SwiperSlide>

                <SwiperSlide className="swiperItemContainer">
                    <img className="swiperItem" src={sliderImg1} alt="" />
                    <p>slider 3</p>
                </SwiperSlide>

                <SwiperSlide className="swiperItemContainer">
                    <img className="swiperItem" src={sliderImg1} alt="" />
                    <p>slider 4</p>
                </SwiperSlide>

            </Swiper>

        </div>
    )
};

export default SliderList;