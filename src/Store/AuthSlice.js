import { createSlice } from "@reduxjs/toolkit"
const isLoggedIn= !!localStorage.getItem('token');
const isName=localStorage.getItem('name')

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
    },
    logout(state,action){
        state.isAuth=false;
        localStorage.removeItem('token');
        localStorage.removeItem('name')
    }
  }  
})
export const AuthSliceAction=AuthSlice.actions;
export default AuthSlice.reducer;