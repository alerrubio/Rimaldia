import "./css/Layout.css";
import Background from "/img/LOGIN.png";
import Logo from "/img/logo.png";
import NavBar, { MenuContent }  from "../components/NavBar";
import React, { useState, useEffect, createContext } from "react";
import SideBar from "../components/SideBar";
import UserInfo from "./UserInfo";
import { Outlet, Navigate } from "react-router-dom";
import { isAdmin, getUser, editUser } from '../services/usersService.js';
import { useAuth0 } from "@auth0/auth0-react";
import { shortDate } from "../utils/dateFormatter";

export const ThemeContextL = createContext(null);

var date = new Date();
date = shortDate(date);

export default function Layout() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [Admin, setAdmin] = useState(false);
  const [styleLS, setStyleLS] = useState("");

  const isUserAdmin = async () => {
    try{
      const res = await isAdmin(user.email);
      if (res == true){
        setAdmin(Admin => !Admin);
        localStorage.setItem('admin', JSON.stringify(res));
      }else{
        localStorage.setItem('admin', JSON.stringify(res));
      }
    }
    catch(err){
      console.log("Algo salió mal");
      console.log(err);
    }
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

  const updatePicture = async () => {
    try{
      const userBody = {picture: user.picture}
      const res = await editUser(userBody, user.sub.substring(6));
      const updatedUser = getUserInfo();
      if (res){
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    }
    catch(err){
      console.log("Algo salió mal");
      console.log(err);
    }
  }
  
  useEffect(() => {
    isUserAdmin();
    getUserInfo();
    updatePicture();
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
    <ThemeContextL.Provider value={{styleLS, setStyleLS}}>
      <>
        <style>{styleLS}</style>
        <img src={Background} className="bg-img" alt="" />
        <div className="container d-flex flex-row contenido" id="themed">
          <div className="row col-3">
            <SideBar username={ user.nickname } email={ user.email } />
          </div>
          <NavBar title="Rimaldía" username={ user.nickname } nav_bar_alignment="end">
            {Admin &&
              <MenuContent username={ user.nickname } admin/>
            }
            {!Admin &&
              <MenuContent username={ user.nickname }/>
            }
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
    </ThemeContextL.Provider>    
  );
}