import "./css/ForumInput.css";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import { createForum } from '../services/forumService.js';

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

const forumInit = {
  users: [],
};

function ForumInput(props) {
  const { creator_id } = props;
  const [forum, setForum] = useState(forumInit);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");

  const newForum = async (event) => {
    try{
      event.preventDefault();
      const res = await createForum(forum);
      if (window.confirm("Foro creado con éxito")){
        window.location.href = '/misforos';
      }
    }
    catch(err){
      setErrorMessage(errorMessage => "Algo salió mal.")
      setError(error => !error);
      console.log(err);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForum({
      ...forum,
      users: [creator_id, ...forumInit.users],
      creator_id: creator_id,
      [name]: value,
    });
    console.log(forum);
  };

  return (
    <>
        <div className="col-10 d-flex flex-row flex-wrap justify-content-center">
        <Form onSubmit={newForum} 
          className="container col-10 py-5 my-0 justify-content-center align-items-around">
          <div>
            <label for="name">Nombre</label>
            <div className="input-group mb-3">
              <input type="text" 
                onChange={handleChange}
                className="form-control email-input" 
                name="name" 
                placeholder="Nombre del foro"
                required/>
            </div>
          </div>
          <div>
            <label for="description">Descripción</label>
            <div className="input-group mb-3">
              <input type="text" 
                onChange={handleChange}
                className="form-control password-input" 
                name="description" 
                placeholder="Descripción del foro" 
                required/>
            </div>
          </div>
          <Button variant="peach" type="submit" className="btn-login btn login col-12">
              Crear
          </Button>
        </Form>
        {error && 
          <span className="error">{errorMessage}</span>}
        </div>
    </>
  )
}

export default ForumInput