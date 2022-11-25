import React, { useState } from "react";
import "./css/Notification.css";
import PP from"/img/pp-example.jpg";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TagsBox from "./TagsBox";
import { createNotif } from '../services/notificationsService';
import { useLocation, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });

export const Notification = (props) => {
    const {user_name} = props;
    const [addFormData, setAddFormData] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
    const [success, setSuccess] = useState(false);

    const newNotification = async (event) => {
      try{
        event.preventDefault();
        //const res = await createAuth0User(user);  Validar que no exista el nombre del tema
        if(addFormData.title == "" || addFormData.description == ""){
          console.log("No deje campos vacíos");
        }
        else{
          setError(error => error);

          let dbNotif = {
            title: addFormData.title,
            text: addFormData.description
          }       

          const dbRes = await createNotif(dbNotif);

          //console.log("Service response: " +  res);
          console.log("DB response: " +  dbRes);

          setSuccess(true);
        }
      }
      catch(err){
        setErrorMessage(errorMessage => "No fue posible cargar los temas.")
        setError(error => !error);
      }
    
    }

    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };

    if(success){
      return <Navigate to="/notifications/user/:id" replace />
    }
    
    return (
      <>
        <form onSubmit={newNotification} className="notification-form ">
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
            </div>
            <div className="d-flex justify-content-end col-12">
                <Button variant="peach" type="submit" className="col-3">
                    Enviar
                </Button>
            </div>
        </form>
      </>
    );
  };


export default Notification;