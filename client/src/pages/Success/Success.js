import React from 'react';
import ReactDOM from 'react-dom';
import './Success.css'
import {Link} from 'react-router-dom';

function Success() {
    return (
        <div className="payment-container">
            <h1>Payment Successful!</h1>
            <img src="\assets\images\payment-success.jpg"></img>
            <Link to='/orderPlace'>      
            <button>Continue</button>
            </Link>

        </div>
    );
}

export default Success;