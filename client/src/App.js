import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product-page/Product";
import Cards from "./components/category-cards/Cards";
import Checkout from "./components/checkout/Checkout";
import OrderPlaced from "./pages/orderPlaced/orderPlaced";

import OrderSummary from "./pages/order-summary/OrderSummary";

import AuthIn from './pages/AuthIn/AuthIn';
import Contact from './pages/ContactUs/ContactUs';
import Homepage from './pages/Homepage/HomePage';
import KidsCollection from './pages/KidsCollection/KidsCollection';
import MenCollection from './pages/MenCollection/MenCollection';
import WomenCollection from './pages/WomenCollection/WomenCollection';
import Categories from './pages/categories/Categories';
import AboutUs from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';

import  {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        {/* <Checkout></Checkout> */}
        {/* <AboutUs></AboutUs> */}

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/shop" element={<Categories />} />
          <Route path="/register" element={<AuthIn />} />
          <Route path="/kids" element={<KidsCollection />} />
          <Route path="/men" element={<MenCollection />} />
          <Route path="/women" element={<WomenCollection />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderPLace" element={<OrderPlaced />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/hey" element={<Product />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        {/* <Contact></Contact>
    <Categories></Categories>
    <Homepage></Homepage> */}
        {/* <WomenCollection></WomenCollection> */}
        {/* <Contact></Contact> */}
        {/* <Categories></Categories> */}
        {/* <OrderSummary></OrderSummary> */}
        {/* <Product></Product> */}
      </div>
    </Router>
  );
};

export default App;
