import React from 'react'
import ProductDetails from './ProductDetails';
const ProductPageMiddle = ({product,rating,onCartDelete}) => {
  return (
    <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400 '>
         
         <div className='text-base xl:text-lg mt-3'>
            {product.description}
          </div>
          <div className='mb-3'>
            <ProductDetails product={product} ratings={rating ? false:true}/>
          </div>
          
          {rating ? <button onClick={onCartDelete}>Delete</button>:''}
          </div>
  )
}

export default ProductPageMiddle