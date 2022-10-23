import React from 'react';
import ReactDOM from 'react-dom/client';
import './Login.css';
import { HiShoppingBag, HiOutlineUserCircle } from 'react-icons/hi';
// import {MdOutlineShoppingCart} from 'react-icons/md';
import { Link } from 'react-router-dom';
// import {GoogleLogin} from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"


const Login = function () {


  const loginGoogle = useGoogleLogin({
    onSuccess: async respose => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${respose.access_token}`
          }
        })
          .then((res) => {

            const userGoogData = { ...res.data, userIsGoog: true };
            console.log(userGoogData);

            axios.post("http://localhost:5000/login", userGoogData)
              .then(function (response) {

                console.log(response);
                if (response.data.redirect == '/') {
                  window.location = "/"
                } else if (response.data.redirect == '/login') {
                  window.location = "/login"
                }
              })
              .catch(err => console.error(err));
          })
          .catch(err => console.err(err));


      } catch (err) {
        console.log(err)

      }

    }
  });
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
            <input type="password" class="login-password-input" name="log_pass" />
          </div>
          <div class="login-logreg">
            <button type="submit" class="login-btn">Login</button>

            <Link to="/register">
            
            <button  class="login-reg-btn">Register</button>
              
            </Link>

          </div>
          <div class="login-Glogin">

            <div class="login-g" onClick={loginGoogle}>
              <img class="login-GIcon" src="\assets\images\GIcon.png" alt="" />
              Continue with google
            </div>

          </div>



        </div>

      </form>


    </div>
  </div>);
}

export default Login;