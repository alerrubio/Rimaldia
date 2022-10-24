import React, { useState } from "react";
import "./SideBar.css";
import Logo from "/img/logo.png";
import PP from"/img/pp-example.jpg";
import { useLocation, Link } from "react-router-dom";

export const SideBar = (props) => {
  const {children, username} = props;
  return (
    <div id="sidebar" className="container d-none d-lg-block">
        <div className="user-card  d-flex justify-content-center align-items-center">
            <Link 
                to="/profile" className="to-profile container d-flex justify-content-center ">
                    <img className="profile-image" src={PP} />
                    <div className="username  ">
                        { username }
                    </div>
            </Link>
        </div>
        <div id="categorias" className="categories ">
            <div className="head">
                <a>CATEGORIAS</a>
            </div>
            <div className="item">
                <a>Romantico</a>
            </div>
            <div className="item">
                <a>Verso Libre</a>
            </div>
            <div className="item">
                <a>Tristeza</a>
            </div>
            <div className="item">
                <a>Motivacional</a>
            </div>
        </div>
        <div className="logo-container d-flex justify-content-center">
            <img className="logo " src={Logo} />
        </div>
        
    </div>
  );
};

export default SideBar;