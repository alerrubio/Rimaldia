import React, { useState } from "react";
import "./css/NavBar.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const NavBar = (props) => {
    const {children, title, username} = props;
    return (
      <>
        <nav className="barra-nav navbar navbar-expand-sm navbar-expand-lg  fixed-top d-flex justify-content-end">
          <div className="d-flex flex-row align-items-center col-12 col-lg-8">
            <div className="search-bar input-group rounded">
              <input type="search" className="form-control rounded search-nav-bar" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
              <span className="input-group-text border-0" id="search-addon">
                <i class="bi bi-search"></i>
              </span>
            </div>
            <div className="col-12 col-lg-8">
              {children}
            </div>
          </div>
        </nav>
      </>
      
    );
  };
  
  export const MenuContent = (props) => {
    const location = useLocation();
    const {username} = props;
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
              to="/TForos"
            >
              Foros
            </Link>
          </li>
          <li className="nav-item">
            <DropdownButton id="dropdown-basic-button" className="dd-nav-bar" variant="peach" title={username}>
              <Dropdown.Item href="#/action-1">Mi cuenta</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Mi perfil</Dropdown.Item>
              <Dropdown.Item href={"/login"}>Cerrar sesión</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;