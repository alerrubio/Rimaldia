import React, { useState } from "react";
import "./css/SideBar.css";
import Logo from "/img/logo.png";
import PP from"/img/pp3.jpg";
import { useLocation, Link } from "react-router-dom";

export const SideBar = (props) => {
  const {children, username, email} = props;
  return (
    <div id="sidebar" className="container d-none d-lg-block d-flex justify-content-center">
        <div className="user-card-image">
            <img className="profile-image-side-bar" src={PP} />
            <Link 
                to="/user/:id" className="to-profile container justify-content-center">
                    <div className="username text-center">
                        { username }
                    </div>
            </Link>
        </div>
        <div id="categorias" className="categories d-flex flex-column ">
            <Link to={"/category"} className={`head nav-link ${
                location.pathname === "/category" ? "active" : ""
              }`}>
                <i class="bi bi-collection-fill"></i>
                Categorías
            </Link>
            <Link to={"/TForos"} className={`head nav-link ${
                location.pathname === "/TForos" ? "active" : ""
              }`}>
                <i class="bi bi-people-fill"></i>
                Foros
            </Link>
            <Link to={"/favoritos"} className={`head nav-link ${
                location.pathname === "/favoritos" ? "active" : ""
              }`}>
                <i class="bi bi-hearts"></i>
                Favoritos
            </Link>
        </div>
        <Link to={"/"} className="img-logo-link d-flex flex-row justify-content-center">
        <img className="logo-sidebar" src={ Logo } />
        </Link>
    </div>
  );
};

export default SideBar;