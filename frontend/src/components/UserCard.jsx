import React, { useState } from "react";
import "./css/UserCard.css";
import Modal from "react-modal";
import { useLocation, Link } from "react-router-dom";
import UserNavigationBar from "./UserNavigationBar";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "/img/logo.png";
import { changeUserRole } from '../services/usersService.js';
import { Constants } from '../lib/constants.js';

export const UserCard = (props) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const {user_id, user_name, username, email, role} = props;
    const [isOpen, setIsOpen] = useState(false);
    const [userMetadata, setUserMetadata] = useState(null);

    const makeAdmin = async () => {
      const res = await changeUserRole(user_id, Constants.ROLES.ADMIN_ID);
      console.log(res);
    }

    function toggleModal() {
      setIsOpen(!isOpen);
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
        <div className="user-card-container d-flex flex-column align-items-end col-1">
          <Link to={"/user/:id"} className="user-card-info d-flex flex-row justify-content-center align-items-center">
            <div className="user_info_card d-flex flex-column col-12">
              <div className="user_name_card">{user_name}</div>
              <div className="username_card">
                {username}
              </div>
              <div className="email_card">
                {email} 
              </div>
              <div className="email_card">
                {role} 
              </div>
            </div>
          </Link>
          <div className="user-options_card">
            <Link to="" onClick={() => makeAdmin()} className="change-role-user-icon">
                Hacer admin
            </Link>
            <Link to="" onClick={() => {
              
              toggleModal();
              }}>
                <i className="bi bi-person-x-fill delete-user-icon"></i>
            </Link>
          </div>
          
        </div>
      </>
    );
  };


export default UserCard;