import React, { useState } from "react";
import "./UserInfo.css";
import PP from"/img/pp-example.jpg";
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";

export const UserInfo = (props) => {
    const {children, title, user_name, time} = props;
    return (
      <>
        <div className="perfil_usuario d-flex flex-row ">
            <img className="profile-picture" src={PP} />
            <div className="user-info">
                <p>{user_name}</p>
                <span>{fecha}</span>
            </div>
        </div>
      </>
    );
  };


export default UserInfo;