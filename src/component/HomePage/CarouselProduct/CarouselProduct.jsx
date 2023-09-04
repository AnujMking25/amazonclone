import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'
    
    const CarouselProduct = () => {
      return (
        <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>Best Books</div>
        <Swiper
        slidesPerView={7}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        >
            {Array.from({length:9},(_,i)=>
                <SwiperSlide key={i}>
                <NavLink to={`/product/${i}`}>
                <img src={`../images/product_${i}_small.jpg`} alt={`product_Image${i}`} />    
                </NavLink>
                </SwiperSlide>
            )}
        </Swiper>
        </div>
      )
    }
    
    export default CarouselProduct