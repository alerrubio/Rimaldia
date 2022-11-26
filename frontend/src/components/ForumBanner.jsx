import "./css/ForumBanner.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Button from "react-bootstrap/esm/Button";
import { editForum, findUser } from '../services/forumService';
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ForumBanner(props) {
  const {forum_name, members_no, about, isOwner, addUser, forum_id, user_id } = props;
  const { user } = useAuth0();
  const [showAddButton, setshowAddButton] = useState(true);
  var isUserInGroup;

  const addUserToForum = async () => {
    console.log(user_id);
    if (isUserInForum()){
      window.confirm("Ya es miembro del grupo");
      isUserInGroup = true;
    }else{
      const response = await editForum(forum_id, user_id);
      if (response.status == 200){
        if (window.confirm("Se le añadió al foro con éxito")){
          isUserInGroup = true;
        }
      }
      console.log(response);
    }
    
  }

  const isUserInForum = async () => {
    const response = await findUser(user_id, forum_id);
    console.log("yaaaaaaaaaaa " + response.status);
    if (response.status == 200){
      isUserInGroup = true;
      return true;
    }else if (response.status == 204){
      isUserInGroup = false;
      return false;
    }
  }

  useEffect(() => {
    setshowAddButton(isUserInForum());
    console.log("pero esta o no: " + showAddButton);
  }, [isUserInGroup]);

  return (
    <>
        <div className="forum-information col-10 d-flex flex-row flex-wrap justify-content-center">
            <div className="forum-detail-box col-12 d-flex flex-column justify-content-center align-items-center">
                <div className="forum_name">{forum_name}</div>
                <div className="about_forum">{about}</div>
            </div>
            {showAddButton &&
              <div className="join-button-box col-12 d-flex justify-content-end">
                <Button variant="peach" className="join-forum" onClick={addUserToForum}>
                        Unirse al foro
                </Button>
              </div>
            }
            
        </div>
    </>
  )
}

export default ForumBanner