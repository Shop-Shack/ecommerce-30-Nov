import {React} from 'react';
import './CartProduct.css';
import {MdRemoveCircleOutline} from 'react-icons/md';
import { Link, useParams, useLocation } from "react-router-dom";
import axios from 'axios';

const CartProduct = ({item, handleDeleteItem}) => {

  // const data = useParams();


  // console.log(data);

let clothTitle = "White Sweatshirt";
clothTitle= clothTitle.length>15?`${clothTitle.substring(0,12)}...`:`${clothTitle}`;
  return (
    <div className="cart-product-container">

        <div className="cart-product-img">
          <img src="assets\images\whiteshirt.png" />
        </div>

        <div  className="cart-product-desc">
          <div className="cart-product-title">{item.title}</div>
          <div className="cart-product-price">{item.price}</div>
        </div>

        <div  className="cart-product-delete">
          <MdRemoveCircleOutline onClick={()=>{handleDeleteItem(item.productID)}}></MdRemoveCircleOutline>
        </div>

    </div>
  )
}

export default CartProduct;