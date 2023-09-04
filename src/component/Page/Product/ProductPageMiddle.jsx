import React from 'react'
import ProductDetails from './ProductDetails';
const ProductPageMiddle = ({product}) => {
  return (
    <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400 '>
          <div className='mb-3'>
            <ProductDetails product={product} ratings={true}/>
          </div>
          <div className='text-base xl:text-lg mt-3'>
            {product.description}
          </div>
          </div>
  )
}

export default ProductPageMiddle