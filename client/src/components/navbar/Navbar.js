import React from "react";
// import ReactDOM from 'react-dom/client';
import "./Navbar.css";
import { HiShoppingBag, HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi"

const navbar = function ({ cartCount, setCartCount }) {
  return (
    <div className="navbar">
      <div className="Brand">
        <div className="Brand-logo">
          <HiShoppingBag />
        </div>
        <div className="Brand-name">Shop.Shack</div>
      </div>
      <ul>
        <Link to="/home">
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
        <Link to="/">
      <div className="cart-profile">
          {/* <MdOutlineShoppingCart /> */}
          <div className="logout">Logout</div>
          <FiLogOut />
      </div>
        </Link>
    </div>
  );
};

export default navbar;
