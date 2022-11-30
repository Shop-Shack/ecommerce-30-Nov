import {React, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import axios from 'axios';

// import {MdOutlineShoppingCart} from 'react-icons/md';
const Home = () => {

  
  axios.get('http://localhost:5000/')
  .then(res=>{

    console.log(res);

  })


  return (
    <div class="homepage-page">
      <div class="homepage-onClickCategories">
        <img
          class="homepage-image-1-icon1"
          alt=""
          src="\assets\images\homepage-main.png"
        />
        <div class="homepage-ShopNow">
          <button class="homepage-shopNowBtn" type="submit" id="shopNowText">
            <Link to="/shop">
              <a href="categories.html">Shop Now</a>
            </Link>
          </button>
        </div>
      </div>
      <div class="homepage-showCategories">
        <div class="homepage-Wear">
          <img src="\assets\images\kidsCollection.png" class="kids" />
          <Link to="/kids">
            <p class="homepage-align-center">KIDS WEAR</p>
          </Link>
        </div>
        <div class="homepage-Wear">
          <img src="\assets\images\womenCollection.png" class="women" />
          <p class="homepage-align-center">
            <Link to="/women">WOMEN'S WEAR</Link>
          </p>
        </div>
        <div class="homepage-Wear">
          <img src="\assets\images\menCollection.png" class="men" />
          <p class="homepage-align-center">
            <Link to="/men">MEN'S WEAR</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
