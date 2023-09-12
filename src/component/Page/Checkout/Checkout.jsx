import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductPageMiddle from '../Product/ProductPageMiddle';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const [cartItems,setCartItems]=useState();
  const isAuth=useSelector(state=>state.auth.isAuth);
  const onCartDeleteHandler=async(prodId)=>{
    console.log('ProdId is ===>>>',prodId);
    const deleteCartItem=await axios.delete(`http://localhost:4000/cart/${prodId}`)
    console.log(deleteCartItem.data);
  }

  useEffect(()=>{
    const headers={
      Authorization:'Bearer ' + localStorage.getItem('token')
     }
    const getCartProductI=async()=>{
      const cartProducts=await axios('http://localhost:4000/cart',{headers});
      console.log(cartProducts.data);
  
      const cart= cartProducts.data.map((cartProduct)=>{
        // console.log(cartProduct.productId);
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
      // console.log(cart);
      setCartItems((prev)=>{return prev=cart})
    }
    getCartProductI();
  },[])
  
  return (
    <div className=" bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px]  pt-8">
        <div className="grid grid-cols-8 gap-10 p-3">
          {/* Products */}
          <div className="col-span-6 bg-white ">
            <div className="text-2xl xl:text-3xl m-4 divide-y-2 divide-gray-200 p-2">
            <div className='h-[40px]'>Shopping Cart</div>
            {isAuth && cartItems}
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