import React from "react";
import ReactDOM from "react-dom";
import "./Card2.css";
import  diamond from'./diamond.svg';
import  flag from'./flag.svg';
import  marshmello from'./marshmello.svg';
import  point from'./point.svg';
import  attach from'./attach.svg';
import  go from'./inactive.gif';
function Card2() {


  return (
<div>
  <div >InActive</div>
    <div class="flip-card">

  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={marshmello} className="image"/>


    <h2 className="card-title">Click & Collect</h2>
 
 <p className="card-body">
 It is a long established fact that a reader will be distracted by the readable eye.

 </p>
      </div>
    <div class="flip-card-back">

    <img src={go} className="goicon2"/>
    <div className="bodyicons">
<p className="bodypadding"><img src={diamond}/>5,0000 Frubies</p>

<p><img src={flag}/>3 Milestones</p>
</div>
<div className="bodyicons">
<p className="bodypadding"><img src={point}/>2,500 Points</p>
<p><img src={attach}/>The Big Points</p>
</div>

      
    </div>
  </div>
</div>
</div>
  );
}

export default Card2;