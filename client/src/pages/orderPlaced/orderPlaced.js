import React from 'react';

import './orderPlaced.css';

import OrderPlaced from '../../components/order-placed/OrderPlaced';
import CollectionCard from '../../components/collection-card/Collection-card'


const order_placed = function () {
    return (<div>

        {/* <Login /> */}
        <div class="collection-container-orderPlaced">
        <OrderPlaced />
        <div class="collection-card-container-orderPlaced">
            {/* <Login /> */}
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
        </div>
        </div>

    </div>)
}

export default order_placed;