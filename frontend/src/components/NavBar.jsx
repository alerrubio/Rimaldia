import React, { useState } from "react";
import "./NavBar.css";
import { useLocation, Link } from "react-router-dom";

export const NavBar = (props) => {
    const {children, title} = props;
    return (
      <nav className="navbar navbar-expand-lg fixed-top d-flex justify-content-end">
        <div className="">
                {children}
        </div>
      </nav>
    );
  };
  
  export const MenuContent = () => {
    const location = useLocation();
    return (
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/Favoritos" ? "active" : ""
              }`}
              to="#"
            >
              Favoritos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/TForos" ? "active" : ""
              }`}
              to="#"
            >
              Foros
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/login"
            >
              Cerrar sesión
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;