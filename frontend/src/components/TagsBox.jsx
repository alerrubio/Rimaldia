import React, { useState } from "react";
import "./css/TagsBox.css";
import PP from"/img/pp-example.jpg";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";

export const TagsBox = (props) => {
    const {tags, edit, view} = props;
    let tagList = [];
    let enable_input = [];
    {/*`/${tab}`*/}

    {tags.forEach((tag, index)=>{
      tagList.push(
        <div className="tag-div">#{tag.tag_name}</div>
      );
    })}
    console.log(edit);
    if (edit === "true"){
        enable_input.push(<input type="text" className="tag-input" placeholder="Nuevo tag"/>);
    }
    
    return (
      <>
        <div className="d-flex flex-row flex-wrap">
            {tagList}
        </div>
        {enable_input}
      </>
    );
  };


export default TagsBox;