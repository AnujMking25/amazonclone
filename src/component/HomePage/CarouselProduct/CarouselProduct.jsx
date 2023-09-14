import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import {Swiper, SwiperSlide } from 'swiper/react'

    const CarouselProduct = () => {
     const [products,setProduct]=useState();
    const getProducts=useSelector(state=>state.productDetails.products)
      useEffect(()=>{
        const getAllProducts=async()=>{
          const currProducts=getProducts.map((product)=>{
            return <SwiperSlide key={product._id}>
            <Link to={`/product`} state={{product}}>
            <img src={`${product.imageUrl}`} alt={product.imageUrl} />    
            </Link>
            </SwiperSlide>
          })
          setProduct(prev=>{return prev=currProducts})
        }
      getAllProducts();
     },[getProducts])
      return (
        <div className='bg-white m-3'>
        <div className='text-2xl font-semibold p-3'>Best Books</div>
        <Swiper
        slidesPerView={6}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        >
           {products} 
        </Swiper>
        </div>
      )
    }
    
    export default CarouselProduct