import "./css/Users.css";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/usersService.js";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});

function Users() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [notAdmin, setnotAdmin] = useState(false);
  const [page, setPage] = useState(0);

  const getAllUsers = async (page) => {
    const users = await getUsers(page);
    console.log(res);
  }

  useEffect(() => {
    const adminUser = JSON.parse(localStorage.getItem('admin'));
    console.log(adminUser);
    if (adminUser == false){
      setnotAdmin(true);
    }
    getAllUsers();
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
  
  if (!isAuthenticated){
    return <Navigate to="/login" replace />
  }

  if (notAdmin){
    return <Navigate to="/" replace />
  }

  return (
    <>
      <div className="mt-3"></div>
      <div className="users-cards-container d-flex flex-row justify-content-center flex-wrap col-12">
        <UserCard user_name="Sandra Noche" 
                   username="sansan" 
                   email="sansan@gmail.com"
                   user_id="637c3fe7c3cfed678ac0e750"
                   role="Poeta"></UserCard>
        <UserCard user_name="Ricardo Lira" 
                   username="rickylira"
                   email="ricky@gmail.com"
                   role="Poeta"></UserCard>
        <UserCard user_name="Francisca Sueño" 
                   username="panchitadream"
                   email="panchita@gmail.com"
                   role="Super poeta"></UserCard>
        <UserCard user_name="Luisa Rimas"
                   username="luiri"
                   email="luiri@gmail.com"
                   role="Poeta"></UserCard>
        <div className="col-12 d-flex flex-row justify-content-around mt-3 navigation">
          <i class="bi bi-caret-left-fill nav-prev"></i>
          <i class="bi bi-caret-right-fill nav-next"></i>
        </div>
      </div>
      
    </>
    
  )
}

export default Users