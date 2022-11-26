import "./css/TForos.css";
import "../components/css/loadingComponent.css"
import Forums from "../components/Forums";
import UserNavigationBar from "../components/UserNavigationBar";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";

function TForos() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userID, setUserID] = useState("");

  useEffect(() => {
    setUserID(user.sub.substring(6));
    console.log(userID);
  }, [user]);

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

  return (
    <>
      <div className="mt-3"></div>
      <UserNavigationBar tabs={[{name: 'Mis foros', link: 'misforos'}, 
                                {name: 'Foros seguidos', link: 'foros_seguidos'},
                                {name: 'Todos los foros', link: 'foros'},
                                {name: 'Crear foro', link: 'crearforo'}]} />
      <div className="forum-cards-container d-flex flex-row justify-content-center flex-wrap col-12">
        <Forums all />
      </div>
    </>
    
  )
}

export default TForos