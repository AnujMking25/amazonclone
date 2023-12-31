import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductPageMiddle from "../Product/ProductPageMiddle";
import { useDispatch, useSelector } from "react-redux";
import { CartSliceAction } from "../../../Store/CartSlice";
import {loadStripe} from '@stripe/stripe-js';

const Checkout = () => {
  const [cartItems, setCartItems] = useState();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const Tquantity = useSelector((state) => state.cartDetails.Tquantity);
  const Tprice = useSelector((state) => state.cartDetails.Tprice);
  const cartP = useSelector((state) => state.cartDetails.cartProducts);
  const BASE_URL=process.env.REACT_APP_BASE_URL;
  console.log("cartP==>>", cartP);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };
    const getCartProductI = isAuth ? async () => {
      const cartProducts = await axios(`${BASE_URL}/cart`, {
        headers,
      });
      dispatch(
        CartSliceAction.cartDetails({ cartProducts: cartProducts.data })
      );
      
    }:()=>null;
    getCartProductI();
  }, [dispatch ,isAuth,BASE_URL]);

  useEffect(()=>{
    const onCartDeleteHandler = async (prodId,quantity,price) => {
      // console.log("ProdId is ===>>>", prodId);
      const headers = {
        Authorization: "Bearer " + localStorage.getItem("token"),
      };
      const deleteCartItem = await axios.delete(
        `${BASE_URL}/cart/${prodId}`,
        { headers }
      );
      dispatch(CartSliceAction.cartProductDelete({ prodId: prodId,quantity:quantity,price:price }));
    };

    const cart = cartP.map((cartProduct) => {
      const cProduct = cartProduct.productId;

      const prodId = cProduct._id;
      return (
        <div className=" grid grid-cols-10 gap-2" key={cProduct._id}>
          <div className="col-span-3 flex justify-center items-center">
            <img src={cProduct.imageUrl} alt={cProduct.title} />
          </div>

          <ProductPageMiddle
            product={cProduct}
            quantity={cartProduct.quantity}
            rating={"no"}
            onCartDelete={() => onCartDeleteHandler(prodId,cartProduct.quantity,cProduct.price)}
          />
        </div>
      );
    });

    setCartItems((prev) => {
      return (prev = cart);
    });
    // 
  },[cartP,dispatch,BASE_URL])

const onPaymentHandler=async()=>{
  const stripe = await loadStripe("pk_test_51NqEw1SEA04VGFlGNgFM61iQlKHDOE4XpplV0CgHSPtCRW2GRJkBTxeu6y8OH900w2t2zh8yECbjmGltM4yZvarm00PgdA7JDn");
  
  const headers={
    "Content-Type":"application/json"
  }
  console.log("This is cartdetails",cartP);
  const body={
    products:cartP}
  
  const respose=await fetch(`${BASE_URL}/payment/create-checkout-session`,{
    method:"POST",
    headers:headers,
    body:JSON.stringify(body)
  });

  const session=await respose.json();
  const result=stripe.redirectToCheckout({
    sessionId:session.id
  })
 if(result.error){
  alert("Something went worng!!! Try again later")
 }

}

  return (
    <div className=" bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px]  pt-8">
        <div className="grid grid-cols-8 gap-10 p-3">
          {/* Products */}
          <div className="col-span-6 bg-white ">
            <div className="text-2xl xl:text-3xl m-4 divide-y-2 divide-gray-200 p-2">
              <div className="h-[40px]">Shopping Cart</div>
              {isAuth && cartItems}
              <div className="text-right">
                <p>
                  SubTotal ({Tquantity} items):₹{Tprice}
                </p>
              </div>
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
          
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-lg xl:text-lg mt-4 mb-4 ">
              <p>
                SubTotal ({Tquantity} items):
                <span className="font-bold">₹{Tprice}</span>
              </p>
            </div>
            <button id="order-btn"
             className="bg-yellow-300 w-full p-2 mt-3 text-base xl:text-md rounded-lg hover:bg-yellow-400"
             onClick={()=>onPaymentHandler()}
             >
              Proceed to Checkout
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
