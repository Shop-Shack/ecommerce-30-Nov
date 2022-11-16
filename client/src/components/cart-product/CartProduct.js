import React from 'react';
import './CartProduct.css';
import {MdRemoveCircleOutline} from 'react-icons/md';

const CartProduct = () => {

let clothTitle = "White Sweatshirt";
clothTitle= clothTitle.length>15?`${clothTitle.substring(0,12)}...`:`${clothTitle}`;
  return (
    <div className="cart-product-container">
        <div className="cart-product-img">
          <img src="assets\images\whiteshirt.png" />
        </div>
        <div  className="cart-product-desc">
          <div className="cart-product-title">{clothTitle}</div>
          <div className="cart-product-price">$ 999</div>
        </div>
        <div  className="cart-product-delete">
        <MdRemoveCircleOutline></MdRemoveCircleOutline>
          
        </div>

    </div>
  )
}

export default CartProduct;