import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'

import StayHealthyLogo from '../images/StayHealthyLogo.png';

import { Link } from 'react-router-dom';

const Navbar = () => {

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
                        <li className="nav_btn">
                        <Link to="/signup"><button type="button" className="btn1">Sign Up</button></Link>
                        </li>
                        <li className="nav_btn">
                            <Link to="/login"><button type="button" className="btn1">Login</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;