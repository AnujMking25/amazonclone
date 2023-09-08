import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/HomePage/Home'
import Navbar from './component/Navebar/Navbar';
import SearchResult from './component/Page/SearchResult/SearchResult';
import ProductPage from './component/Page/Product/ProductPage';
import Checkout from './component/Page/Checkout/Checkout';
import SignIn from './component/Page/SignIn_up/SignIn';
function App() {
  return (<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/search' element={<SearchResult/>}/>
    <Route path='/product' element={<ProductPage/>}/>
    <Route path='/checkOut' element={<Checkout/>}/>
    <Route path='/signin' element={<SignIn/>}/>
  </Routes>
    
  </>
  );
}

export default App;
