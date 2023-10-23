import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
        navigate("/")
        }
    }, []);
    const login = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // name: name,
            email:email,
            password: password,
        }),
        });
        const json = await res.json();
        if (json.authtoken) {
        sessionStorage.setItem('auth-token', json.authtoken);
    
        sessionStorage.setItem('email', email);
        navigate('/');
        window.location.reload()
        } else {
        if (json.errors) {
            for (const error of json.errors) {
            alert(error.msg);
            }
        } else {
            alert(json.error);
        }
        }
    };

    return (
        <div className="container">
            <form className="form" onSubmit={login}>
                <div className="login-title" >
                    <h1>Login</h1>
                </div>
                <div className="signup-text">
                    Not a member? <span><Link to="/signup" className="signup-nav"> Sign up</Link></span>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label"><b>Email</b></label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
                </div> 
                <div className="form-group">
                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" name="password" id="password" placeholder="Enter your password" aria-describedby="helpId" required />
                </div>
                <div className="btn-group">
                    <button type="button" className="btnSubmit" id="submit">Submit</button>
                </div>
                <div className="btn-group">
                    <button type="button" className="btnReset" id="reset">Reset</button>
                </div>
                <div className="forgot-pass">
                    Forgot Password?
                </div>
            </form>
        </div>
    );
};

export default Login;