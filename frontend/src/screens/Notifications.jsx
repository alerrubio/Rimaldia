import "./css/Home.css";
import { useState, useEffect } from "react";
import { NewRhyme } from "../components/NewRhyme";
import { getNotifs } from '../services/notificationsService';

import NotificationCard from "../components/NotificationCard";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});

function Notifications() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const [notifs, setNotifs] = useState([]);

  const getNotifsFromDb = async (event) => {
    try{
      
      setError(error => error);     

      const dbRes = await getNotifs();

      console.log("Notificaciones cargadas con éxito.");

      setNotifs(dbRes);
      
    }
    catch(err){
      setErrorMessage(errorMessage => "No fue posible cargar las notificaciones.")
      setError(error => !error);
    }
    
  }

  useEffect(()=>{
    getNotifsFromDb();
  }, []);

  return (
    <>
      <div className="col-12 d-flex flex-row flex-wrap justify-content-center">
        
        {notifs.map(row => {
            return (
              <NotificationCard 
                title={row.title}
                text={row.text}
                time={row.createdAt}
                id={row._id}>
              </NotificationCard>
            );
        })}

        
      </div>
    </>
  )
}

export default Notifications