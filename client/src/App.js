import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product-page/Product";
import Cards from "./components/category-cards/Cards";
import Checkout from "./components/checkout/Checkout";
import OrderPlaced from "./pages/orderPlaced/orderPlaced";

import OrderSummary from "./pages/order-summary/OrderSummary";

import AuthIn from "./pages/AuthIn/AuthIn";
import Contact from "./pages/ContactUs/ContactUs";
import Homepage from "./pages/Homepage/HomePage";
import KidsCollection from "./pages/KidsCollection/KidsCollection";
import MenCollection from "./pages/MenCollection/MenCollection";
import WomenCollection from "./pages/WomenCollection/WomenCollection";
import Categories from "./pages/categories/Categories";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Cart from "./pages/AddToCartPage/AddToCart";
import CartProduct from "./components/cart-product/CartProduct";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/shop" element={<Categories />} />
          <Route path="/register" element={<AuthIn />} />
          <Route path="/kids" element={<KidsCollection />} />
          <Route path="/men" element={<MenCollection />} />
          <Route path="/women" element={<WomenCollection />} />
          <Route path="/women/product/:id" element={<Product />} />
          <Route path="/men/product/:id" element={<Product />} />
          <Route path="/kids/product/:id" element={<Product />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orderPlace" element={<OrderPlaced />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/hey" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-to-cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
