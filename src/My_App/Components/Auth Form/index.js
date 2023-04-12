import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';


const LoginSignupForm = () => {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // Function to create a TMDB user account
    const createTMDBAccount = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://api.themoviedb.org/3/account', {
                username: username,
                password: password,
                api_key: '583d43563d202f1e6dd6e28704ca9624'
            });

            // Handle the response
            console.log(response.data);
            // You can save the user session ID or other data from the response as needed

        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error creating TMDB account:', error);
        }
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
                    <button onClick={(event) => createTMDBAccount(event)}>Sign Up</button>
                </form>
            </div>
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
