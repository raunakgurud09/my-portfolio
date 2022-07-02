import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
// import image from "../../Assets/Image/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <NavLink className="NavLink" to="/">
          <h1>RAUNAK GURUD</h1>
        </NavLink>
        <NavLink className="NavLink toggle-button" to="/" >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </NavLink>
        <div className="menu">
          <ul>
            <li>
              <NavLink className="NavLink" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/experience">
                EXPERIENCE
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/projects">
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
