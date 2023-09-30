import React from 'react'
import ProductDetails from './ProductDetails';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CartSliceAction } from '../../../Store/CartSlice';

const ProductPageMiddle = ({product,rating,onCartDelete,quantity}) => {
  const dispatch=useDispatch();
  const BASE_URL=process.env.REACT_APP_BASE_URL;
//  console.log('cart Product===>>>',quantity);
 const onChangeQuantity=async (e)=>{
  e.preventDefault()
  const quan=e.target.value;
  console.log(quan);

  try {
    
    const obj={prodId:product._id,quantity:quan}
    const headers={
  Authorization:'Bearer ' + localStorage.getItem('token')
 }
  const changeQuantity=await axios.put(`${BASE_URL}/cart`,obj,{headers})
  
  if(changeQuantity.status===201){
    dispatch(CartSliceAction.cartQuantityUpdated({prodId:product._id,quantity:quan}))

  }else {
    throw Error('Something went wrong!!! (status=500)')
  }
  } catch (error) {
    // console.log(error);
  }
 }
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
    <select id='quan' className='bg-amazonclone-background border-0' defaultValue={quantity} onChange={(e)=>onChangeQuantity(e)}>
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