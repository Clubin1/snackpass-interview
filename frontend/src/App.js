import React from 'react'
import { Routes, Route } from 'react-router-dom' 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import HomePage from './views/home/HomePage';
import OrderPage from './views/orders/OrderPage';
import Navbar from './components/UI/Navbar'
import NotFound from './views/error/NotFound';

const App = () => {
    return (
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/orders" element={<OrderPage/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    );
}

export default App;