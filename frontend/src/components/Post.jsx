import React, { useState } from "react";
import "./css/Post.css";
import TagsBox from "./TagsBox";
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";

export const Post = (props) => {
    const {children, visible_rows, post_detail} = props;
    let tags_and_statistics_box = [];

    if (post_detail){
      tags_and_statistics_box.push(
        <div className="post-row d-flex flex-row justify-content-between ">
          <div className="hashtags d-flex flex-row justify-content-start align-items-center flex-wrap">
              <TagsBox tags={[{tag_name: "Romance"},
                              {tag_name: "Rimaldía"},
                              {tag_name: "Tristeza"},
                              {tag_name: "Motivacional"},
                              {tag_name: "Verso"},
                              {tag_name: "Libre"}]} edit></TagsBox>
          </div>
        </div>
      );
      tags_and_statistics_box.push(
        <div className="Actividad-iconos d-flex flex-row justify-content-end">
            <div><i className="bi bi-hand-thumbs-up-fill"></i>12</div>
            <div><i className="bi bi-chat-left-fill"></i>5</div>
            <div><i className="bi bi-share-fill"></i>2</div>
          </div>
      );
    }
    else{
      tags_and_statistics_box.push(
        <div className="post-row d-flex flex-row justify-content-between ">
          <div className="hashtags d-flex flex-row justify-content-around align-items-center flex-wrap">
              <TagsBox tags={[{tag_name: "Romance"},
                              {tag_name: "Rimaldía"},
                              {tag_name: "Tristeza"},
                              {tag_name: "Motivacional"},
                              {tag_name: "Verso"},
                              {tag_name: "Libre"}]} edit></TagsBox>
          </div>
          <div className="Actividad-iconos">
            <div><i className="bi bi-hand-thumbs-up-fill"></i>12</div>
            <div><i className="bi bi-chat-left-fill"></i>5</div>
            <div><i className="bi bi-share-fill"></i>2</div>
          </div>
        </div>
      );
    }
    
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

            {tags_and_statistics_box}
            
          </div>
        </div>
      </>
    );
  };


export default Post;