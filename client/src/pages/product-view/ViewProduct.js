import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from '../../components/navbar/Navbar';
import Product from '../../components/product-page/Product';
import Homepage from '../../homepage';
// import Checkout from '../../components/checkout/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <Navbar></Navbar>

    <Product></Product>
    
  </div>

);