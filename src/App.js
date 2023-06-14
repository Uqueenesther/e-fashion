
import React from 'react';
import './categories.styles.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/checkout';




const App = () => {
  return (
    <Routes>
          <Route path='/'  element ={<Navigation />}>
          <Route index element={<Home />}></Route>
          <Route path='Shop'  element={<Shop />}></Route>
          <Route path='Authentication' element={<Authentication />}></Route>
          <Route path='Checkout' element={<Checkout/>}></Route>
      </Route>
     
    </Routes>
  );
};

export default App; 
  
