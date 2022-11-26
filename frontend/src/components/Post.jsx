import "./css/Post.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState, useEffect } from "react";
import TagsBox from "./TagsBox";
import { useLocation, Link } from "react-router-dom";

export const Post = (props) => {
    const {children, visible_rows, post_detail, text, commentsCount, likesCount, tags_list } = props;
    const [tags, setTags] = useState([]);
    let tags_and_statistics_box = [];
    
    if (post_detail){
      tags_and_statistics_box.push(
        <div className="post-row d-flex flex-row justify-content-between ">
          <div className="hashtags d-flex flex-row justify-content-start align-items-center flex-wrap">
              <TagsBox tags={tags_list} edit></TagsBox>
          </div>
        </div>
      );
    }
    else{
      tags_and_statistics_box.push(
        <div className="post-row d-flex flex-row justify-content-between ">
          <div className="hashtags d-flex flex-row justify-content-around align-items-center flex-wrap">
              <TagsBox tags={tags_list} edit></TagsBox>
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
    
    useEffect(() => {
      setTags(tags_list);
    }, [tags_list]);

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