import React, { useState } from "react";
import "./css/UserCard.css";
import Modal from "react-modal";
import { useLocation, Link } from "react-router-dom";
import UserNavigationBar from "./UserNavigationBar";

export const UserCard = (props) => {
    const {user_name, username, email, role} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [userMetadata, setUserMetadata] = useState(null);
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    return (
      <>
        <div className="user-card-container d-flex flex-column align-items-end col-1">
          <Link to={"/user/:id"} className="user-card-info d-flex flex-row justify-content-center align-items-center">
            <div className="user_info_card d-flex flex-column col-12">
              <div className="user_name_card">{user_name}</div>
              <div className="username_card">
                {username}
              </div>
              <div className="email_card">
                {user.email} 
              </div>
              <div className="email_card">
                {role} 
              </div>
            </div>
          </Link>
          <div className="user-options_card">
            <Link to="">
                <i className="bi bi-key-fill change-role-user-icon"></i>
            </Link>
            <Link to="" onClick={toggleModal}>
                <i className="bi bi-person-x-fill delete-user-icon"></i>
            </Link>
          </div>
          
        </div>
      </>
    );
  };


export default UserCard;