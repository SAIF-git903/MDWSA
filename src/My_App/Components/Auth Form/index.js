import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';
import { auth, db } from '../../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');


const LoginSignupForm = () => {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const app = express();

    
    // Function to create a TMDB user account
    const createTMDBAccount = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (cred) => {
                const usersColRef = collection(db, "users")
                const parentDocRef = doc(usersColRef, cred.user.uid);
                await setDoc(parentDocRef, {})
            })
        let URL = `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

        axios.get(URL)
            .then((res) => {
                const requestToken = res.data.request_token
                // let authenticateUrl = `https://www.themoviedb.org/authenticate/${requestToken}`
                // Configure proxy
                app.use(
                    `/authenticate/${requestToken}`, // Update this to match your TMDP API endpoint
                    createProxyMiddleware({
                        target: 'https://www.themoviedb.org', // Update this to match your TMDP API URL
                        changeOrigin: true,
                        // Add any additional headers as needed
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            // Add any other required headers
                        },
                    })
                );

                // Start the proxy server
                app.listen(3001, () => {
                    console.log('Proxy server is running on http://localhost:3001');
                });


            }).catch((err) => {
                console.log(err)
            })
    };


    return (
        <div className='form_main_cont'>
            <div className='signUp_form centered'>
                <form>
                    <h2>Create Account</h2>
                    <div style={{ display: "flex", flexDirection: "column", width: "300px", gap: "5px" }}>
                        <input type="text" placeholder="UserName" onChange={(event) => setUserName(event.target.value)} />
                        <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                        <input type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                    </div>
                </form>
            </div>
            <button onClick={() => createTMDBAccount()}>Sign Up</button>
            {/* <form action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form> */}
        </div>
    );
}

export default LoginSignupForm;
