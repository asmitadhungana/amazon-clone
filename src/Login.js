import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory(); //used for redirecting | usually you push into the history if you wanna redirect
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (event) => {
        event.preventDefault(); //stops refresh
        //login logic using firebase

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //logged in successfully, redirect to homepage...
                history.push("/");
            })
            .catch(e => alert(e.message));
    };

    const registerHandler = (event) => {
        event.preventDefault();
        //do the register login using firebase

        auth.createUserWithEmailAndPassword(email,password)
            .then(auth =>{
                //created a user and logged in, redirect to homepage...
                history.push("/");
            })
            .catch(e => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                alt=""
             />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={loginHandler} type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                 By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button onClick={registerHandler} className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login;
