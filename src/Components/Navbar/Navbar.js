import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import StayHealthyLogo from './images/StayHealthyLogo.png';

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <b>StayHealthy</b><img src={StayHealthyLogo} className="d-inline-block align-top"/>
                    </a>
                    <div>
                        <button type="button" className="btn nav_item" >Home</button>
                        <button type="button" className="btn nav_item" >Appointments</button>
                        <button type="button" className="btn nav_item" >Reviews</button>
                        <a href="../Sign_Up/Sign_Up.html"><button type="button" className="btn1 nav_btn" >Sign Up</button></a>
                        <a href="../Login/Login.html"><button type="button" className="btn1 nav_btn" >Login</button></a>    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;