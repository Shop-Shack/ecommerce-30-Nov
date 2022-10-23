import React from 'react';
import './Login.css';
import Login from '../../components/login/Login';
import {GoogleOAuthProvider} from '@react-oauth/google';




const LoginPage = function () {
    return (<div>

        {/* <Login /> */}
        <GoogleOAuthProvider clientId="731656192661-0rq0p0cth3s6cpe3rll6f7jbh26lctev.apps.googleusercontent.com">
        <Login />
        </GoogleOAuthProvider>;
        
    </div>)
}

export default LoginPage;