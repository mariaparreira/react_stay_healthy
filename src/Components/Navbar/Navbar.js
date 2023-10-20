import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import StayHealthyLogo from './images/StayHealthyLogo.png';

import '../Sign_Up/Sign_Up';
import '../Login/Login';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" to="#"><b>StayHealthy</b><img src={StayHealthyLogo} className="d-inline-block align-top" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav_item">
                            <a className="nav-link active" aria-current="page" to="#">Home</a>
                        </li>
                        <li className="nav_item">
                            <a className="nav-link" to="#">Appointments</a>
                        </li>
                        <li className="nav_item">
                            <a className="nav-link" to="#">Reviews</a>
                        </li>
                        <li className="nav_btn">
                        <a to="../Sign_Up/Sign_Up"><button type="button" className="btn1">Sign Up</button></a>
                        </li>
                        <li className="nav_btn">
                            <a to="../Login/Login"><button type="button" className="btn1">Login</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;