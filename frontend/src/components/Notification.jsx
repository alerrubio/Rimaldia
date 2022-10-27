import React, { useState } from "react";
import "./css/Notification.css";
import PP from"/img/pp-example.jpg";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TagsBox from "./TagsBox";
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";

export const Notification = (props) => {
    const {user_name} = props;

    const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newContact = {
          id: nanoid(),
          fullName: addFormData.fullName,
          address: addFormData.address,
          phoneNumber: addFormData.phoneNumber,
          email: addFormData.email,
        };
    
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
      };

    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };
    return (
      <>
        <form onSubmit={handleAddFormSubmit} className="notification-form ">
            <h3 className="col-12 text-center">Notificación nueva</h3>
            <div className="notif-inputs-box d-flex flex-column justify-content-center">
                <input
                type="text"
                name="title"
                required="required"
                placeholder="Título"
                onChange={handleAddFormChange}
                className="notif-input"
                />
                <input
                type="text"
                name="description"
                required="required"
                placeholder="Descripción"
                onChange={handleAddFormChange}
                className="notif-input"
                />
                <input
                type="email"
                name="email"
                required="required"
                placeholder="Escriba su nombre..."
                onChange={handleAddFormChange}
                className="notif-input">
                    {user_name}
                </input>
            </div>
            <div className="d-flex justify-content-end col-12">
                <Button variant="peach" onClick={event =>  window.location.href='/SuperAdmin'} className="col-3">
                    Enviar
                </Button>
            </div>
        </form>
      </>
    );
  };


export default Notification;