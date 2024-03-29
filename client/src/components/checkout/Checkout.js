import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./checkout.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Checkout = function () {
  // useEffect(() => {
  //   axiosOrder();
  // }, []);

  // const axiosOrder = async () => {
  //   const response = await axios.get("http://localhost:5000/checkout");
  //   console.log(response+" jello ");

  // }

  let [cost, setCost] = useState();
  let [quant, setQuant] = useState();
  let [total, setTotal] = useState();

  const location = useLocation();
  console.log(location);

useEffect(()=>{
  
  let price = location.state.price;
  price =  price.slice(2,price.length)
  price = price.replaceAll(',','')
  price = price.slice(0,-4);
  price = Number(price);
  quant = Number(location.state.quantity);
  
  setTimeout(()=>{

  }, 2000)
  console.log(price)
  setCost(price)
  setTotal(price*quant);

 

})



  let [nameR,setNameR] = useState();
  let [phone,setPhone] = useState();
  let [email,setEmail] = useState();
  let [add,setAdd] = useState();

  const handleName = (e)=>{
    nameR = e.target.value;
    setNameR(nameR);
    

  }
  const handlePhone = (e)=>{
    
    phone = e.target.value;
    setPhone(phone);
    
    
  }
  const handleEmail = (e)=>{
    
    email = e.target.value;
    setEmail(email);
    

  }
  const handleAdd = (e)=>{

    add = e.target.value;
    setAdd(add);
    

  }

const sendOrderData = () =>{

 

  
  axios.post('http://localhost:5000/checkout',{
  checkout_name:nameR,
  checkout_phoneno:phone,
  checkout_email:email,
  checkout_addr:add,
  checkout_category: location.state.category

  })

  axios.post('http://localhost:5000/create-checkout-session',
  {
    image: location.state.url,
    title:location.state.title,
    price: total,
    name: nameR,
    category: location.state.category


  })
  .then(function (response){

    console.log(response.data)
    if(response.data.url){
      window.location =response.data.url
    }

  })

}

  return (
    // <form action="/checkout" method="post">
      <div className="chkout-lr-cont">
        <div class="chkout-left">
          <div className="chkout-outline">
            <div class="chkout-contactinfo">
              1. Contact Information
              <div class="chkout-name-txt">Name</div>
              <input
                type="text"
                class="chkout-name-txt-in"
                name="checkout_name"
                id=""
                required
                onChange = {handleName}
              />
              <div class="chkout-phone-txt">Phone</div>
              <input
                type="number"
                class="chkout-phone-txt-in"
                name="checkout_phoneno"
                id=""
                required
                onChange = {handlePhone}
              />
              <div class="chkout-email-txt">Email</div>
              <input
                type="email"
                class="chkout-email-txt-in"
                name="checkout_email"
                id=""
                required
                onChange = {handleEmail}
              />
            </div>

            <div class="chkout-deliinfo">
              2. Delivery Information
              <div class="chkout-addr-txt">Address</div>
              <input
                type="text"
                class="chkout-addr-txt-in"
                name="checkout_addr"
                id=""
                required
                onChange = {handleAdd}
              />
            </div>

            <div class="chkout-payment">
              3. Payment
              <div className="chkout-cod-online">
                <div class="chkout-py-COD">COD</div>
                <div class="chkout-py-onlinePy">Online Payment</div>
              </div>
            </div>
          </div>
        </div>

        <div class="chkout-right">
          <div className="chkout-outline-right">
            <div className="chkout-img-div">
              <img class="chkout-img" src={`${location.state.url}`} />
            </div>

            <div className="chkout-shirttxt">{location.state.title}</div>
            <div className="chkout-size">Size : {location.state.size}</div>
            <div className="chkout-quant">
              Quantity: {location.state.quantity}
            </div>
            <div className="chkout-price">Total : ₹ {total}.00</div>
            {/* <Link
              to="/orderPlace"
              state={{
                title: `${location.state.title}`,
                url: `${location.state.url}`,
                category: `${location.state.category}`,
              }}
            > */}
              <div className="chkout-chkout">
                <button class="chkout-chkout"  name="checkout_button" onClick={sendOrderData}>
                  Confirm Order
                </button>
              </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    // </form>
  );
};
export default Checkout;
