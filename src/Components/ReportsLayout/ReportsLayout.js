import React, { useState } from 'react';
 
import './ReportsLayout.css';
 
const ReportsLayout = () => {
    //HTML | DOM Anchor Object
    const handleButtonClick = () => {
        const pdfURL = "patient_report.pdf";
        const link = document.createElement("a");
        link.href = pdfURL;
        link.download = "patient_report.pdf"; //specifies the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    //fetch() method
    /* const handleButtonClick = () => { //function will execute on click of button
        // using JS method to get PDF file
        fetch("patient_report.pdf").then((response) => {
            response.blob().then((blob) => {
                // creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "patient_report.pdf";
                alink.click();
            });
        });
    };*/

    return (
        <div className="report-container">
            <div>
                <center>
                    <div className="reportForm">
                        <h1 className="report-title">Reports</h1>
                    </div>
                    <form className="reportForm-sections">
                        <div className="row">
                            <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                <b>Doctor Name</b>
                            </div>
                            <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                <b>Doctor Speciality</b>
                            </div>
                            <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                <b>View Report</b>
                            </div>
                            <div className="column" style={{ display: 'flex', justifyContent: 'center' }}>
                                <b>Download Report</b>
                            </div>
                        </div>
                    </form>
                    <form className="reportForm-layout">
                        <div className="row">
                            <div className="column">
                                Dr. Jiao Yang
                            </div>
                            <div className="column">
                                Dentist
                            </div>
                            <div className="column">
                                <button onClick={handleButtonClick} type="submit" style={{ borderRadius: '30px', width: '200px', fontSize: '20px', marginTop: '-7px' }}>View Report</button>
                            </div>
                            <div className="column">
                                <button  type="submit" style={{ borderRadius: '30px', width: '220px', fontSize: '20px', marginTop: '-7px' }}>Download Report</button>
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
                                <button onClick={handleButtonClick} type="submit" style={{ borderRadius: '30px', width: '200px', fontSize: '20px', marginTop: '-7px' }}>View Report</button>
                            </div>
                            <div className="column">
                                <button  type="submit" style={{ borderRadius: '30px', width: '220px', fontSize: '20px', marginTop: '-7px' }}>Download Report</button>
                            </div>
                        </div>
                    </form>
                </center>
            </div>
        </div>
    );
};

export default ReportsLayout;