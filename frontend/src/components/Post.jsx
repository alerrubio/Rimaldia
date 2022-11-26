import "./css/Post.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from "react";
import TagsBox from "./TagsBox";
import { useLocation, Link } from "react-router-dom";

export const Post = (props) => {
    const {children, visible_rows, post_detail, text, commentsCount, likesCount } = props;
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
            <div><i className="bi bi-hand-thumbs-up-fill"></i>{likesCount}</div>
            <div><i className="bi bi-chat-left-fill"></i>{commentsCount}</div>
            <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="✎">
                <Dropdown.Item href="#">Editar</Dropdown.Item>
                <Dropdown.Item href="#">Eliminar</Dropdown.Item>
            </DropdownButton>
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
            <div><i className="bi bi-save-fill"></i></div>
            <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="✎">
                <Dropdown.Item href="#">Editar</Dropdown.Item>
                <Dropdown.Item href="#">Eliminar</Dropdown.Item>
            </DropdownButton>
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
            <textarea rows={visible_rows} className="post-text" placeholder={text}readOnly></textarea>

            {tags_and_statistics_box}
            
          </div>
        </div>
      </>
    );
  };


export default Post;