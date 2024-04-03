import logo from './logo.svg';
import './App.css';
import Products from './Components/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import CategoryProducts from './Components/CategoryProducts';
import Header from './Components/Header';

function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={ <Products/>}/>
    <Route path="/product-details/:id" element={<ProductDetails/>}/>
    <Route path='/category/:category' element={<CategoryProducts/>} />
    
  </Routes>
  </BrowserRouter>
 
  </>
  );
}

export default App;
