import { React, useState, useEffect} from 'react';
import './AddToCart.css';
import axios from 'axios';


// import Register from '../../components/register/Register';
import AddToCart from '../../components/cart-product/CartProduct';



const Cart = function () {
    let [totalCost, setTotalCost] = useState(999);


    let [cart, setCart] = useState([
        {
            productID: 1,
            title: 'T-Shirt',
            quantity: 2,
            price: '100'
        },
        {
            productID: 2,
            title: 'Hoodie',
            quantity: 2,
            price: '200'
        },
        {
            productID: 3,
            title: 'Jacket',
            quantity: 2,
            price: '300'
        }

    ]);

    useEffect(()=>{
        axios.get('/user-cart')
        .then(res=>{
            console.log(res);
        })

    },[cart])

    const handleDeleteItem = (id) => {
        console.log('delete '+id)
		const newCart = cart.filter((item) => item.productID !== id);
		setCart(newCart);


	};


    



    return (

        <div className="main-cart-container">

            <div className="cart-container">

                {cart.map((item)=>(<AddToCart id={item.id} item={item} handleDeleteItem={handleDeleteItem}/>))}
                

            </div>
            <div className="cart-price-container">
                Total Cost: <span className="cart-total-cost">${totalCost}</span>
            </div>
        </div>)
}

export default Cart;