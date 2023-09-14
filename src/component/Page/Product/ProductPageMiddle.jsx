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
          
          {rating &&
          <div className='flex gap-2'>
          <div className=' h-[30px] text-sm xl:text-base mt-1 w-fit border border-gray-600 rounded-lg pl-3 pr-3 pt-1 bg-amazonclone-background'>Qty:
    <select className='bg-amazonclone-background border-0'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
    </select>
    </div>
           <button onClick={onCartDelete}>Delete</button>
           </div>
           }
           
          </div>
  )
}

export default ProductPageMiddle