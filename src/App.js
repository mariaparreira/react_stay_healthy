import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import BookingConsultation from './Components/BookingConsultation';
import Notifications from './Components/Notifications/Notifications';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import ProfileForm from './Components/ProfileCard/ProfileCard';
import ReportsLayout from './Components/ReportsLayout/ReportsLayout';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Landing_Page />} />
                <Route path="/signup" element={<Sign_Up />} />
                <Route path="/login" element={<Login />} />
                <Route path="/appointments" element={<BookingConsultation />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/reviews" element={<ReviewForm />} />
                <Route path="/profile" element={<ProfileForm />} />
                <Route path="/reports" element={<ReportsLayout />} />
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;