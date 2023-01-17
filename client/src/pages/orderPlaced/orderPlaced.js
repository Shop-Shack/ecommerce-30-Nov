import { React, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import "./orderPlaced.css";

import OrderPlaced from "../../components/order-placed/OrderPlaced";
import CollectionCard from "../../components/collection-card/Collection-card";

const Order_placed = function () {
  // const location = useLocation();

  let [orderDetails,setOrderDetails] =useState({})
  let [cat,setCat] =useState()
  
  
  const [clothes, setClothes] = useState([]);
    // let type = { category: "kids" };
  let type = { category: `${cat}` }; 
// 
useEffect(() => {
  axiosClothes();
});
// console.log(cat);

let fetchURL;



const axiosClothes = async () => {
  const res = await axios.get('http://localhost:5000/orderPlace')
  
  
  // console.log(res.data);
  setOrderDetails(res.data);
  setCat(res.data.product_category);
  // console.log(cat)
  
  if (cat == "women")
  fetchURL = `https://srushtiharyan.github.io/ecommerce-women-clothes-api/db.json`;
  if (cat == "men")
  fetchURL = `https://madhurachitale.github.io/ecommerce-men-clothes-api/db.json`;
  if (cat == "kids")
  fetchURL = `https://md-1107.github.io/ecommerce-kids-clothes-api/db.json`;
  
  const response = await axios.get(fetchURL);
    

    if (cat == "women") {
      {
        // return response.data.wClothesData;
        setClothes(response.data.wClothesData);
      }
    } else if (cat == "men") {
      {
        setClothes(response.data.mClothesData);
      }
    } else if (cat == "kids") {
      {
        setClothes(response.data.kClothesData);
      }
    }
  };

  //   const location = useLocation();

  return (
    <div>
      {/* <Login /> */}
      <div class="collection-container-orderPlaced">
        <OrderPlaced />
        <div class="collection-card-container-orderPlaced">
          {/* <Login /> */}
          {/* <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard /> */}
          {clothes.slice(0, 5).map((cloth, index) => {
            cloth.category = type.category;
            return <CollectionCard key={index} {...cloth} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Order_placed;
