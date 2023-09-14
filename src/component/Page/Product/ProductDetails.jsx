import React from 'react'
import ProductBadge from './ProductBadge'
import ProductRating from './ProductRating'
const ProductDetails = ({product,ratings}) => {
  // console.log(product,'===>>>',ratings);
  return (
    <div className='mb-1'>
        <div className='text-xl xl:text-2xl font-medium mb-1 '>{product.title}</div>
        <div className='text-sm xl:text-base mb-1'>by <span className='text-blue-500'>{product.brand}</span></div>
        {ratings && <div className='text-sm xl:text-base mb-1'>
        <ProductRating avgRating={product.avgrating} ratings={product.rating}/></div>}
        {!ratings && <div>₹{product.price}</div>}
        <div className='text-xs xl:text-sm font-bold mb-1'>{product.attribute}</div>
        <div><ProductBadge badge={product.badge}/></div>
    </div>
  )
}

export default ProductDetails