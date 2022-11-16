import { React, useState, useEffect } from 'react';
import './KidsCollection.css';
import CollectionCard from '../../components/collection-card/Collection-card';
import axios from 'axios';
import cors from 'cors';



const Collection = function () {


    const [clothes, setClothes] = useState([]);
    let type = { category: "kids" };

    useEffect(() => {

        axiosClothes();

    }, [])


    const axiosClothes = async () => {

        const response = await axios.get(`https://md-1107.github.io/ecommerce-kids-clothes-api/db.json`);
        setClothes(response.data.kClothesData)
        console.log(response.kClothesData)
    }
    console.log(clothes);

    return (<div class="collection-container">
        <div class="KidsCollection-title">Kids Collection</div>

        <div class="collection-card-container">

            {clothes.map((cloth, index) => {

                cloth.category = type.category;
                return <CollectionCard key={index} {...cloth} />
            })}
            {/* <Login />
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
            <CollectionCard /> */}
        </div>
    </div>)
}

export default Collection;