import React from 'react';
import { Link } from "react-browser-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import headerLogo from "../images/3DLogo.png"

const Header = () => {
    return (
        <div className="headerContainer">

            <Link className='homeButton' to='/'>            
                <img className="headerLogo" src={headerLogo} />
            </Link>

            <div className="header">

                <Swiper className="headerSwiper"
                    slidesPerView={4}
                    centeredSlides={true}
                    navigation
                    pagination={{ clickable: true }}
                    pagination
                    grabCursor={true}
                    loop={true}
                >

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/Countdown'>Countdown</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/ImgUploader'>Image Uploader</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/ApiList'>API Lists</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/SliderList'>Slider lists</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/Codex'>Lore Codex</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/ToDoList1'>Update To Do List</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/ToDoList2'>Add to To Do List</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/ToDoList3'>Simple To Do List</Link>
                    </SwiperSlide>

                    <SwiperSlide className='routingButtonsContainer'>
                        <Link className='routingButtons' to='/Animations'>Animations</Link>
                    </SwiperSlide>

                </Swiper>      
            </div>
        </div>
    )
};

export default Header;