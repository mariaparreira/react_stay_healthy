import React, { useState } from 'react';

import './FindDoctorSearch.css';
import DocAppointmentLogo from '../images/doc_appointment_logo.png';
import SearchIcon from '../images/Search.png';
import DocProfile from '../images/Doctor.png';

import { useNavigate } from 'react-router-dom';

const initSpeciality = ['Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda', 'Endocrinologist']

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/appointments?speciality=${speciality}`);
        window.location.reload();
    }

    return (
        <div className="findDoc">
            <center>
                <h1 className="title_size">Find the doctor that you need</h1>
                <div>
                    <img src={DocAppointmentLogo} />
                </div>
                <div className="search_container" >
                    <div className="doc_search">
                        <input type="text" className="doc_search_input" placeholder="Search doctors by speciality" onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
                        <div className="findiconimg">
                            <img src={SearchIcon} />
                        </div>
                        <div className="doc_search_results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => 
                                    <div className="doc_search_item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                        <span><img src={DocProfile} style={{height:'40px', width:'55px'}} /></span>
                                        <span>{speciality}</span>
                                        <span>SPECIALITY</span>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;