import { React, useState, useEffect } from "react";
// import ReactDOM from 'react-dom/client';
import "./Product.css";
import Checkout from "../../components/checkout/Checkout";

import { HiShoppingBag, HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useParams, useLocation } from "react-router-dom";
import Axios from "axios";

const ProductPage = function ({cartCount, setCartCount}) {

  let [userGoog, setUserGoog]=useState(localStorage.getItem('userGoog'));
  const { id } = useParams();
  // console.log(useLocation());
  const { pathname } = useLocation();
  let category = pathname;
  category = category.slice(1, category.length);
  console.log();
  category = category.substring(0, category.indexOf("/"));

  let fetchURL;
  if (category == "women")
    fetchURL = `https://srushtiharyan.github.io/ecommerce-women-clothes-api/db.json`;
  if (category == "men")
    fetchURL = `https://madhurachitale.github.io/ecommerce-men-clothes-api/db.json`;
  if (category == "kids")
    fetchURL = `https://md-1107.github.io/ecommerce-kids-clothes-api/db.json`;

  console.log("fetchURL:" + fetchURL);

  let [quantity, setQuantity] = useState(0);
  const [greeting, setGreeting] = useState("");
  const [activeSize, setActiveSize] = useState("");
  // const [size, setSize] = useState("");

  useEffect(() => {
    // Axios.get('http://localhost:5000')
    // .then(res=> console.log(res))
  });

  const decQuantity = function () {
    console.log(quantity);
    if (quantity == 0) {
      quantity = 0;
    } else {
      quantity = quantity - 1;
    }

    setQuantity(quantity);
  };
  const incQuantity = function () {
    console.log(quantity);
    quantity = quantity + 1;

    setQuantity(quantity);
  };
  // const userSize = function () {};

  const [productItem, setProductItem] = useState({});

  const userSize = function (e) {
    console.log(e.target.id);
    setActiveSize(e.target.id);
  };

  useEffect(() => {
    axiosClothes();
  }, []);

  const axiosClothes = async () => {
    const response = await Axios.get(fetchURL);
    console.log(response.data.wClothesData);
    // console.log(match)
    if (category == "women")
      setProductItem(
        response.data.wClothesData.find((clothes) => clothes.dataPID === id)
      );
    else if (category == "men")
      setProductItem(
        response.data.mClothesData.find((clothes) => clothes.dataPID === id)
      );
    else if (category == "kids")
      setProductItem(
        response.data.kClothesData.find((clothes) => clothes.dataPID === id)
      );

    console.log(productItem);
  };
  // console.log(clothes);

  const postToExpress = () => {

    
    Axios.post(`http://localhost:5000/checkout/:${id}`, {
      quantity: `${quantity}`,
      size: activeSize,
      title: productItem.title,
      url: productItem.url,
      price: productItem.price,
      userGoog: userGoog
    });
    console.log(activeSize);
  };

  const addProductToCart = ()=>{


    // cartCount=cartCount+1;
    setCartCount(cartCount+1);

    

    //handleGoogleWalaToo

    Axios.post('http://localhost:5000/user-cart',{

      token: localStorage.getItem('token'),
      productID: id,
      quantity: `${quantity}`,
      size: activeSize,
      title: productItem.title,
      url: productItem.url,
      price: productItem.price,

    })

    Axios.post('http://localhost:5000/user-cart-count',{
      
    })
  }

  return (
    <div class="product-page-container">
      <div class="product-container">
        <img src={productItem.url} alt="" />
      </div>
      <div class="product-details-container">
        <div class="product-details-container-content">
          <div class="name-price">
            <div class="product-name" name="prod_title">
              {productItem.title}
            </div>
            <div class="product-price" name="prod_price">
              {productItem.price}
            </div>
          </div>

          <div class="product-desc">
            <div class="product-detail-title">Product Description</div>
            <p>{productItem.desc}</p>
          </div>

          {/* <form action="/product/:id" method="POST"> */}
          <div class="customer-choice">
            <div class="product-quantity">
              <div class="product-detail-title product-detail-quantity">
                Quantity
              </div>
              <div class="product-quantity-box">
                <span class="subtract" onClick={decQuantity}>
                  -
                </span>
                <input
                  name="product_quantity"
                  type="number"
                  placeholder="1"
                  value={quantity}
                  readOnly
                />
                <span class="add" onClick={incQuantity}>
                  +
                </span>
              </div>
            </div>
            <div class="product-detail-title  ">
              Size
              <div class="product-detail-size">
                <div
                  className={
                    "circle-size" +
                    ` ${activeSize === "S" ? "circle-size-selected" : ""}`
                  }
                  id="S"
                  name="product_size"
                  value={activeSize}
                  onClick={userSize}
                >
                  <p>S</p>
                </div>
                <div
                  className={
                    "circle-size" +
                    ` ${activeSize === "M" ? "circle-size-selected" : ""}`
                  }
                  id="M"
                  value="M"
                  name="product_size"
                  onClick={userSize}
                >
                  <p>M</p>
                </div>
                <div
                  className={
                    "circle-size" +
                    ` ${activeSize === "L" ? "circle-size-selected" : ""}`
                  }
                  id="L"
                  value="L"
                  name="product_size"
                  onClick={userSize}
                >
                  <p>L</p>
                </div>
                <div
                  className={
                    "circle-size" +
                    ` ${activeSize === "XL" ? "circle-size-selected" : ""}`
                  }
                  id="XL"
                  value="XL"
                  name="product_size"
                  onClick={userSize}
                >
                  <p>XL</p>
                </div>
              </div>
              {/* <div class="product-detail-size">
                  <div className="">
                    <label>
                      <input type="radio" name="product_size" value="S" />
                      <span className="circle-size">S</span>
                    </label>
                  </div>
                  <div className="">
                    <label>
                      <input type="radio" name="product_size" value="M" />
                      <span className="circle-size">M</span>
                    </label>
                  </div>
                  <div className="">
                    <label>
                      <input type="radio" name="product_size" value="L" />
                      <span className="circle-size">L</span>
                    </label>
                  </div>
                  <div className="">
                    <label>
                      <input type="radio" name="product_size" value="XL" />
                      <span className="circle-size">XL</span>
                    </label>
                  </div>
                </div> */}
            </div>
          </div>

          <div class="product-buttons">
            <div class="ptp">
            
              <button class="add-to-cart" onClick={addProductToCart}>Add to Cart</button>
            </div>

              <div class="ptp">
            <Link
              state={{
                url: `${productItem.url}`,
                quantity: `${quantity}`,
                size: `${activeSize}`,
                price: `${productItem.price}`,
                title: `${productItem.title}`,
                category: `${category}`,
                userGoog: userGoog
              }}
              to={`/checkout/${id}`}
            >
                <button class="proceed-to-purchase" onClick={postToExpress}>
                  Proceed to Purchase
                </button>
            </Link>
              </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
