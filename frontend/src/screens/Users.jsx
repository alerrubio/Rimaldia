import "./css/Users.css";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/usersService.js";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Constants } from '../lib/constants.js';

var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});

function Users() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [notAdmin, setnotAdmin] = useState(false);
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);

  const getAllUsers = async () => {
    const response = await getUsers(page);
    setUsers(response.data);
    console.log(users);
  }

  let usersList = [];

  {users.forEach((user, index)=>{
    let role = "";
    if (user.role == Constants.ROLES.POETA_ID){
      role = Constants.ROLES_TITLES.POETA;
    }
    else if (user.role == Constants.ROLES.ADMIN_ID){
      role = Constants.ROLES_TITLES.ADMIN;
    }
    else{
      role = Constants.ROLES_TITLES.SUPER_POETA;
    }
      usersList.push(
        <UserCard user_name={`${user.given_name} ${user.family_name}`} 
          username={`${user.username}`} 
          email={`${user.email}`}
          user_id={`${user.user_id}`}
          role={`${role}`}></UserCard>
      );
    })
  }

  useEffect(() => {
    const adminUser = JSON.parse(localStorage.getItem('admin'));
    console.log(adminUser);
    if (adminUser == false){
      setnotAdmin(true);
    }
  }, [user]);

  useEffect(() => {
    getAllUsers();
    setUserCount(users.length);
    console.log(page);
  }, [page]);

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
        {usersList}
        <div className="col-12 d-flex flex-row justify-content-around mt-3 navigation">
          <i onClick={() => {
            if (page > 1){
              setPage(page - 1);
            }
            }} class="bi bi-caret-left-fill nav-prev"></i>
          <i onClick={() => setPage(page + 1)} class="bi bi-caret-right-fill nav-next"></i>
        </div>
      </div>
      
    </>
    
  )
}

export default Users