import React, { useState } from "react";
import "./css/SideBar.css";
import Logo from "/img/logo.png";
import PP from"/img/pp-example.jpg";
import { useLocation, Link } from "react-router-dom";

export const SideBar = (props) => {
  const {children, username, email} = props;
  return (
    <div id="sidebar" className="container d-none d-lg-block d-flex justify-content-center">
        <div className="user-card row ">
            <img className="profile-image" src={PP} />
            <Link 
                to="/user" className="to-profile container justify-content-center">
                    <div className="username text-center">
                        { username }
                    </div>
            </Link>
        </div>
        <div id="categorias" className="categories row">
            <div className="head">
                <Link to={"/category"}>Categorías</Link>
            </div>
            <div className="item">
                <Link to={"/category"}>Romántico</Link>
            </div>
            <div className="item">
                <Link to={"/category"}>Verso Libre</Link>
            </div>
            <div className="item">
                <Link to={"/category"}>Tristeza</Link>
            </div>
            <div className="item">
                <Link to={"/category"}>Motivacional</Link>
            </div>
        </div>
        <div className="logo-container row d-flex justify-content-center ">
            <img className="logo img-fluid" src={Logo} />
        </div>
        
    </div>
  );
};

export default SideBar;