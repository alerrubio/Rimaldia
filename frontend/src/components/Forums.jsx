import "../components/css/comments.css";
import "../components/css/loadingComponent.css";
import Logo from "/img/logo.png";
import ForumCard from "./ForumCard";
import React, { useState, useEffect } from "react";
import EmptyState from "./EmptyState";
import { 
  getAllForums,
  getAllUserForums,
  getAllUserOwnedForums,
  deleteForum
} 
from '../services/ForumService';
import { useAuth0 } from "@auth0/auth0-react";

const Forum = (props) => {
  const {all, usersForums, owned} = props;
  const { user, isLoading } = useAuth0();
  const [backendForums, setBackendForums] = useState([]);
  const [forums, setForums] = useState([]);
  const [userID, setuserID] = useState("");

  const destroyForum = (forum_id) => {
    if (window.confirm("¿Estás seguro que quieres eliminar este foro?")) {
      deleteForum(forum_id).then(() => {
        if (owned){
          const updatedBackendForums = getAllUserOwnedForums(userID).then((response) => {
            setForums(response.data);
          });
          forums(updatedBackendForums);
        }
        else if (usersForums){
          const updatedBackendForums = getAllUserForums(userID).then((response) => {
            setForums(response.data);
          });
          forums(updatedBackendForums);
        }
        else{
          const updatedBackendForums = getAllForums().then((response) => {
            setForums(response.data);
          });
          forums(updatedBackendForums);
        }
      });
    }
  };

  useEffect(() => {
    setuserID(user.sub.substring(6));
    if (usersForums){
      getAllUserForums(user.sub.substring(6)).then((response) => {
        setForums(response.data);
      });
    }
    else if (owned){
      getAllUserOwnedForums(user.sub.substring(6)).then((response) => {
        setForums(response.data);
        console.log(response.data);
      });
    }
    else{
      getAllForums().then((response) => {
        setForums(response.data);
      });
    }
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
    {owned && (forums?.length > 0) && forums.map((forum) => (
      <ForumCard
        about={forum.description}
        currentUserId={userID}
        deleteForum={destroyForum}
        forum_name={forum.name}
        forumObj={forum}
        members_no={forum.users.length}
        canEdit
      />
    ))}
    {!owned && (forums?.length > 0) && forums.map((forum) => (
      <ForumCard
        about={forum.description}
        currentUserId={userID}
        forum_name={forum.name}
        key={forum._id}
        forumObj={forum}
        members_no={forum.users.length}
      />
    ))}
    {(forums?.length === 0) &&
      <div class="d-flex flex-row justify-content-center py-20">
        <EmptyState title="foros"/>
      </div>
    }
    </>
  );
};

export default Forum;
