import { React, useState } from 'react';
import './AddToCart.css';


// import Register from '../../components/register/Register';
import AddToCart from '../../components/cart-product/CartProduct';



const Cart = function () {
    let [totalCost, setTotalCost] = useState(999);

    return (

        <div className="main-cart-container">

            <div className="cart-container">

                <AddToCart></AddToCart>
                <AddToCart></AddToCart>
                <AddToCart></AddToCart>
                <AddToCart></AddToCart>
                <AddToCart></AddToCart>
                <AddToCart></AddToCart>
                
            </div>
            <div className="cart-price-container">
                Total Cost: <span className="cart-total-cost">${totalCost}</span>
            </div>
        </div>)
}

export default Cart;