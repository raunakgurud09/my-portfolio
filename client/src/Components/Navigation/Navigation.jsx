import { useState } from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
// import image from "../../Assets/Image/logo.png";

function Navigation() {
  const [extendedNavbar, setExtendedNavbar] = useState(false);

  return (
    <div className="navigation">
      <nav>
        <NavLink className="NavLink" to="/">
          <h1>RAUNAK GURUD</h1>
        </NavLink>
        <div className="navigation__toggle-menu">
          <NavLink
            className="NavLink toggle-button"
            to="/"
            onClick={() => {
              setExtendedNavbar((curr) => !curr);
            }}
          >
            {extendedNavbar ? (
              <>
                <span className="cross"></span>
                <span className="cross"></span>
              </>
            ) : (
              <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </>
            )}
          </NavLink>
          <div className="menu active">
            <ul>
              <li>
                <Link className="NavLink" to="#about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="NavLink" to="#experience">
                  EXPERIENCE
                </Link>
              </li>
              <li>
                <Link className="NavLink" to="#projects">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link className="NavLink" to="#contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
