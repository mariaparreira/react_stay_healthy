import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './ReviewForm.css';

const ReviewForm = () => {
    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    const [formData, setFormData] = useState({
            name: '',
            review: '',
            rating: 0
        });
    const handleButtonClick = () => {
        setShowForm(true);
    };
    const handleChange = (e) => {
        setFormData(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedMessage(formData);
        setFormData('');
            if (formData.name && formData.review && formData.rating > 0) {
            setShowWarning(false);
            } else {
            setShowWarning(true);
            }
    };

    return (
        <div className="reviewpage-container">
            <div className="">
                <center>
                    <div className="reviewForm">
                        <h1 className="review-title">Reviews</h1>
                    </div>
                    {!showForm ? (
                        <>
                            <form className="reviewForm-sections">
                                <div className="row">
                                    <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <b>Doctor Name</b>
                                    </div>
                                    <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <b>Doctor Speciality</b>
                                    </div>
                                    <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <b>Give Review</b>
                                    </div>
                                    <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <b>Review Given</b>
                                    </div>
                                </div>
                            </form>
                            <form className="reviewForm-layout">
                                <div className="row">
                                    <div className="column">
                                        Dr. Jiao Yang
                                    </div>
                                    <div className="column">
                                        Dentist
                                    </div>
                                    <div className="column">
                                        <button onClick={handleButtonClick} type="submit" style={{ borderRadius: '30px', width: '200px', fontSize: '20px', marginTop: '-7px' }}>Review</button>
                                    </div>
                                    <div className="column">
                                        
                                    </div>
                                </div>
                                <br />
                                <hr />
                                <br />
                                <div className="row">
                                    <div className="column">
                                        Dr. Richard Pearson
                                    </div>
                                    <div className="column">
                                        General Physician
                                    </div>
                                    <div className="column">
                                        <button onClick={handleButtonClick} type="submit" style={{ borderRadius: '30px', width: '200px', fontSize: '20px', marginTop: '-7px' }}>Review</button>
                                    </div>
                                    <div className="column">
                                        
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : (
                        <div className="giveReview">
                            <form onSubmit={handleSubmit} className="feedback">
                                
                                <h2>Give Your Feedback</h2>
                                <div>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ borderRadius: '30px', width: '500px' }} />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="review">Review:</label>
                                    <textarea id="review" name="review" value={formData.review} onChange={handleChange} style={{ borderRadius: '30px', width: '500px' }} />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="rating">Rating:</label>
                                    <select value={formData.rating} onChange={handleChange} className="form-select" style={{ borderRadius: '30px', width: '500px', height: '50px' }} required>
                                        <option selected>0</option>
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </select>
                                </div>
                                <button type="submit" style={{ borderRadius: '30px', width: '500px', marginTop: '30px' }}>Submit</button>
                            </form>
                        </div>
                    )}
                    {/*{submittedMessage && (
                        <div>
                            <h3 style={{ marginTop: '50px' }}>Submitted Message:</h3>
                            <p>{submittedMessage}</p>
                        </div>
                    )}*/}
                </center>
            </div>
        </div>
    );
};

export default ReviewForm;