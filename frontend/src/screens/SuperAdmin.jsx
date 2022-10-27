import "./css/UserProfile.css";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import Background from "/img/LOGIN.png"
import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../../api/App.css";
import data from "../../api/mock-data.json";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import UserNavigationBar from "../components/UserNavigationBar";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });


function SuperAdmin(props) {
  const {username, user_full_name, role} = props;

  const [contacts, setContacts] = useState(data);

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

  return (
    <>
      <img src={Background} className="bg-img" alt="" />
        <NavBar title="Rimaldía" 
                username={props.username} 
                nav_bar_alignment="between" 
                logo>
            <MenuContent username={props.username}
                         admin/>
        </NavBar>
        <div className="profile-page-content">
          <ProfileBanner username={props.username} user_full_name={props.user_full_name} role={props.role}/>
          <div className="posts-content col-10 d-flex flex-column justify-content-center">
          <div className="app-container">
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SuperAdmin