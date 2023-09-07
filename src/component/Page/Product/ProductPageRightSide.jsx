import React from 'react'
import {IN_CURRENCY } from '../../../CallApi/constants'
const ProductPageRightSide = ({product}) => {
  return (
    <div className='col-span-2 bg-white p-4 rounded'>
    <div className='text-xl xl:text-2xl font-semibold text-red-700 text-right'>{IN_CURRENCY.format(product.price)}</div>
    <div className='text-base xl:text-lg font-semibold text-gray-500 text-right'>RRP: <span className='line-through'>{IN_CURRENCY.format(product.oldprice)}</span></div>
    <div className='text-sm xl:text-base font-semibold text-blue-500 mt-3'>Free Returns</div>
    <div className='text-sm xl:text-base font-semibold text-blue-500 mt-1'>Free Delivery</div>
    <div className='text-sm xl:text-base font-semibold text-green-700 mt-1'>In Stock</div>
    <div className='text-base xl:text-lg mt-1'>Quantity:
    <select className='p-2 bg-white border rounded-md focus:border-indigo-600'>
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>
        <option value="">6</option>
        <option value="">7</option>
        <option value="">8</option>
    </select>
    </div>
    <button className='bg-yellow-400 w-full p-3 mt-3 text-xs xl:text-sm rounded hover:bg-yellow-500'>Add to Cart</button>
    </div>
  )
}

export default ProductPageRightSide