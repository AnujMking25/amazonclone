import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Checkout = () => {
  const [cartItems,setCartItems]=useState();

  const getCartProductI=async()=>{
    const cartProducts=await axios('http://localhost:4000/cart');
    console.log(cartProducts.data);
    const cart= cartProducts.data.map((cartProduct)=>{
      // console.log(cartProduct.productId);
      const cProduct=cartProduct.productId;
       return <div className="text-lg xl:text-xl text-right mb-4 mr-4" key={cProduct._id}>
            <img src={cProduct.imageUrl} alt={cProduct.title} />
            <p>{cProduct.title}</p>     
              <span className="font-semibold">
               ₹{cProduct.price}
              </span>
            </div>
    })
    // console.log(cart);
    setCartItems((prev)=>{return prev=cart})
  }
  useEffect(()=>{
    getCartProductI();
  },[])
  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Products */}
          <div className="col-span-6 bg-white ">
            <div className="text-2xl xl:text-3xl m-4 divide-y-2 divide-gray-200 p-2">
            <div className='h-[40px]'>Shopping Cart</div>
            {cartItems}
            <div></div>
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
             
              <span className="font-semibold">

              </span>
            </div>
            <button >Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout