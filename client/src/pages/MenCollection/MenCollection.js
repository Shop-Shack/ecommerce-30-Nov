import React from 'react';
import './MenCollection.css';
import CollectionCard from '../../components/collection-card/Collection-card';



const Collection = function () {
    return (<div class="men-collection-container">
        <div class="MenCollection-title">Men's Collection</div>

        <div class="men-collection-card-container">
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