import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

import CloseIcon from '../images/Close.png';

import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <form className="form">
                <div className="login-title" >
                    <h1>Login</h1>
                </div>
                <div className="signup-text">
                    Not a member? <span><Link to="/signup" className="signup-nav"> Sign up</Link></span>
                </div>
                <div className="form-group">
                    <label for="email" className="form-label"><b>Email</b></label><br />
                    <input className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
                </div> <br/>
                <div className="form-group">
                    <label for="password" className="form-label"><b>Password</b></label><br />
                    <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" aria-describedby="helpId" required />
                </div> <br/>
                <div className="btn-group">
                    <button type="button" className="btnSubmit" id="submit">Submit</button> <br />
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