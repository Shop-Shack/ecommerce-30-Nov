import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./checkout.css";

const Checkout = function () {
  return (
    <div className="chkout-lr-cont">
      <div class="chkout-left">
        <div className="chkout-outline">
          <div class="chkout-contactinfo">
            1. Contact Information
            <div class="chkout-name-txt">Name</div>
            <input type="text" class="chkout-name-txt-in" name="" id="" />
            <div class="chkout-phone-txt">Phone</div>
            <input type="text" class="chkout-phone-txt-in" name="" id="" />
            <div class="chkout-email-txt">Email</div>
            <input type="text" class="chkout-email-txt-in" name="" id="" />
          </div>

          <div class="chkout-deliinfo">
            2. Delivery Information
            <div class="chkout-addr-txt">Address</div>
            <input type="text" class="chkout-addr-txt-in" name="" id="" />
          </div>

          <div class="chkout-payment">
            3. Payment
            <div className="chkout-cod-online">
              <div class="chkout-py-COD">COD</div>
              <div class="chkout-py-onlinePy">Online Payment</div>
            </div>
          </div>
        </div>
      </div>

      <div class="chkout-right">
        <div className="chkout-outline-right">
          <div className="chkout-img-div">
            <img class="chkout-img" src="\assets\images\whiteshirt.png" />
          </div>

          <div className="chkout-shirttxt">Solid White T Shirt</div>
          <div className="chkout-size">Size: M</div>
          <div className="chkout-quant">Quantity : 1</div>
          <div className="chkout-price">Total : Rs. 999</div>
          <Link to="/orderPlace">
            <div className="chkout-chkout">Confirm Order</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
