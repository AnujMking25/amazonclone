import React from 'react'
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
            {Array.from({length:9},(_,i)=>{
               return <SwiperSlide key={i}>
                <img src={`../images/product_${i}_small.jpg`} alt={`product_Image${i}`} />    
            </SwiperSlide>
            })}
        </Swiper>
        </div>
      )
    }
    
    export default CarouselProduct