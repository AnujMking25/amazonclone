import { createSlice } from "@reduxjs/toolkit"

const initialState={
  cartProducts:[],
  Tquantity:0,
    Tprice:100
}

const CartSlice=createSlice({
  name:'CartDetails',
  initialState:initialState,
  reducers:{

   cartDetails(state,action){
    state.cartProducts=action.payload.cartProducts
        // state.Tquantity=action.payload.Tquantity;
        // state.Tprice=action.payload.Tprice
        // console.log('cartDetails1===>>>',state.cartProducts)
             
  let quantity=0;
  let money=0
  state.cartProducts.forEach((cp)=>{
    quantity=quantity +cp.quantity;
    money=money+(cp.productId.price * cp.quantity);
  })
  state.Tprice=money;
  state.Tquantity=quantity
 
   },
   cartProductDelete(state,action){
    state.cartProducts=state.cartProducts.filter(item=>item.productId._id!==action.payload.prodId)
    state.Tprice=state.Tprice-(action.payload.quantity*action.payload.price);
    state.Tquantity=state.Tquantity-action.payload.quantity;
  }

  }  
})
export const CartSliceAction=CartSlice.actions;
export default CartSlice.reducer;