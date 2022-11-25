import React, { useState } from "react";
import "./css/NotificationCard.css";
import { deleteNotif } from '../services/notificationsService';
import { Navigate } from "react-router-dom";
import { isAdmin } from '../services/usersService';

export const AdminDeleteButton = (props) => {
  const {id} = props;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const [needRefresh, setRefresh] = useState(false);

  const deleteNotifFromDb = async (id) => {
    try{
  
      setError(error => error);     

      await deleteNotif(id);

      console.log("Notificación eliminada con éxito.");
      setRefresh(true);
  
    }
    catch(err){
      setErrorMessage(errorMessage => "No fue posible cargar los temas.")
      //setError(error => !error);
    }    
  }

  if(needRefresh){
      //setRefresh(false);
      console.log("Entered need refresh");
      //window.location.reload();
      return <Navigate to="/" replace />
  }

  if(isAdmin){
    return (
      <div className="ms-auto me-4 my-auto justify-content-right">
        <i className="read-notif-icon bi bi-trash-fill d-flex flex-column justify-content-center" onClick={() => deleteNotifFromDb(id)}></i>
        <div className="legend">Eliminar notif</div>
      </div>
    )
  }
  
}
export default AdminDeleteButton;