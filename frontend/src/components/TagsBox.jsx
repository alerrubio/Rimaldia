import "./css/TagsBox.css";
import PP from"/img/pp-example.jpg";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });


const tagInit = {
  name: ""
};

export const TagsBox = (props) => {
    const {tags, edit, view, addTag} = props;
    const [tag, setTag] = useState(tagInit);
    let tagList = [];
    let enable_input = [];

    const addTagName = (event) => {
        addTag(tag);
    }

    {tags.forEach((tag, index)=>{
      tagList.push(
        <div className="tag-div">#{tag.tag_name}</div>
      );
    })}
    
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setTag({
        ...tag,
        [name]: value,
      });
      console.log(tag);
    };

    useEffect(() => {
      console.log(tags);
    }, [tags]);

    return (
      <>
        <div className="d-flex flex-row flex-wrap">
            {tagList}
        </div>
        {edit === "true" && 
          <div className="w-100">
            <input type="text" name="name" className="tag-input" onChange={handleChange} placeholder="Titulo del tag"/>
            <a href="#" onClick={addTagName} className="new-tag">Agregar tag</a>
          </div>
        }
      </>
    );
  };


export default TagsBox;