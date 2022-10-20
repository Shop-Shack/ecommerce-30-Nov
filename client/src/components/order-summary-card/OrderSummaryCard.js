import React from 'react';
import ReactDOM from 'react-dom/client';
import './OrderSummaryCard.css';

const orderSummaryCard = function () {
    return (
        <div className="order-card">
            <img src="assets\images\hoodie-product-card.jpg" />
            <div className="card-desc">
                <div className="delivery-date">Delivered on: 23-04-2022</div>
                <div className="product-details">
                <div className="product-name">Adidas Hoodie (Cream)</div>
                <div className="product-price">$ 3000</div>
                </div>
                <div className="buttons">
                    <div className="buy-again">Buy again</div>
                    
                </div>
            </div>

        </div>);
}

export default orderSummaryCard;