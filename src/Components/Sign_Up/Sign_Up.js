import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
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
                name: name,
                email: email,
                password: password,
                phone: phone,

            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
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
                <div>
                    <a to="../Navbar/Navbar"><button type="button" className="btn-close" style="margin-left: 300px;"></button></a>
                </div>
                <div className="signup-title" >
                    <h1>Sign Up</h1>
                </div>
                <div className="login-text">
                    Already a member? <span><a to="../Login/Login" style="color: #358AD8;"> Login</a></span>
                </div>
                <div className="form-group">
                    <label className="form-label" style="margin-right: 317px;"><b>Role</b></label><br />
                    <select className="form-select">
                        <option selected>Select role</option>
                        <option value="doctor">Doctor</option>
                        <option value="pacient">Pacient</option>
                    </select>
                </div> <br/>
                <div clasclassNames="form-group">
                    <label htmlFor="name" className="form-label" style="margin-right: 310px;"><b>Name</b></label><br />
                    <input value={name} onChange={(e) => setName(e.target.value)} className="form-control" type="text" name="name" id="name" placeholder="Enter your name" aria-describedby="helpId" required />
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label" style="margin-right: 185px;"><b>Phone Number</b></label><br />
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" type="tel" name="phone" id="phone" placeholder="Enter your phone number" aria-describedby="helpId" required />
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="email" className="form-label" style="margin-right: 310px;"><b>Email</b></label><br />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
                    {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="password" className="form-label" style="margin-right: 280px;"><b>Password</b></label><br />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" name="password" id="password" placeholder="Enter your password" aria-describedby="helpId" required />
                </div> <br/>
                <div className="btn-group">
                    <button type="button" className="btnSubmit" id="submit">Submit</button> <br />
                </div>
                <div className="btn-group">
                    <button type="button" className="btnReset" id="reset">Reset</button>
                </div>
            </form>
        </div>
 //Sign up role is not stored in database. You can apply logic for this according to your react code.
    );
}

export default Sign_Up;
