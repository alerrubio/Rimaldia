import "../../api/App.css";
import "./css/UserProfile.css";
import "./css/ThemeStyle.css";
import Background from "/img/LOGIN.png"
import Logo from "/img/logo.png";
import NavBar from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import React, { useState, useEffect } from "react";
import data from "../../api/mock-data.json";
import { MenuContent } from "../components/NavBar";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function SuperAdmin(props) {
  const [contacts, setContacts] = useState(data);
  const [notAdmin, setnotAdmin] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  useEffect(() => {
    const adminUser = JSON.parse(localStorage.getItem('admin'));
    console.log(adminUser);
    if (adminUser == false){
      setnotAdmin(true);
    }
  }, []);

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

  if (notAdmin){
    return <Navigate to="/" replace />
  }

  return (
    <>
    <div className="profile-page-content m-0 p-0" id="dark">
    <img src={Background} className="bg-img" alt="" />
      <NavBar title="Rimaldía" 
              username={user.nickname} 
              nav_bar_alignment="between" 
              logo>
          <MenuContent username={user.nickname}
                        admin/>
      </NavBar>
      <div className="profile-page-content">
        <ProfileBanner username={user.nickname} user_full_name={user.given_name + " " + user.family_name} role={props.role} picture={user.picture}/>
        
        <div className="posts-content col-10 d-flex flex-column justify-content-center">
          <Outlet/>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default SuperAdmin