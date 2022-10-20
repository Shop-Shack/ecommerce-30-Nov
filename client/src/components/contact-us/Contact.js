import React from 'react';
import ReactDOM from 'react-dom/client';
import './Contact.css';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
// import {MdOutlineShoppingCart} from 'react-icons/md';


const contact = function () {
    return (<div class="contact">
        <h3>Contact Us</h3>
        <h1>Contact Our Team</h1>
        <p class="contact-content">Need to get in touch with us? Have Suggestions? Feel free to reach us at:</p>
        <div class="contact-icons">
            
            <div class="facebookBtn"><FaFacebook/></div>
            <div class="twitterBtn"><FaTwitter/></div>
            <div class="gmailBtn"><SiGmail/></div>
            <div class="linkedInBtn"><FaLinkedinIn/></div>
            <div class="instagramBtn"><FaInstagram/></div>
            {/* <a class="twitterBtn smGlobalBtn" href="#"></a>
            <a class="gmailBtn smGlobalBtn" href="#"></a>
            <a class="linkedlnBtn smGlobalBtn" href="#"></a>
            <a class="instagramBtn smGlobalBtn" href="#"></a> */}
        </div>


    </div>);
}

export default contact;