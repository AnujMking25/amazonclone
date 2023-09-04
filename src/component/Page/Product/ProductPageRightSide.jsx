import React from 'react'

const ProductPageRightSide = ({product}) => {
  return (
    <div className='col-span-2 bg-white p-4 rounded'>
    <div className='text-xl xl:text-2xl font-semibold'>{product.price}</div>
    <div className='text-base xl:text-lg font-semibold'>{product.oldPrice}</div>
    <div className='text-sm xl:text-base font-semibold'>Free Returns</div>
    <div className='text-sm xl:text-base font-semibold'>Free Delivery</div>
    <div className='text-sm xl:text-base font-semibold'>In Stock</div>
    <div className='text-base xl:text-lg font-semibold'>Quantity:
    <select name="" id="">
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
    <button>Add to Cart</button>
    </div>
  )
}

export default ProductPageRightSide