import React, {useEffect, useState} from 'react';
import sliderImg1 from "../images/addButton.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';

const Codex = () => {

    return (
      <div>

        <p className="pageHeaderText">
          This is an easy place to read some of the lore I have wrote about an sci-fi world (this page looks like shit right now)
        </p>

        <div className='codexContainer'>

          <Swiper className="codexNav"
                  slidesPerView={4}
                  centeredSlides={true}
                  navigation
                  pagination={{ clickable: true }}
                  pagination
                  grabCursor={true}
                  loop={true}
          >

            <SwiperSlide className="codexNavItem">
              <p>Characters</p>
            </SwiperSlide>

            <SwiperSlide className="codexNavItem">
              <p>slider 2</p>
            </SwiperSlide>

            <SwiperSlide className="codexNavItem">
              <p>slider 3</p>
            </SwiperSlide>

            <SwiperSlide className="codexNavItem">
              <p>slider 4</p>
            </SwiperSlide>

            <SwiperSlide className="codexNavItem">
              <p>slider 5</p>
            </SwiperSlide>

          </Swiper>

          <div className="codexFacts">
            <p>facts about topic</p>
          </div>

          <img className="codexTopImg" src={sliderImg1} alt="" />

          <div className="codexText">
            <p>text lore bla bla bla</p>
          </div>

        </div>
                               
      </div>
    )
};

export default Codex;