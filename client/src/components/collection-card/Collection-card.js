import React from 'react';
import ReactDOM from 'react-dom/client';
import './Collection-card.css';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
// import {MdOutlineShoppingCart} from 'react-icons/md';
import { Link } from 'react-router-dom';


const collectionCard = function ({dataPID, title, url, price, category}) {
  return (
    <div class="collection-card" id={dataPID}>
    <Link to={`/${category}/product/${dataPID}`}>
        <img src={url} class="collection-cardimage" />
        <div class="collection-card-desc">
          <div class="collection-card-brand">M&S COLLECTION</div>
          <div class="collection-card-cloth-name">{title}</div>
          <div class="collection-card-price">{price}</div>
        </div>
    </Link>
      </div>



  );
}

export default collectionCard;