import React, { useState } from "react";
import "./css/UserNavigationBar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";
  
export const Post = (props) => {
    const {children, title, user_name, time} = props;
    return (
      <>
        <div className="container user-nav-bar d-flex flex-row">
            <Link to={"/misforos"} className="col-3 forum-tab d-flex justify-content-center">
                <div className="">
                    MIS FOROS
                </div>
            </Link>
            <Link to={"../misforos"} className="col-3 forum-tab d-flex justify-content-center">
                <div className="">
                    TODOS LOS FOROS
                </div>
            </Link>
        </div>
      </>
    );
  };


export default Post;