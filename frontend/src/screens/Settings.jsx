import "./css/Settings.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import { Navigate } from "react-router-dom";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png"
import ThemeSettings from "../components/ThemeSet";
import EditUser from "../components/EditUser";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "/img/logo.png";
import { Constants } from '../lib/constants.js';
import { isAdmin, getUser, editUser } from '../services/usersService.js';
import React, { useState, useEffect, createContext } from "react";

const Settings = (props) => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  var userSession = {};
  const userRole = JSON.parse(localStorage.getItem('user')).role;
  let roleStr = "";
  if (userRole == Constants.ROLES.POETA_ID){
    roleStr = Constants.ROLES_TITLES.POETA;
  }
  else if (userRole == Constants.ROLES.ADMIN_ID){
    roleStr = Constants.ROLES_TITLES.ADMIN;
  }

  const getUserInfo = async () => {
    try{
      const res = await getUser(user.sub.substring(6));
      if (res){
        localStorage.setItem('user', JSON.stringify(res));
      }
    }
    catch(err){
      console.log("Algo salió mal");
      console.log(err);
    }
  }
  useEffect(() => {
    getUserInfo();
    userSession = JSON.parse(localStorage.getItem('user'));
    //let fromLS= localStorage.getItem('themeStyleLS');
    //setStyleLS(fromLS);
  }, [user]);

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
      <NavBar title="Rimaldía" 
              nav_bar_alignment="between" 
              logo>
          <MenuContent username={user.nickname}/>
      </NavBar>
      <div className="settings-page-content">
        <ProfileBanner username={user.nickname} 
          user_full_name={user.given_name + " " + user.family_name} 
          role={roleStr}
          picture={user.picture}>
        </ProfileBanner>
        
        <div className="settings-content col-10 d-flex flex-row justify-content-center">
          <EditUser email={user.email}
            given_name={user.given_name}
            family_name={user.family_name}
            ></EditUser>
        </div>
      </div>
    </>
  )

}
export default Settings