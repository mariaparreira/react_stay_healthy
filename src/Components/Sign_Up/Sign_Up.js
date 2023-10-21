import 'bootstrap/dist/css/bootstrap.css';
import './Sign_Up.css'

import { Link } from 'react-router-dom';

const Sign_Up = () => {

    return (
        <div className="container">
            <form className="form">
                <div className="signup-title" >
                    <h1>Sign Up</h1>
                </div>
                <div className="login-text">
                    Already a member? <span><Link to="/login" className="login-nav"> Login</Link></span>
                </div>
                <div className="form-group">
                    <label className="form-label" ><b>Role</b></label><br />
                    <select className="form-select" required>
                        <option selected>Select role</option>
                        <option value="doctor">Doctor</option>
                        <option value="pacient">Pacient</option>
                    </select>
                </div> <br/>
                <div clasclassNames="form-group">
                    <label htmlFor="name" className="form-label" ><b>Name</b></label><br />
                    <input className="form-control" type="text" name="name" id="name" placeholder="Enter your name" aria-describedby="helpId" required />
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label" ><b>Phone Number</b></label><br />
                    <input className="form-control" type="tel" name="phone" id="phone" placeholder="Enter your phone number" aria-describedby="helpId" required />
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="email" className="form-label" ><b>Email</b></label><br />
                    <input className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
                </div> <br/>
                <div className="form-group">
                    <label htmlFor="password" className="form-label" ><b>Password</b></label><br />
                    <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" aria-describedby="helpId" required />
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
