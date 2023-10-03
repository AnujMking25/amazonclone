import { createSlice } from "@reduxjs/toolkit"
let isLoggedIn= !!localStorage.getItem('token');
let isName=isLoggedIn ? localStorage.getItem('name').split(' ')[0]:null;
console.log("name is ",isName);

const initialState={
    isAuth:isLoggedIn,
    isName:isName
}

const AuthSlice=createSlice({
  name:'Authentication',
  initialState:initialState,
  reducers:{
    login(state,action){
      localStorage.setItem('token',action.payload.token);
      localStorage.setItem('name',action.payload.name);
      state.isAuth=true;
      state.isName=action.payload.name
    },
    logout(state,action){
        state.isAuth=false;
        state.isName=null
        localStorage.removeItem('token');
        localStorage.removeItem('name')
    }
  }  
})
export const AuthSliceAction=AuthSlice.actions;
export default AuthSlice.reducer;