import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductPageMiddle from '../Product/ProductPageMiddle';
import { useDispatch, useSelector } from 'react-redux';
import { CartSliceAction } from '../../../Store/CartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [cartItems,setCartItems]=useState();
  const isAuth=useSelector(state=>state.auth.isAuth);
  const Tquantity=useSelector(state=>state.cartDetails.Tquantity);
  const Tprice=useSelector(state=>state.cartDetails.Tprice)
  const dispatch=useDispatch();
  const navigate=useNavigate();
 

  useEffect(()=>{
    const onCartDeleteHandler=async(prodId)=>{
      console.log('ProdId is ===>>>',prodId);
      const headers={
         Authorization:'Bearer ' + localStorage.getItem('token')
      }
      const deleteCartItem=await axios.delete(`http://localhost:4000/cart/${prodId}`,{headers})
      console.log(deleteCartItem.data);
      navigate('/checkout')
    }

    const headers={
      Authorization:'Bearer ' + localStorage.getItem('token')
     }
    const getCartProductI=async()=>{
      const cartProducts=await axios('http://localhost:4000/cart',{headers});
      
  let quantity=0;
  let money=0
      const cart= cartProducts.data.map((cartProduct)=>{
        quantity=quantity +cartProduct.quantity;
        money=money+(cartProduct.productId.price*cartProduct.quantity);
        const cProduct=cartProduct.productId;
        console.log(cProduct);
        const prodId=cProduct._id;
         return <div className=" grid grid-cols-10 gap-2" key={cProduct._id} >
             <div className='col-span-3 flex justify-center items-center'>
                <img src={cProduct.imageUrl} alt={cProduct.title} />
             </div>
            
              <ProductPageMiddle product={cProduct} rating={"no"} onCartDelete={()=> onCartDeleteHandler(prodId)} />
             
              </div>
      })
      // console.log('cart data total quantity===>>>',quantity);
      // console.log(cart);
      dispatch(CartSliceAction.cartDetails({Tquantity:quantity,Tprice:money}))
      setCartItems((prev)=>{return prev=cart})
    }
    getCartProductI();
  },[dispatch,navigate])
  
  return (
    <div className=" bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px]  pt-8">
        <div className="grid grid-cols-8 gap-10 p-3">
          {/* Products */}
          <div className="col-span-6 bg-white ">
            <div className="text-2xl xl:text-3xl m-4 divide-y-2 divide-gray-200 p-2">
            <div className='h-[40px]'>Shopping Cart</div>
            {isAuth && cartItems}
            <div className='text-right'><p>SubTotal ({Tquantity} items):₹{Tprice}</p></div>
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-lg xl:text-lg mt-4 mb-4 ">
             
              <p>SubTotal ({Tquantity} items):<span className="font-bold">₹{Tprice}</span></p>
            </div>
            <button className='bg-yellow-300 w-full p-2 mt-3 text-base xl:text-md rounded-lg hover:bg-yellow-400'>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout