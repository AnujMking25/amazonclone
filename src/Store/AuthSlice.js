import { createSlice } from "@reduxjs/toolkit"
const isLoggedIn=false;
const initialState={
    isAuth:isLoggedIn
}

const AuthSlice=createSlice({
  name:'Authentication',
  initialState:initialState,
  reducers:{
    login(state,action){
        state.isAuth=true;
    },
    logout(state,action){
        state.isAuth=false;
    }
  }  
})
export const AuthSliceAction=AuthSlice.actions;
export default AuthSlice.reducer;