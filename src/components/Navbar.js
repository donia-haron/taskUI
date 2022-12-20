import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import  user from'./user.svg';
import  users from'./users.gif';
import { FaAngleDown } from "react-icons/fa";
import { PopupMenu } from "react-simple-widgets";
export default class Navbar extends Component {
    
  render() {
    return (
      <nav className="nav">
        <ul >
         
          <li>
            <Link to="/">Game Plan</Link>
          </li>
        
        <li>
        <div className="text-end">
        <PopupMenu>
        <p>
          <button className="btn btn-primary stylepop">
        Account Switcher
        <br/>
       <img src={user}/>
      < FaAngleDown/>
       
          </button>
          </p>
          <div className="card text-start">
            <div className="card-body px-4 py-4">
       <img src={users} className="icon2"/>
       <hr className="mb-0" style={{ margin: "0 -24px 0" }} />
          
              <p className="text-center mb-2"><div id="circle-avatar"  class="element"></div>doniaharon.1852@gmail.com</p>
              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />
              <p className="text-center mb-2"><div id="circle-avatar"  class="element2"></div>sim.donia.hesham@alu.edu.eg</p>


              <hr style={{ margin: "0 -24px 24px" }} />

               <div className="log">
                <button className="logout stylepop">
    LogOut
        </button>
        </div>
            </div>
          </div>
        </PopupMenu>
      </div>
        </li>
        </ul>
      </nav>
    );
  }
}
