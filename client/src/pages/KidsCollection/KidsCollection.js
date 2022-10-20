import React from 'react';
import './KidsCollection.css';
import CollectionCard from '../../components/collection-card/Collection-card';



const Collection = function () {
    return (<div class="collection-container">
        <div class="KidsCollection-title">Kids Collection</div>

        <div class="collection-card-container">
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