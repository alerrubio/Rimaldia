import React, { useState } from "react";
import "./css/SideBar.css";
import Logo from "/img/logo.png";
import PP from"/img/pp-example.jpg";
import { useLocation, Link } from "react-router-dom";

export const SideBar = (props) => {
  const {children, username, email} = props;
  return (
    <div id="sidebar" className="container d-none d-lg-block d-flex justify-content-center">
        <div className="user-card row">
            <Link 
                to="/profile" className="to-profile container d-flex justify-content-center ">
                    <img className="profile-image" src={PP} />
                    <div className="username ">
                        { username }
                    </div>
            </Link>
        </div>
        <div id="categorias" className="categories row">
            <div className="head">
                <a>CATEGORIAS</a>
            </div>
            <div className="item">
                <Link to={"/category"}>Romantico</Link>
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