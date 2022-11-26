import "./css/ForumCard.css";
import Modal from "react-modal";
import React, { useState } from "react";
import { Link } from "react-router-dom";

var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });


export const ForumCard = (props) => {
    const {
      about,
      addForum,
      canEdit,
      currentUserId,
      deleteForum,
      forum,
      forum_name, 
      key,
      members_no, 
      updateForum,
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    return (
      <>
        <div className="forum-card-container d-flex flex-column align-items-end col-2">
          <Link to={"/forum/:id"} className="forum-card d-flex flex-row justify-content-center align-items-center">
            <div className="forum_info d-flex flex-column p-3">
              <div className="forum_name">{forum_name}</div>
              <div className="about-forum">
                {about}
              </div>
              <div className="members_no">
                Miembros: {members_no} 
              </div>
            </div>
          </Link>
          {canEdit &&
            <div className="forum-options">
            <Link to="">
              <i className="bi bi-folder-minus edit-forum"></i>
            </Link>
            <Link to="" onClick={deleteForum}>
              <i className="bi bi-trash-fill edit-forum" ></i>
            </Link>
          </div>
          }
        </div>
      </>
    );
  };


export default ForumCard;