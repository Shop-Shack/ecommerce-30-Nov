import {React, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./Login.css";
import { HiShoppingBag, HiOutlineUserCircle } from "react-icons/hi";
// import {MdOutlineShoppingCart} from 'react-icons/md';
import { Link } from "react-router-dom";
// import {GoogleLogin} from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = function () {

  let [log_email, setEmail] = useState();
  let [log_password, setPassword] = useState();

  const handleEmail = function(e){

    let log_email = e.target.value;

  console.log(log_email);
  setEmail(log_email);

}
const handlePassword = function(e){
  
  let log_password = e.target.value;
  
  console.log(log_password);
    setPassword(log_password);

  }

  // useEffect(()=>{

  //   if(localStorage.getItem('token')!='undefined'){
  //   axios.post('http://localhost:5000/login', {
  //     access_token: localStorage.getItem('token')
  //   })
  //   .then(response=>{
  //     // console.log(response)
  //     console.log(response.data);
  //     localStorage.setItem('token',response.data.token);
  //     window.location=response.data.redirect;
  //   })
  // }else{
  //   console.log('login babe')
  // }

  // })

  const handleSubmit = function(e) {
    // e.preventDefault();

    console.log('click submit')

    axios.post('http://localhost:5000/login', {
      log_email:log_email, log_password:log_password
    })
    .then(response=>{
      // console.log(response)
      console.log(response.data);
      localStorage.removeItem("userGoog");
      localStorage.setItem('token',response.data.token);
      
      window.location=response.data.redirect;
    })
  }

  // axios.get('http://localhost:5000/login')
  // .then(response=>{
  //   console.log(response);
  // })
  // .catch(err => console.log(err));

  
  
  let googleDataResponse;

  const loginGoogle = useGoogleLogin({
    onSuccess: async (resp) => {
      try {
        const res = await axios
          .get("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: {
              Authorization: `Bearer ${resp.access_token}`,
            },
          })
          .then((res) => {
            const userGoogData = {
              ...res.data,
              userIsGoog: true,
              access_token: resp.access_token,
            };
            console.log(userGoogData);

            axios
              .post("http://localhost:5000/login", userGoogData)
              .then(function (response) {
                console.log(response);
                if (response.data.redirect == "/") {
                  localStorage.clear();
                  localStorage.setItem('userGoog',response.data.userGoog);
                  window.location = "/";
                } else if (response.data.redirect == "/login") {
                  localStorage.clear();
                  window.location = "/login";
                }
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.err(err));

        console.log("resp");
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    },
    scope: "openid email profile https://www.googleapis.com/auth/calendar",
  });
  return (
    <div class="login-lr-cont">
      <div class="login-left-cont">
        <img class="login-lo_back" src="\assets\images\login_back.png" alt="" />
      </div>

      <div class="login-right-cont">
        <div class="login-heading">
          <HiShoppingBag />
          <div class="login-shopshack-text">Shop.Shack</div>
        </div>

        {/* <form action="/login" method="post"> */}
          <div class="login-outline">
            <div class="login-e-mail-div">
              <div class="login-email-txt">E-mail</div>
              <input class="login-email-input" type="email" name="log_email" onChange={handleEmail} value={log_email}/>
            </div>

            <div class="login-password-div">
              <div class="login-password-txt">Password</div>
              <input
                type="password"
                class="login-password-input"
                name="log_pass"
                onChange={handlePassword}
                value={log_password}
              />
            </div>
            <div class="login-logreg">
              <div  class="login-btn" onClick={handleSubmit} name="login-btn">
                Login
              </div>

              <Link to="/register">
                <button class="login-reg-btn">Register</button>
              </Link>
            </div>
            <div class="login-Glogin">
              <div class="login-g" onClick={loginGoogle}>
                <img
                  class="login-GIcon"
                  src="\assets\images\GIcon.png"
                  alt=""
                />
                Continue with google
              </div>
            </div>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
