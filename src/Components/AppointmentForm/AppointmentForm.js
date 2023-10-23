import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateAppointment, setDateAppointment] = useState('');
    const [timeBook, setTimeBook] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, dateAppointment, timeBook });
        setName('');
        setPhoneNumber('');
        setDateAppointment('');
        setTimeBook('');
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="dateAppointment">Date of Appointment:</label>
                <input type="date" id="dateAppointment" value={dateAppointment} onChange={(e) => setDateAppointment(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="timeBook">Book Time Slot:</label>
                <input type="time" id="timeBook" value={timeBook} onChange={(e) => setTimeBook(e.target.value)} required />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm;