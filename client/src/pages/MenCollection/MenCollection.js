import { React, useState, useEffect } from 'react';
import './MenCollection.css';
import CollectionCard from '../../components/collection-card/Collection-card';
import axios from 'axios';
import cors from 'cors';


const Collection = function () {


    const [clothes, setClothes] = useState([]);
    let type = { category: "men" };

    useEffect(() => {

        axiosClothes();

    }, [])


    const axiosClothes = async () => {

        const response = await axios.get(`https://madhurachitale.github.io/ecommerce-men-clothes-api/db.json`);
        setClothes(response.data.mClothesData)
        console.log(response.mClothesData)
    }
    console.log(clothes);


    return (<div class="men-collection-container">
        <div class="MenCollection-title">Men's Collection</div>

        <div class="men-collection-card-container">



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