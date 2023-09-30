import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/HomePage/Home'
import Navbar from './component/Navebar/Navbar';
import SearchResult from './component/Page/SearchResult/SearchResult';
import ProductPage from './component/Page/Product/ProductPage';
import Checkout from './component/Page/Checkout/Checkout';
import SignIn from './component/Page/SignIn_up/SignIn';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ProductSliceAction } from './Store/ProductSlice';
import Success from './component/Page/Payment/Success';
import Cancle from './component/Page/Payment/Cancle';
function App() {
  const dispatch=useDispatch()
  const BASE_URL=process.env.REACT_APP_BASE_URL;
  console.log("BaseUrl",BASE_URL);
  useEffect(()=>{
    (async()=>{
      const getProducts=await axios(`${BASE_URL}/admin/getProduct/All`);
      // console.log('render data ',getProducts.data);
      dispatch(ProductSliceAction.AllProduct({items:getProducts.data}))
    })()
    
  },[dispatch,BASE_URL])
  return (<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/search' element={<SearchResult/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/checkOut' element={<Checkout/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/success' element={<Success/>}/>
    <Route path='/cancle' element={<Cancle/>}/>
  </Routes>
    
  </>
  );
}

export default App;
