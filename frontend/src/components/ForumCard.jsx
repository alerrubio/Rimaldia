import React, { useState } from "react";
import "./css/ForumCard.css";
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";
import UserNavigationBar from "./UserNavigationBar";

export const ForumCard = (props) => {
    const {children, forum_name, icon, members_no, about} = props;
    return (
      <>
        <div className="forum-card-container col-2">
          <Link to={"/forum/:id"} className="forum-card d-flex flex-row justify-content-center align-items-center">
            <i class={`bi ${icon} forums-icon`}></i>
            <div className="forum_info d-flex flex-column">
              <div className="forum_name">{forum_name}</div>
              <div className="about-forum">
                {about}
              </div>
              <div className="members_no">
                Miembros: {members_no} 
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  };


export default ForumCard;