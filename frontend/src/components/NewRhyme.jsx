import React, { useState } from "react";
import "./NewRhyme.css";
import PP from"/img/pp-example.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
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
    const {children, title, user_name, time} = props;
    return (
      <>
        {children}
        <div className="Post_Input_Contenedor pb-3">
          <textarea row="3" placeholder="Cual será la rima de hoy?"></textarea>

          <div className="Links_post d-flex flex-row justify-content-between">
            
            <a href="#" className="col-2"> 
                <i className="bi bi-camera-fill"></i> 
                Agregar fotos
            </a>

            <Dropdown className="categories-dd d-flex justify-content-center col-6">
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Seleccione la categoría
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Romántico</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Verso Libre</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Tristeza</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Motivacional</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <a href="#" className="col-2">
                <i className="bi bi-pencil-square"></i>
                Publicar rima
            </a>
          </div>
        </div>
      </>
    );
  };


export default NewRhyme;