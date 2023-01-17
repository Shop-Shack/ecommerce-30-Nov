import {React, useState} from "react";
import ReactDOM from "react-dom/client";
import "./OrderPlaced.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from 'axios';

const OrderPlacedConst = function () {
 
  let [orderDetails,setOrderDetails] =useState({})
  // console.log(location);

  axios.get('http://localhost:5000/orderPlace')
  .then(response=>{

    // console.log(response.data);
    setOrderDetails(response.data);
  })
  const del_date = new Date();
  del_date.setDate(del_date.getDate() + 2);
  const d_date = del_date.toDateString();

  return (
    <div class="orderplaced-box">
      <div class="orderBox">
        <p class="message">Thank you, your order has been placed</p>
        <div class="orderDetails">
          <div class="orderTopic">
            <p>Your order:</p>
          </div>
          <img src={`${orderDetails.product_img}`} class="orderImage" />
          <div class="orderContent">
            <p> {orderDetails.product_name}</p>
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
          <Link to="/home">
            <div class="contShop">Continue Shopping</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderPlacedConst;
