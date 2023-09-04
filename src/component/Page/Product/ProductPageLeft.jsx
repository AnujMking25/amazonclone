import React from 'react'

const ProductPageLeft = ({imageUrl}) => {
  return (
    <div className='col-span-3 p-8 rounded bg-white m-auto ' > 
    <img src={`${imageUrl}`} alt={`${imageUrl}`} />
  </div>
  )
}

export default ProductPageLeft