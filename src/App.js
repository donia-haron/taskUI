import "./styles.css";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from 'react';
  
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
   
   // Custom css for loader
   const override = `
   display: block;
   background: black;
   margin: 0 auto;
   border-color: red;
 `;
  return isLoading ?  // If page is still loading then splash screen
 <div className="pacman">
  {/* <PacmanLoader class="iam" color={'#36D7B7'} isLoading={isLoading}
    css={override} size={100} /> */}
    <HashLoader color="#d63636" size={100} isLoading={isLoading} />
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
