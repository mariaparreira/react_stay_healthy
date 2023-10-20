import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

import '../Navbar/Navbar';
import '../Sign_Up/Sign_Up';

const Login = () => {
    return (
        <div className="container">
            <form className="form">
                <div>
                    <a to="../Navbar/Navbar"><button type="button" className="btn-close" style="margin-left: 300px;"></button></a>
                </div>
                <div className="login-title" >
                    <h1>Login</h1>
                </div>
                <div className="signup-text">
                    Not a member? <span><a to="../Sign_Up/Sign_Up" style="color: #358AD8;"> Sign up</a></span>
                </div>
                <div className="form-group">
                    <label for="email" className="form-label" style="margin-right: 310px;"><b>Email</b></label><br />
                    <input className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
                </div> <br/>
                <div className="form-group">
                    <label for="password" className="form-label" style="margin-right: 280px;"><b>Password</b></label><br />
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