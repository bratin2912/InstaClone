import React from 'react'
import "../Navbar/navbar.css";
import {Link} from "react-router-dom";
import icon from "../../assets/icon.png";
import camera from "../../assets/camera.png"
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={icon} alt="logo"  id='icon'/>
        <p id='navbar_h1'>InstaClone</p>
        <Link to="/post"><img src={camera} alt="camera" id='camera'/></Link>
    </div>
  )
}

export default Navbar