import React, { useState } from "react";
import "./css/UserProfile.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png";
import Logo from "/img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function UserProfile(props) {
  const {username, user_full_name, role} = props;
  const { user, isLoading } = useAuth0();

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

  return (
    <>
    <img src={Background} className="bg-img" alt="" />
        <NavBar title="Rimaldía" 
                username={user.nickname} 
                nav_bar_alignment="between" 
                logo>
            <MenuContent username={user.nickname}/>
        </NavBar>
        <div className="profile-page-content">
          <ProfileBanner username={user.nickname} 
            user_full_name={user.given_name + " " + user.family_name} 
            role={props.role}
            picture={user.picture}/>
          <div className="posts-content col-10 d-flex flex-column justify-content-center">
            <NewRhyme ></NewRhyme>
            <Post>
              <UserInfo user_name={user.nickname} time={date} profile_picture={user.picture}></UserInfo>
            </Post>
            <Post>
              <UserInfo user_name={user.nickname} time={date} profile_picture={user.picture}></UserInfo>
            </Post>
            <Post>
              <UserInfo user_name={user.nickname} time={date} profile_picture={user.picture}></UserInfo>
            </Post>
          </div>
        </div>
        
    </>
  )
}

export default UserProfile