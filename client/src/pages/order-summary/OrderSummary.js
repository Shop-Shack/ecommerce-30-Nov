import React from 'react';
import './OrderSummary.css';
import OrderSummaryCard from '../../components/order-summary-card/OrderSummaryCard';



const orderSummary = function () {
    return (<div>

        <div className="order-container">
            <div className="order-title">Order Summary</div>
            <div className="orders">
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
                <OrderSummaryCard></OrderSummaryCard>
            </div>
        </div>
    </div>)
}

export default orderSummary;