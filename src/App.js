import "./styles.css";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from 'react';
  
import  logo from'./components/logo.svg';
// Importing loader
import PacmanLoader from "react-spinners/PacmanLoader";
import HashLoader from "react-spinners/HashLoader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
function App() {
   // Loading state 
   const [isLoading, setIsLoading] = useState(true);
  
   useEffect(() => {
   
     // Wait for 3 seconds
     setTimeout(() => {
       setIsLoading(false);
     }, 7000);
   }, []);
   

  return isLoading ?  // If page is still loading then splash screen
 <div className="pacman">
 <img className="logoload" src={logo}/>
    <HashLoader color="#d63636" size={50} isLoading={isLoading} />
    <HashLoader color="#d63636" size={50} isLoading={isLoading} />
    <HashLoader color="#d63636" size={50} isLoading={isLoading} />
   
    </div> :( 
    <>
    <Router>
   
    <div className="App">
    
      <Sidebar>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-tasks" element={<Home />} />
          <Route path="/inbox" element={<Home />} />
          <Route path="/reportings" element={<Home />} />
          <Route path="/portfolios" element={<Home />} />
          <Route path="/goals" element={<Home />} />
        </Routes>
      </Sidebar>
</div>
    </Router>
  </>
  );
}

export default App;
