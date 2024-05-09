import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "./Navbar.css";     
const Navbar = () => {
return(
  <>
    <div className="container">
    <nav className="navbar">
      <div className="logo">Lens of Life: Exploring the World Through Photography</div>
      <ul className="nav_link">
        <li className="nav1"><Link className="nav_link" to="/Home">Home</Link></li>
        <li className="nav1"><Link className="nav_link" to="/About">About Me</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Work">My work</Link></li>
        <li className="nav1"><Link className="nav_link" to="/Contact">Contact me</Link></li>
      </ul>
    </nav>
    
    </div>
  </>
)
}
export default Navbar;