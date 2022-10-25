import React, { useState } from "react";
import "./css/NewRhyme.css";
import PP from"/img/pp-example.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";

const styles = {
    menu: base => ({
      ...base,
      marginTop: 0
    })
  };
  
export const NewRhyme = (props) => {
    const {children, title, user_name, time, post_to} = props;
    return (
      <>
        {children}
        <div className="Post_Input_Contenedor p-4">
          <textarea row="3" placeholder="Cual será la rima de hoy?"></textarea>

          <div className="Links_post d-flex flex-row justify-content-between">
            
            <a href="#" className="col-2"> 
                <i className="bi bi-camera-fill"></i> 
                Agregar fotos
            </a>

            <div className="categories-dd d-flex justify-content-center col-6">
                <DropdownButton id="dropdown-basic-button" className="" variant="peach" title="Seleccione la categoría">
                    <Dropdown.Item href="#">Romántico</Dropdown.Item>
                    <Dropdown.Item href="#">Verso Libre</Dropdown.Item>
                    <Dropdown.Item href="#">Tristeza</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Motivacional</Dropdown.Item>
                </DropdownButton>
            </div>

            <a href="#" className="col-2">
                <i className="bi bi-pencil-square"></i>
                Publicar rima {post_to}
            </a>
          </div>
        </div>
      </>
    );
  };


export default NewRhyme;