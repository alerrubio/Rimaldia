import React, { useState } from "react";
import "./css/Post.css";
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";

export const Post = (props) => {
    const {children, title, user_name, time, visible_rows} = props;
    return (
      <>
        <div className="post-container">
          <Link to={"/post/:id"}>
            {children}
          </Link>
          <div className="Contenido_Publicado">
            <textarea rows={visible_rows} className="post-text" readOnly>
            El amor no se compra, 
            no necesitas dinero lo que realmente necesitas
            es valor para decirle te quiero.</textarea>

            <div className="post-row d-flex flex-row justify-content-between ">
              <div className="hashtags">
                <a href="#">#Rimaldia</a>
              </div>
              <div className="Actividad-iconos ">
                <div><i className="bi bi-hand-thumbs-up-fill"></i>12</div>
                <div><i className="bi bi-chat-left-fill"></i>5</div>
                <div><i className="bi bi-share-fill"></i>2</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };


export default Post;