import { Outlet, Navigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import Logo from "/img/logo.png";
import NavBar, { MenuContent }  from "../components/NavBar";
import UserInfo from "./UserInfo";
import "./css/Layout.css";
import Background from "/img/LOGIN.png";
import React, { useState } from "react";
import PP from"/img/pp3.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import getAdminUsers from '../services/auth0/userService.js';

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });


export default function Layout() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isAdmin, setIsAdmin] = useState(false);


  const adminUsers = async (event) => {
    const users = await getAdminUsers();
  }
  if (isLoading){
    return (
    <>
      <div className="loading d-flex justify-content-center align-items-center">
        <img src={Logo} className="loadingLogo" alt="" />
        <i class="bi bi-gear rotate"></i>
      </div>
    </>
    );
  }
  
  if (!isAuthenticated){
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <img src={Background} className="bg-img" alt="" />
      <div className="container d-flex flex-row contenido">
        <div className="row col-3">
          <SideBar username={ user.nickname } email={ user.email } />
        </div>
        <NavBar title="Rimaldía" username={ user.nickname } nav_bar_alignment="end">
            <MenuContent username={ user.nickname }/>
        </NavBar>
        
        <div id="detail" className="row col-11 ps-5">
          <div className="page-content">
            <UserInfo user_name={user.given_name + " " + user.family_name} 
              time={date} 
              profile_picture={user.picture} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}