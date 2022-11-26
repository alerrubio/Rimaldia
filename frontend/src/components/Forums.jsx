import "../components/css/comments.css";
import "../components/css/loadingComponent.css";
import ForumCard from "./ForumCard";
import { useState, useEffect } from "react";
import EmptyState from "./EmptyState";
import { 
  getAllForums,
  getAllUserForums,
  getAllUserOwnedForums,
  editForum,
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

  const editForumCallback = (forumId, forum) => {
    editForum(forumId, forum).then(() => {
      const updatedBackendForums = getAllForums().then((response) => {
        setPostComments(response.data);
      });
      setBackendComments(updatedBackendForums);
    });
  };

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
        forum={forum}
        forum_name={forum.name}
        key={forum._id}
        members_no={forum.users.length}
        updateForum={editForumCallback}
        canEdit
      />
    ))}
    {!owned && (forums?.length > 0) && forums.map((forum) => (
      <ForumCard
        about={forum.description}
        currentUserId={userID}
        deleteForum={destroyForum}
        forum={forum}
        forum_name={forum.name}
        key={forum._id}
        members_no={forum.users.length}
        updateForum={editForumCallback}
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
