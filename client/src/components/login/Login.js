import React from 'react';
import ReactDOM from 'react-dom/client';
import './Login.css';
import { HiShoppingBag, HiOutlineUserCircle } from 'react-icons/hi';
// import {MdOutlineShoppingCart} from 'react-icons/md';
import {Link} from 'react-router-dom';


const login = function () {
  return (<div class="login-lr-cont">

    <div class="login-left-cont">

      <img class="login-lo_back" src="\assets\images\login_back.png" alt="" />

    </div>

    <div class="login-right-cont">


      <div class="login-heading">
        <HiShoppingBag />
        <div class="login-shopshack-text">Shop.Shack</div>
      </div>


<form action="/login" method="post">

      <div class="login-outline">

        <div class="login-e-mail-div">
          <div class="login-email-txt">E-mail</div>
          <input class="login-email-input" type="email" name="log_email" />
        </div>

        <div class="login-password-div">
          <div class="login-password-txt">Password</div>
          <input type="password" class="login-password-input"  name="log_pass"/>
        </div>
        <div class="login-logreg">
          <div class="login-btn"><button type="submit">Login</button></div>

<Link to="/register">
          <div class="login-reg-btn">Register</div>
          </Link>

        </div>
        <div class="login-Glogin">

          <div class="login-g">
            <img class="login-GIcon" src="\assets\images\GIcon.png" alt="" />
            Continue with google
          </div>

        </div>



      </div>

      </form>


    </div>
  </div>);
}

export default login;