import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

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
                    <label htmlFor="email" className="form-label"><b>Email</b></label>
                    <input className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
                </div> 
                <div className="form-group">
                    <label htmlFor="password" className="form-label"><b>Password</b></label>
                    <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" aria-describedby="helpId" required />
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