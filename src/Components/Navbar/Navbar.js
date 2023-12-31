import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BsBell } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import StayHealthyLogo from '../images/StayHealthyLogo.png';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
          }
        }, []);

    return(
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><b>StayHealthy</b><img src={StayHealthyLogo} className="d-inline-block align-top" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav_item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav_item">
                            <Link className="nav-link" to="/appointments">Appointments</Link>
                        </li>
                        <li className="nav_item">
                            <Link className="nav-link" to="/reviews">Reviews</Link>
                        </li>
                        {isLoggedIn ? (
                            <>
                                <li className="nav_btn">
                                    <div className="dropdown">
                                        <button className="btn1" type="button" id="dropdownMenu" data-bs-toggle="dropdown" aria-expanded="false">Welcome, (user)</button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                                            <li><a className="dropdown-item" href="#">Your Profile</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav_item">
                                    <Link to="/notifications"><BsBell /></Link>
                                </li>
                                <li className="nav_btn">
                                    <button className="btn1" onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav_btn">
                                    <Link to="/signup"><button type="button" className="btn1">Sign Up</button></Link>
                                </li>
                                <li className="nav_btn">
                                    <Link to="/login"><button type="button" className="btn1">Login</button></Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;