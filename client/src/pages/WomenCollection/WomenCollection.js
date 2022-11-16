import { React, useState, useEffect } from 'react';
import './WomenCollection.css';
import CollectionCard from '../../components/collection-card/Collection-card';
import axios from 'axios';
import cors from 'cors';


const Collection = function () {

    const [clothes, setClothes] = useState([]);
    let type  ={category:"women"};

    useEffect(() => {
        
        axiosClothes();

    }, [])


        const axiosClothes = async () => {

            const response = await axios.get(`https://srushtiharyan.github.io/ecommerce-women-clothes-api/db.json`);
            setClothes(response.data.wClothesData)
            console.log(response.wClothesData)
        }
        console.log(clothes);
    



    // const names = ['James', 'Paul', 'John', 'George', 'Ringo'];

    return (<div class="women-collection-container">
        <div class="WomenCollection-title">Women's Collection</div>

        <div class="women-collection-card-container">

            {clothes.map((cloth,index) => {

                cloth.category=type.category;
                return <CollectionCard key={index} {...cloth} />
            })}
          

            {/* <CollectionCard />
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