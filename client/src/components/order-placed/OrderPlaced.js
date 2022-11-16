import React from "react";
import ReactDOM from "react-dom/client";
import "./OrderPlaced.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OrderPlacedConst = function () {
  const location = useLocation();
  // console.log(location);

  const del_date = new Date();
  del_date.setDate(del_date.getDate() + 14);
  const d_date = del_date.toDateString();

  return (
    <div class="orderplaced-box">
      <div class="orderBox">
        <p class="message">Thank you, your order has been placed</p>
        <div class="orderDetails">
          <div class="orderTopic">
            <p>Your order:</p>
          </div>
          <img src={`${location.state.url}`} class="orderImage" />
          <div class="orderContent">
            <p> {location.state.title}</p>
          </div>
        </div>
        <div class="orderDelivery">
          <div class="orderDTopic">
            <p>Estimated Delivery:</p>
          </div>
          <div class="orderDContent">
            <p>{d_date}</p>
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

export default OrderPlacedConst;
