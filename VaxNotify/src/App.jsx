import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import HomePage from "./components/HomePage";
import VaccinationCalendar from "./components/VaccinationCalender";
// import ProfilePage from "./components/ProfilePage";
import Registration from "./components/Registration";
import Login from "./components/Login";
// import AboutVaxNotify from "./components/AboutVaxNotify"; // Import the AboutVaxNotify component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home page */}
           {/* <Route path="/registration" element={<Registration />} />Registration page */}
          {/* <Route path="/profile" element={<ProfilePage />} /> Profile page */}
           <Route path="/vaccination-calendar" element={<VaccinationCalendar />} /> {/* Vaccination Calendar */}
          {/* <Route path="/about" element={<AboutVaxNotify />} />   About VaxNotify page */}
           <Route path="/login" element={<Login />} /> {/*Login page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


