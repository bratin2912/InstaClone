import React from 'react'
import landing_img from "../../assets/landing.png";
import "../Landing_Page/landing.css";

const Landing = () => {
  return (
    <>
        <div id='container'>
            <img src={landing_img} alt="huki" id='landing_img'/>
            <div id='heading_div'>
                <h1>10x Team 04</h1>
            </div>
            <div id='button_div'>
                <button>Enter</button>
            </div>
        </div>
    </>
  )
}

export default Landing