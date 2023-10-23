import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Sign_Up.css'

import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role: role,
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };


    return (
        <div className="container">
            <form className="form" method="POST" onSubmit={register}>
                <div className="signup-title" >
                    <h1>Sign Up</h1>
                </div>
                <div className="login-text">
                    Already a member? <span><Link to="/login" className="login-nav"> Login</Link></span>
                </div>
                <div className="form-group">
                    <label htmlFor="role" className="form-label" ><b>Role</b></label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select" required>
                        <option selected>Select role</option>
                        <option value="doctor">Doctor</option>
                        <option value="pacient">Patient</option>
                    </select>
                </div> 
                <div clasclassNames="form-group">
                    <label htmlFor="name" className="form-label" ><b>Name</b></label>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text" name="name" id="name" placeholder="Enter your name" aria-describedby="helpId" required />
                </div> <br />
                <div className="form-group">
                    <label htmlFor="phone" className="form-label" ><b>Phone Number</b></label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" type="tel" name="phone" id="phone" placeholder="Enter your phone number" aria-describedby="helpId" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label" ><b>Email</b></label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
                    {showerr && <div className="err" style={{color: 'red'}}>{showerr}</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label" ><b>Password</b></label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" name="password" id="password" placeholder="Enter your password" aria-describedby="helpId" required />
                </div>
                <div className="btn-group">
                    <button type="submit" className="btnSubmit" id="submit">Submit</button>
                </div>
                <div className="btn-group">
                    <button type="submit" className="btnReset" id="reset">Reset</button>
                </div>
            </form>
        </div>
 //Sign up role is not stored in database. You can apply logic for this according to your react code.
    );
}

export default Sign_Up;
