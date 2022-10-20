import React from "react";
// import ReactDOM from 'react-dom/client';
import "./Navbar.css";
import { HiShoppingBag, HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const navbar = function () {
  return (
    <div className="navbar">
      <div className="Brand">
        <div className="Brand-logo">
          <HiShoppingBag />
        </div>
        <div className="Brand-name">Shop.Shack</div>
      </div>
      <ul>
        <Link to="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link to="/shop">
          <li>
            <a>Shop</a>
          </li>
        </Link>
        <Link to="/aboutus">
          <li>
            <a>About Us</a>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <a>Contact Us</a>
          </li>
        </Link>
      </ul>
      <div className="cart-profile">
        <MdOutlineShoppingCart />
        <HiOutlineUserCircle />
      </div>
    </div>
  );
};

export default navbar;
