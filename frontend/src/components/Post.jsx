import React, { useState } from "react";
import "./css/Post.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";
  
export const Post = (props) => {
    const {children, title, user_name, time} = props;
    return (
      <>
        <div className="post-container">
          <div>
            {children}
          </div>
          <div className="Contenido_Publicado">
            <p className="post-text">El <span>amor no se compra</span>, no necesitas dinero lo que realmente
              necesitas es valor para decirle te quiero.<a href="#">#Rimaldia</a></p>

            <div className="post-row">
              <div className="Actividad-iconos">
                <div><i className="bi bi-hand-thumbs-up-fill"></i>12</div>
                <div><i className="bi bi-chat-left-fill"></i>5</div>
                <div><i className="bi bi-share-fill"></i>2</div>
              </div>
              <div className="Perfil-Post-Icono">

              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


export default Post;