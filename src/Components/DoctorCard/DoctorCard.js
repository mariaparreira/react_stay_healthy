import React, { useState } from 'react';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';

import DocProfile from '../images/Doctor.png';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import { v4 as uuidv4 } from 'uuid';

const DoctorCard = ({ name, speciality, experience, ratings }) => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const handleBooking = () => {
        setShowModal(true);
    };

    const handleCancel = (appointmentId) => {
        const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);
    };

    const handleFormSubmit = (appointmentData) => {
        const newAppointment = {
            id: uuidv4(),
            ...appointmentData,
        };

        const updatedAppointments = [...appointments, newAppointment];
        setAppointments(updatedAppointments);
        setShowModal(false);
    };

    return (
        <div className="doctor-card-container">
            <div className="doctor-card-details-container">
                <div className="doctor-card-profile-image-container">
                    <img src={DocProfile} style={{width: '123px', height: '92px'}}/>
                </div>
                <div className="doctor-card-details">
                    <div className="doctor-card-detail-name">{name}</div>
                    <div className="doctor-card-detail-speciality">{speciality}</div>
                    <div className="doctor-card-detail-experience">{experience} years experience</div>
                    <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
            </div>
            <div className="doctor-card-options-container">
                <Popup
                    style={{ backgroundColor: '#FFFFFF' }}
                    trigger={
                        <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
                        {appointments.length > 0 ? (
                            <div>Cancel Appointment</div>
                        ) : (
                            <div>Book Appointment</div>
                        )}
                        <div>No Booking Fee</div>
                        </button>
                    }
                    modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    >
                    {(close) => (
                        <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll', marginTop: '100px' }}>
                            <div>
                                <div className="doctor-card-profile-image-container">
                                    <img src={DocProfile} style={{width: '123px', height: '92px'}} />
                                </div>
                                <div className="doctor-card-details">
                                    <div className="doctor-card-detail-name">{name}</div>
                                    <div className="doctor-card-detail-speciality">{speciality}</div>
                                    <div className="doctor-card-detail-experience">{experience} years experience</div>
                                    <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                                </div>
                            </div>

                            {appointments.length > 0 ? (
                                <>
                                    <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Appointment Booked!</h3>
                                    {appointments.map((appointment) => (
                                        <div className="bookedInfo" key={appointment.id} style={{ textAlign: 'center', marginTop: '30px' }}>
                                            <p><b>Name:</b> {appointment.name}</p>
                                            <p><b>Phone Number:</b> {appointment.phoneNumber}</p>
                                            <p><b>Date of Appointment:</b> {appointment.dateAppointment}</p>
                                            <p><b>Time of Appointment:</b> {appointment.timeBook}</p>
                                            <button className="btnCancel" onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
                            )}
                        </div>
                    )}
                </Popup> 
            </div>
        </div>
    );
};

export default DoctorCard;