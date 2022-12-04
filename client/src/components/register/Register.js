import {React, useState, useEffect }from 'react';
// import ReactDOM from 'react-dom/client';
import './Register.css';
import {HiShoppingBag, HiOutlineUserCircle} from 'react-icons/hi';
// import {MdOutlineShoppingCart} from 'react-icons/md';
import Axios from "axios";

const Register = function(){

    // let [email, setEmail] = useState(email);
    // let [password, setPassword] = useState(password);
    // // let [name, setName] = useState({});

    // // let [user, setUser] = useState({
    // //   email: "",
    // //   password: ""
      
    // // });

   
     

    

    // const registerUser = async function(e){

    //   e.preventDefault();
    //   // let { email, password, name } = user;
    //   console.log(`${email}: email`);
    //   setEmail(email);
    //   setEmail(password);
    //   console.log(`${email}: email`);
  
    //   const res = await fetch("/register", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email,
    //       password,

    //     })
    //   })

    // }

    // let name, value;

    // const handleInputs = (e) => {
    //   // console.log(e);
    //   // name = e.target.name;
    //   // value = e.target.value;
    //   // setUser({ ...user, [name]: value });
    //   // console.log(user.email);


    //   setEmail(email);
    //   setEmail(password);
    //   console.log(email);
    // };

    // // useEffect(()=>{ 
    // //   // Axios.get('http://localhost:5000')
    // //   // .then(res=> console.log(res))
  
    // //   Axios({
    // //     method: "POST",
    // //     url: "http://localhost:5000/hey",
    // //     headers: {
    // //       "Content-Type": "application/json"
    // //     },
    // //     data: {
    // //       email: `${email}`,
    // //       password: `${password}`,
    // //       name: `${name}`,
    // //     }
    // //   }).then(res => {
    // //     console.log('hello');
    // //   })
    // //   .catch(err => console.error(err));
  
      
    // // })
 

    return(<div class="register-lr-cont">

    <div class="register-left-cont">
      
        <div class="register-heading">
        <HiShoppingBag />
            <div class="register-shopshack-text">Shop.Shack</div>
          </div>
    
    <form action="/register" method="post">
          <div class="register-outline">
    
            <div class="register-e-mail-div">
              <div class="register-name-txt" >Name</div>
              <input class="register-name-input" name="reg_name" required />
              <div class="register-email-txt">E-mail</div>
              <input class="register-email-input" type="email" name="reg_email" required/>
            </div>
    
            <div class="register-password-div">
              <div class="register-password-txt" >Password</div>
              <input type="password" class="register-password-input" name="reg_pass" required/>
              <div class="register-password-conf">Confirm Password</div>
              <input type="password" class="register-conf-password-input" name="reg_pass_conf" required/>
            </div>
            
            <div class="register-Glogin">
              
              <div class="register-reg">
              <button type="submit" name="register-btn">
                Register
                </button>
              </div>
    
            </div>
    
    
    
          </div>

          </form>

    </div>

    <div class="register-right-cont">
       
        <img class="register-lo_back" src="\assets\images\login_back.png" alt="" />



    </div>
</div>);
}

export default Register;