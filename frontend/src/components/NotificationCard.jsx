import React, { useState } from "react";
import "./css/NotificationCard.css";
import Modal from "react-modal";
import { useLocation, Link } from "react-router-dom";
import UserNavigationBar from "./UserNavigationBar";
import { AdminDeleteButton } from "./AdminDeleteButton";

export const NotificationCard = (props) => {
    const {title, text, time, id} = props;
    
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      // toggle
      setIsActive(current => !current);
  
      // or set to true
      // setIsActive(true);
    };

    return (
      <>
        <div className="notif-container-card d-flex flex-row w-100 px-2 py-3"
        style={{
            backgroundColor: isActive ? 'salmon' : '',
            color: isActive ? 'white' : '',
          }}
          onClick={handleClick}>
            <div className="ms-3">
                <div className="notif-title-card">{title}</div>
                <div className="notif-text-card">{text}</div>
                <div className="notif-time-card">{time}</div>
            </div>
            
          <AdminDeleteButton id={id}></AdminDeleteButton>
            
        </div>
      </>
    );
  };


export default NotificationCard;