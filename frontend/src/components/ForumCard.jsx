import React, { useState } from "react";
import "./css/ForumCard.css";
import Modal from "react-modal";
import { useLocation, Link } from "react-router-dom";
import UserNavigationBar from "./UserNavigationBar";

Modal.setAppElement("#root");
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });


export const ForumCard = (props) => {
    const {children, forum_name, icon, members_no, about} = props;
    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
      setIsOpen(!isOpen);
    }
    return (
      <>
        <div className="forum-card-container d-flex flex-column align-items-end col-2">
          <Link to={"/forum/:id"} className="forum-card d-flex flex-row justify-content-center align-items-center">
            <i className={`bi ${icon} forums-icon`}></i>
            <div className="forum_info d-flex flex-column">
              <div className="forum_name">{forum_name}</div>
              <div className="about-forum">
                {about}
              </div>
              <div className="members_no">
                Miembros: {members_no} 
              </div>
            </div>
          </Link>
          <div className="forum-options">
            <Link to="">
              <i className="bi bi-folder-minus edit-forum"></i>
            </Link>
            <Link to="" onClick={toggleModal}>
              <i className="bi bi-trash-fill edit-forum" ></i>
            </Link>
          </div>
          
        </div>
        <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      ></Modal>
      </>
    );
  };


export default ForumCard;