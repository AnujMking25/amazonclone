import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home'
import Navbar from './component/Navebar/Navbar';
function App() {
  return (<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
  </Routes>
    
  </>
  );
}

export default App;
