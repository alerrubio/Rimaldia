import "./css/NavBar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Logo from "/img/logo.png";
import React, { useState } from "react";
import { isAdmin } from '../services/usersService';
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation, Link } from "react-router-dom";

function newTab(nav_link, nav_bar, tab_title){
  nav_bar.push(<li className="nav-item" key={tab_title}>
        <Link
          className={`nav-link ${
            location.pathname === {nav_link} ? "active" : ""
          }`}
          to={nav_link}
        >
          {tab_title}
        </Link>
      </li>);
}

export const NavBar = (props) => {
    const {children, nav_bar_alignment, logo} = props;
    
    var logo_div = null;
    if (logo){
      logo_div = <Link className="logo-link" to={"/"}><img className="nav-bar-logo" src={ Logo } /></Link>;
    }
    
    return (
      <>
        <nav className={`themedSecondary barra-nav navbar navbar-expand-sm navbar-expand-lg  fixed-top d-flex justify-content-${nav_bar_alignment}`}>
          {logo_div}
          <div className="col-12 col-lg-6">
              {children}
          </div>
        </nav>
      </>
      
    );
  };

  export const MenuContent = (props) => {
    const location = useLocation();
    const {username, admin} = props;
    const { user, logout, isLoading } = useAuth0();
    const [indeedAdmin, setIndeedAdmin] = useState(false);

    var nav_tabs = [];

    if (admin){
      newTab("/",nav_tabs,"Inicio");
      newTab("/admin/notification",nav_tabs,"Notificaciones");
      newTab("/admin/verTemas",nav_tabs,"Temas");
      newTab("/admin/usuarios",nav_tabs,"Usuarios");
      newTab("/admin/crearRecord",nav_tabs,<i class=" themedText bi bi-clipboard-data-fill"></i>);
    }
    else{
      newTab("/",nav_tabs,"Inicio");
      newTab("/foros",nav_tabs,"Foros");
      newTab("/Records",nav_tabs,<i class=" themedText bi bi-clipboard-data-fill"></i>);
      newTab("/notifications/user/:id",nav_tabs,<i className="bi bi-bell-fill notif-bell"></i>);
    }
  
    useEffect(() => {    
      const fetchdata = async () => {
        const res = await isAdmin(user.email);
        if(res){
          setIndeedAdmin(true);
        }
      };
      fetchdata();
    }, [user]); 

    if (isLoading) {
      return (
        <>
          <div className="loading d-flex justify-content-center align-items-center">
            <img src={Logo} className="loadingLogo" alt="" />
            <i class="bi bi-gear rotate"></i>
          </div>
        </>
        );
    }

    return (
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          {nav_tabs}
          <li className="nav-item">
            <DropdownButton id="dropdown-basic-button" className="dd-nav-bar" variant="peach" title={user.nickname}>
              {indeedAdmin &&
                <Dropdown.Item as={Link} to={"/admin"}>Administrador</Dropdown.Item>
              }
              <Dropdown.Item as={Link} to={"/Settings"}>Settings</Dropdown.Item>
              <Dropdown.Item as={Link} to={"/user/:id"}>Mi perfil</Dropdown.Item>
              <Dropdown.Item as={Link} onClick={() => {
                localStorage.clear();
                logout({ returnTo: "http://localhost:5173/login" });
                }}>Cerrar sesi??n</Dropdown.Item>
            </DropdownButton>
          </li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;