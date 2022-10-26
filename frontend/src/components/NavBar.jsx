import React, { useState } from "react";
import "./css/NavBar.css";
import Logo from "/img/logo.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useLocation, Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export const NavBar = (props) => {
    const {children, title, username, nav_bar_alignment, logo} = props;
    var logo_div = null;
    if (logo){
      logo_div = <Link className="logo-link" to={"/"}><img className="nav-bar-logo" src={ Logo } /></Link>;
    }
    return (
      <>
        <nav className={`barra-nav navbar navbar-expand-sm navbar-expand-lg  fixed-top d-flex justify-content-${nav_bar_alignment}`}>
          {logo_div}
          <div className="d-flex flex-row align-items-center col-12 col-lg-3 ms-2">
            <div className="search-bar input-group rounded">
              <input type="search" className="form-control rounded search-nav-bar" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
              <span className="input-group-text border-0" id="search-addon">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-6">
              {children}
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
              className={`nav-link ${
                location.pathname === "/TForos" ? "active" : ""
              }`}
              to="/TForos"
            >
              Foros
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                location.pathname === "/Records" ? "active" : ""
              }`}
              to="/Records"
            >
              Récords
            </Link>
          </li>
          <li className="nav-item">
            <DropdownButton id="dropdown-basic-button" className="dd-nav-bar" variant="peach" title={username}>
              <Dropdown.Item as={Link} to="#/action-1">Mi cuenta</Dropdown.Item>
              <Dropdown.Item as={Link} to={"/user/:id"}>Mi perfil</Dropdown.Item>
              <Dropdown.Item as={Link} to={"/login"}>Cerrar sesión</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;