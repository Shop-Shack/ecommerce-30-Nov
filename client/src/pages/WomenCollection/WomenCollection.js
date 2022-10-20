import React from 'react';
import './WomenCollection.css';
import CollectionCard from '../../components/collection-card/Collection-card';



const Collection = function () {
    return (<div class="women-collection-container">
        <div class="WomenCollection-title">Women's Collection</div>

        <div class="women-collection-card-container">
            {/* <Login /> */}
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
            <CollectionCard />
        </div>
    </div>)
}

export default Collection;