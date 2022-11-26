import "../components/css/comments.css";
import ForumCard from "./ForumCard";
import ForumInput from "./ForumInput";
import { useState, useEffect } from "react";
import EmptyState from "./EmptyState";
import { 
  getAllForums,
  getAllUserForums,
  editForum
} 
from '../services/ForumService';
import { useAuth0 } from "@auth0/auth0-react";

const Forum = (props) => {
  const {all, usersForums} = props;
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

  const destroyComment = (commentId) => {
    if (window.confirm("¿Estás seguro que quieres eliminar tu comentario?")) {
      DestroyDBComment(commentId).then(() => {
        
        const updatedBackendComments = getAllComments(post_id).then((comments) => {
          setPostComments(comments.data);
        });
        setBackendComments(updatedBackendComments);
      });
    }
  };

  useEffect(() => {
    if (usersForums){
      getAllUserForums(userID).then((response) => {
        setForums(response.data);
        console.log(response.data);
      });
    }
    else{
      getAllForums().then((response) => {
        setForums(response.data);
        console.log(response.data);
      });
    }
  }, []);

  useEffect(() => {
    setuserID(user.sub.substring(6));
    if (usersForums){
      getAllUserForums(user.sub.substring(6)).then((response) => {
        setForums(response.data);
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
    {(forums?.length > 0) && forums.map((forum) => (
      <ForumCard
        about={forum.description}
        currentUserId={userID}
        deleteForum=""
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
