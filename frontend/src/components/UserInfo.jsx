import React, { useState } from "react";
import "./css/UserInfo.css";
import PP from"/img/pp-example.jpg";
import { useLocation, Link } from "react-router-dom";

export const UserInfo = (props) => {
    const {children, profile_picture, user_name, time, style} = props;
    return (
      <>
        <div className={`perfil_usuario d-flex flex-row ${style}`}>
            <img className="profile-picture" src={profile_picture} />
            <div className="user-info ">
                <p>{user_name}</p>
                <span>{time}</span>
            </div>
        </div>
      </>
    );
  };


export default UserInfo;