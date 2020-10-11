import React from 'react';
import GoogleButton from 'react-google-button';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import FirebaseConfig from '../../Config/FirebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Logo from '../../images/Group1329.png';

firebase.initializeApp(FirebaseConfig);

const Login = () => {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    
    const googleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            
            const {displayName, email} = result.user;
            window.localStorage.setItem('userInfo', JSON.stringify({displayName, email}));
            history.replace(from);
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
    return (
      <>
      <div className="logo">
      <Link to="/"><img src={Logo} alt="logo" /></Link>
    </div>
        <div className="googlelogin">
           <GoogleButton
  onClick={googleLogin}
/>
        </div>
        </>
    );
};

export default Login;