import React, { useState } from "react";
import {

  FaBars
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import  Dashboard from'./dashboard.svg';
import  rocket from'./rocket.svg';
import  game from'./game.svg';
import  logo from'./logo.svg';

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  function Toggle() {
    setIsOpen(!isOpen);
  }

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      img: Dashboard
    },
    {
      path: "/",
      name: "Game Plan",
      img: game
    },
    {
      path: "/",
      name: "Levels",
      img: rocket

    },
   
  
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
        <div className="top_section">
          {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1> */}
          <img
            style={{ display: isOpen ? "block" : "none" }}
            src={logo}
            className="logo"
            alt=""
          />
          <div
            style={{ marginLeft: isOpen ? "50px" : "10px" }}
            className="bars"
          >
            <FaBars onClick={Toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link active">
           
            <img src={item.img}  className="icon" alt='mySvgImage' />
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <hr className="sideLine" />

       
      </div>

      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
