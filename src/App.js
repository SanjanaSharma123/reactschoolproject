import React from "react";
import Navbar from "./navbar";
// import "./App.css"; 
import "./navbar.css";
import CampusTour from "./CampusTour";

function App() {
  return (
    <div>
  
      <Navbar /> 
      
      <div className="school-container">
        <img src="images/schoolimage1.png" alt="School" className="school-image" />
     
        <h1 className="school-name">Welcome to Our School</h1>

        <div className="button-container">
          <button className="school-button">Inquiry</button>
          <button className="school-button">Contact</button>
        </div>
       
      
      </div>
      <CampusTour />
      
     
    </div>
  );
}

export default App;
