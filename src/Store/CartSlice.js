import { createSlice } from "@reduxjs/toolkit"

const initialState={
    Tquantity:0,
    Tprice:0
}

const CartSlice=createSlice({
  name:'CartDetails',
  initialState:initialState,
  reducers:{
   cartDetails(state,action){
state.Tquantity=action.payload.Tquantity;
console.log('cartDetails===>>>',state.Tquantity)
state.Tprice=action.payload.Tprice
   }
  }  
})
export const CartSliceAction=CartSlice.actions;
export default CartSlice.reducer;