import React from "react";
import ReactDOM from "react-dom/client";
import "./OrderPlaced.css";
import { Link } from "react-router-dom";

const orderPlacedConst = function () {
  return (
    <div class="orderplaced-box">
      <div class="orderBox">
        <p class="message">Thank you, your order has been placed</p>
        <div class="orderDetails">
          <div class="orderTopic">
            <p>Your order:</p>
          </div>
          <img src="\assets\images\kidsCollection-1.png" class="orderImage" />
          <div class="orderContent">
            <p> M&S COLLECTION Denim Shirt</p>
          </div>
        </div>
        <div class="orderDelivery">
          <div class="orderDTopic">
            <p>Estimated Delivery:</p>
          </div>
          <div class="orderDContent">
            <p>Monday 19th-Sept</p>
          </div>
        </div>
        <div class="continueShopping">
          <Link to="/">
            <div class="contShop">Continue Shopping</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default orderPlacedConst;
