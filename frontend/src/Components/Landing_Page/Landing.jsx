import React from 'react'
import {Link} from "react-router-dom";
import landing_img from "../../assets/landing.png";
import "../Landing_Page/landing.css";

const Landing = () => {
  return (
    <>
        <div id='container'>
            <div id='sub-container'>
                <img src={landing_img} alt="landing_page img" id='landing_img'/>
            </div>
            <div id='heading'>
                <h1 id="landing_h1">10x Team 04</h1>
                <Link to="/post"><button id="landing_btn">Enter</button></Link>
            </div>
        </div>
    </>
  )
}

export default Landing