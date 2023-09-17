import { createSlice } from "@reduxjs/toolkit"

const initialState={
  cartProducts:[],
  Tquantity:0,
    Tprice:0
}

const CartSlice=createSlice({
  name:'CartDetails',
  initialState:initialState,
  reducers:{

   cartDetails(state,action){
    state.cartProducts=action.payload.cartProducts

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
  },
  cartQuantityUpdated(state,action){
      // state.Tquantity=state.Tquantity-action.payload.quantity;
      const prodId=action.payload.prodId;
      const quantity= +action.payload.quantity;
      let prevQuantity;
      let prevPrice
      // console.log("==>>",prodId,'==>>',quantity);
      state.cartProducts.filter(item=>{if(item.productId._id.toString()===prodId.toString()){
        prevQuantity=item.quantity;
        item.quantity=quantity;
        prevPrice=item.productId.price;
        return item;
      }
    return item;
    });

    state.Tquantity=state.Tquantity+quantity- (prevQuantity);
    state.Tprice=state.Tprice+(quantity*prevPrice)-(prevQuantity*prevPrice)
    // console.log(state.Tprice,state.Tquantity)
  }

  }  
})
export const CartSliceAction=CartSlice.actions;
export default CartSlice.reducer;