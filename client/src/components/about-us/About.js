import React from 'react';
import ReactDOM from 'react-dom/client';
import './About.css';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
// import {MdOutlineShoppingCart} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {HiShoppingBag, HiOutlineUserCircle} from 'react-icons/hi'


const about = function () {
  return (<div>
    <div class="about-content">
    <div class="about-about">
      <div class="about-AboutUs">
        <p>About Us</p>
      </div>
      <div class="about-intro">
        <p class="about-shopshack">ShopShack is home to a multitude of leading international and national brands
          for apparels catering to the needs of the entire family.<br /> We aspire
          to provide our customers a memorable international shopping
          experience.</p>
       
      </div>
    </div>

    
    <div class="about-ourVision">
      <p>Our Vision</p>
    </div>
    <div class="about-VisionContent">
      <p>“To be an inspirational and trusted brand, transforming customers'
        lives through fashion and delightful shopping experience every time”</p>
    </div>
  </div>

  <div class="about-vis2">
    We have adopted a new philosophy of "Start Something New" to give retail a new dimension
    <br />and innovation is our key driver to attain excellence in customer service.
  </div>

  <div class="about-logo">
    <div class="about-Brand-logo"><HiShoppingBag /></div>
    <div class="about-Brand-name">Shop.Shack</div>
  </div>
  </div>
   



  );

return (<h1>hello</h1>)
}

export default about;