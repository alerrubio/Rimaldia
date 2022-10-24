import React, { useState } from "react";
import "./NavBar.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation, Link } from "react-router-dom";

export const NavBar = (props) => {
    const {children, title} = props;
    return (
      <>
        <nav className="barra-nav navbar navbar-expand-lg  fixed-top d-flex justify-content-end">
          <div className="d-flex flex-row align-items-center col-8">
            <div className="search-bar input-group rounded">
              <input type="search" className="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
              <span className="input-group-text border-0" id="search-addon">
                <i class="bi bi-search"></i>
              </span>
            </div>
            <div className="col-8">
              {children}
            </div>
          </div>
        </nav>
      </>
      
    );
  };
  
  export const MenuContent = () => {
    const location = useLocation();
    return (
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
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
              className={`nav-link ${location.pathname === "/test" ? "active" : ""}`}
              to="/test"
            >
              Test
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