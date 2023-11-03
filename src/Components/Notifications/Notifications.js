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
    <div className="notifspage-container">
      <div>
        <center>
          <div className="notifsLayout">
            <h1 className="notifs-title">Notifications</h1>
          </div>
          <form className="notifs-form">
                <div className="appointment-card">
                    <div className="appointment-card__content">
                        <h3 className="appointment-card__title">Appointment Details</h3>
                        <hr />
                        <p className="appointment-card_notif">
                            <strong>Doctor Name:</strong> Dr. Jiao Yang
                            < br/>
                            <strong>Doctor Speciality:</strong> Dentist
                            < br/>
                            <strong>Patient Name:</strong> Mia Smith
                            < br/>
                            <strong>Phone Number:</strong> 1234567890
                            < br/>
                            <strong>Time:</strong> 10:30
                            < br/>
                            <strong>Date:</strong> 2023-10-30
                        </p>
                    </div>
                </div>
            </form>
        </center>
      </div>
        {/*<Navbar ></Navbar>
        {children}
        {isLoggedIn ? (
            <>
            <form className="notifs-form">
                <div className="appointment-card">
                    <div className="appointment-card__content">
                        <h3 className="appointment-card__title">Appointment Details</h3>
                        <p className="appointment-card__message">
                            <strong>Doctor Name:</strong> Dr. Jiao Yang
                            < br/>
                            <strong>Doctor Speciality:</strong> Dentist
                            < br/>
                            <strong>Patient Name:</strong> Mia Smith
                            < br/>
                            <strong>Phone Number:</strong> 1234567890
                            < br/>
                            <strong>Time:</strong> 10:30
                            < br/>
                            <strong>Date:</strong> 2023-10-30
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
        )}*/}
    </div>
  );
};

export default Notifications;