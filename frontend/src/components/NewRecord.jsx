import React, { useState, useEffect } from "react";
import "./css/Notification.css";
import Button from 'react-bootstrap/Button';
import { createRecord } from '../services/recordsService';
import { Navigate } from "react-router-dom";

var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });

export const NewRecord = (props) => {
    const [addFormData, setAddFormData] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
    const [success, setSuccess] = useState(false);

    const newRecordDb = async (event) => {
      try{
        event.preventDefault();
        //const res = await createAuth0User(user);  Validar que no exista el nombre del tema
        if(addFormData.start_date == "" || addFormData.end_date == ""){
          console.log("No deje campos vacíos");
        }
        else{

          setError(error => error);

          const start = new Date(addFormData.start_date);
          const end = new Date(addFormData.end_date);

          if( start > end){
            console.log("La fecha de inicio del rango es posterior a la fecha de cierre.");
          }else{
            console.log("Las fechas son correctas.");
          }

          //load resultados de consultas

          let dbRecord = {
            start_date: new Date(addFormData.start_date),
            end_date: new Date(addFormData.end_date),
            most_used_tags_id: [],
            most_liked_posts_id: [],
            most_commented_posts_id: [],
            most_popular_users_id: []
          }
          //console.log("Manual object: " +  JSON.stringify(dbRecord));

          const dbRes = await createRecord(dbRecord);         

          console.log("DB response: " +  dbRes);

          //setSuccess(true);
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
      return <Navigate to="/Records" replace />
    }
    
    useEffect(()=>{
        end_date.max = new Date().toISOString().split("T")[0];
        start_date.max = new Date().toISOString().split("T")[0];
    }, []);
    
    return (
      <>
        <form id="record_info" onSubmit={newRecordDb} className="notification-form ">
            <h3 className="col-12 text-center">Generar nuevo record</h3>
            <div className="notif-inputs-box d-flex flex-column justify-content-center">
                <input
                type="date"
                name="start_date"
                id="start_date"
                required
                onChange={handleAddFormChange}
                className="notif-input"
                />
                <input
                type="date"
                name="end_date"
                id="end_date"
                required
                placeholder="Descripción"
                onChange={handleAddFormChange}
                className="notif-input"
                />
            </div>
            <div className="d-flex justify-content-end col-12">
                <Button form="record_info" type="submit" variant="peach" className="btn-login btn login col-12">
                    Crear record
                </Button>
            </div>
        </form>
      </>
    );
  };


export default NewRecord;