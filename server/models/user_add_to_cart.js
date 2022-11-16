const mongoose = require("mongoose");

const user = new mongoose.Schema({

//user-id
//array of products in the cart

name: {
    type: String,
    required: true
    
},

email_id:{
    type: String,
    required: true
},

add_to_cart_arr: {
    type: Array,
    default:[]

    //productID
    

}









})