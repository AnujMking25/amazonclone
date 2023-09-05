import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import { useNavigate, createSearchParams } from 'react-router-dom'
const Category = () => {
    const navigate=useNavigate();
    const searchCategory=(category)=>{
      navigate({
        pathname:"search",
        search:`${
          createSearchParams({
            category: `${category}`,
            searchTerm:``
          })
        }`
      })
    }
  return (
    <div className='bg-white m-3'>
    <div className='text-2xl font-semibold p-3'>shop by Category</div>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        >
            <SwiperSlide onClick={()=>{searchCategory("Deals")}} className='cursor-pointer'>
                <img src={'../images/category_0.jpg'} alt='category1'/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Amazon")}} className='cursor-pointer'>
                <img src={'../images/category_1.jpg'} alt='category1'/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Fashion")}} className='cursor-pointer'> 
                <img src={'../images/category_2.jpg'} alt='category1'/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Computers")}} className='cursor-pointer'>
                <img src={'../images/category_3.jpg'} alt='category1'/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Home")}} className='cursor-pointer'>
                <img src={'../images/category_4.jpg'} alt='category1'/>
            </SwiperSlide>
            <SwiperSlide onClick={()=>{searchCategory("Mobiles")}} className='cursor-pointer'>
                <img src={'../images/category_5.jpg'} alt='category1'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Category