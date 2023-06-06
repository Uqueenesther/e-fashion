
import React from 'react';
import './categories.styles.scss'
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication';


const Shop =() =>{

  return(
    <div>
      Welcome, Shop here 
    </div>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path='/'  element ={<Navigation />}>
      <Route index element={<Home />}></Route>
      <Route path='Shop'  element={<Shop />}></Route>
      <Route path='Authentication' element={<Authentication />}></Route>
      </Route>
     
    </Routes>
  );
};

export default App; 
  
