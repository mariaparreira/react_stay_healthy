import React, { useState } from 'react';

import './FindDoctorSearchIC.css';

import DocAppointmentLogo from '../../images/doc_appointment_logo.png';
import SearchIcon from '../../images/Search.png';
import Doc1Profile from '../../images/Doctor1.png';

import { useNavigate, Navigate } from 'react-router-dom';

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist', 'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
]

const FindDoctorSearchIC = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    }
    return (
        <div className='finddoctor'>
            <center>
                <h1 style={{color: '#003C74', fontWeight: 'bold'}}>Find the doctor that you need</h1>
                <div>               <img src={DocAppointmentLogo} />
</div>                <div className="home-search-container"  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className="doctor-search-box">
                    {/* <p>Perform a search to see the results.</p> */}

                        <input type="text" className="search-doctor-input-box" placeholder="Search doctors by speciality" onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)} value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
                        
                        <div className="findiconimg"><img className='findIcon' src={SearchIcon} alt=""/></div>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span><img src={Doc1Profile} alt="" style={{height:"30px", width:"40px"}} /></span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    )
}

export default FindDoctorSearchIC