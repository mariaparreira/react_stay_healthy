import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import Navbar from '../Navbar/Navbar';

import './Notifications.css';

const Notifications = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);
  return (
    <div className="container">
        <h1 style={{ color: '#003C74' }}>Notifications</h1>
        {/*<Navbar ></Navbar>*/}
        {children}
        {isLoggedIn ? (
            <>
            <form className="form">
                <div className="appointment-card">
                    <div className="appointment-card__content">
                        <h3 className="appointment-card__title">Appointment Details</h3>
                        <p className="appointment-card__message">
                            <strong>Doctor:</strong> {doctorData?.name}
                            < br/>
                            <strong>Patient:</strong>
                            < br/>
                            <strong>Time:</strong>
                            < br/>
                            <strong>Date:</strong>
                        </p>
                    </div>
                </div>
            </form>
            </>
        ) : (
            <form className="form">
                <div className="form-group">
                    <h3 style={{ textAlign: 'center' }}>You're not logged in. Please login first</h3>
                </div>
                <div className="form-group">
                    <Link to="/login"><button type="button" className="btn">Login</button></Link>
                </div>
            </form>
        )}
    </div>
  );
};

export default Notifications;