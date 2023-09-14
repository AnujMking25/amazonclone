import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}
const ProductSlice=createSlice({
name:'Product Details',
initialState:initialState,
reducers:{
    AllProduct(state,action){
        state.products=action.payload.items;
        // console.log('Redux',state.products)
        
    }
}
})
export const ProductSliceAction=ProductSlice.actions;
export default ProductSlice.reducer;