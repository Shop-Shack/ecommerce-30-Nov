import { React, useState, useEffect } from 'react';
// import ReactDOM from 'react-dom/client';
import "./Product.css";
import Checkout from "../../components/checkout/Checkout";

import { HiShoppingBag, HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Axios from "axios";


const ProductPage = function () {

  let [quantity, setQuantity] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [size, setSize] = useState("");

  useEffect(()=>{ 
    // Axios.get('http://localhost:5000')
    // .then(res=> console.log(res))

    Axios({
      method: "POST",
      url: "http://localhost:5000/hey",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        quantity: `${quantity}`
      }
    }).then(res => {
      console.log('hello');
    })
    .catch(err => console.error(err));

    
  })

  const decQuantity = function () {
    console.log(quantity);
    if (quantity == 0) {
      quantity = 0;
    }
    else {
      quantity = quantity - 1;
    }

    setQuantity(quantity);

  }
  const incQuantity = function () {
    console.log(quantity);
    quantity = quantity + 1;

    setQuantity(quantity);

  }
  const userSize = function(){


  }


  return (
    <div class="product-page-container">
      <div class="product-container">
        <img src="assets\images\whiteshirt.png" alt="" />
      </div>
      <div class="product-details-container">
        <div class="product-details-container-content">
          <div class="name-price">
            <div class="product-name">Solid white shirt</div>
            <div class="product-price">₹ 999</div>
          </div>

          <div class="product-desc">
            <div class="product-detail-title">Product Description</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>

          <div class="customer-choice">
            <div class="product-quantity">
              <div class="product-detail-title product-detail-quantity">Quantity</div>
              <div class="product-quantity-box">
                <span class="subtract" onClick={decQuantity}>-</span><input type="number" placeholder="1" value={quantity} readOnly /><span class="add" onClick={incQuantity}>+</span>
              </div>
            </div>
            <div class="product-detail-title  ">Size
              <div class="product-detail-size">
                <div class="circle-size" id="S" onClick={userSize}>
                  <p>S</p>
                </div>
                <div class="circle-size" id="M" onClick={userSize}> 
                  <p>M</p>
                </div>
                <div class="circle-size" id="L" onClick={userSize}>
                  <p>L</p>
                </div>
                <div class="circle-size" id="XL" onClick={userSize}>
                  <p>XL</p>
                </div>
              </div>
            </div>
          </div>
          <div class="product-buttons">
            <div class="add-to-cart">Add to Cart</div>
            
            <Link to='/checkout'>
            <div class="ptp">
              <div class="proceed-to-purchase">Proceed to Purchase </div>
            </div>
         
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
