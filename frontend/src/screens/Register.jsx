import "./css/Register.css";
import React, { useState } from "react";
import Background from "/img/REGISTRO.png";
import Logo from "/img/logo.png";
import { useLocation, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import createUser from '../services/usersService.js';
import createAuth0User from '../services/auth0/signUpService.js';
import { useAuth0 } from "@auth0/auth0-react";

import "../assets/sb.css";
const userInit = {
  role: "63689cdd54a0ef75a20761ae",
  connection: "Username-Password-Authentication",
};

const Register = () => {
  const [user, setUser] = useState(userInit);

  const location = useLocation();
  
  const newUser = async (event) => {
    event.preventDefault();
    const res = await createAuth0User(user);
    console.log("aaaa " +  res);
    console.log(user);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };
  return (
    <div>
      <img className="background" src={ Background } />
      <Link to={"/"}>
        <img className="logo-box" src={ Logo } />
      </Link>
      <div className="container content  d-flex flex-row justify-content-around align-items-center">
      <div className="row col-4">
          <div className="registerBanner">
            ¿YA TIENES CUENTA?
          </div>
          <div>
            <Link to="/login">
              <Button variant="peach" className="btn-register register">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
        <div className="row register-box col-9 justify-content-center align-items-center">
          <div className="row col-12 login-box_R sb">
            <Form id="user_info" onSubmit={newUser}>
              <div>
                <label for="avatar">Imagen de perfil</label>
                <input type="file"
                  id="avatar" name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleChange} />
              </div>
              <div>
                <label for="email">Correo electrónico</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-envelope-fill"></i>
                  <input onChange={handleChange} type="email" className="form-control email-input" name="email" placeholder="Correo electrónico" required />
                </div>
              
              </div>
              <div>
                <label for="given_name">Nombre(s)</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input onChange={handleChange} type="text" className="form-control first-name-input" name="given_name" placeholder="Nombre" required/>
                </div>
              </div>
              <div>
                <label for="family_name">Apellido paterno</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input onChange={handleChange} type="text" className="form-control last-name-input" name="family_name" placeholder="Apellido paterno" required/>
                </div>
              </div>
              <div>
                <label for="username">Nombre de usuario</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input onChange={handleChange} type="text" className="form-control username-input" name="username" placeholder="Nombre de usuario" required/>
                </div>
              </div>
              <div>
                <label for="password">Contraseña</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-key-fill"></i>
                  <input onChange={handleChange} type="password" className="form-control password-input" name="password" required/>
                </div>
              </div>
              <div>
                <label for="confirm-password">Confirmar contraseña</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-key-fill"></i>
                  <input type="password" className="form-control confirm-password-input" name="confirm-password" required/>
                </div>
              </div>
            </Form>
          </div>
          <div className="row col-12 btn-registro justify-content-center align-items-center">
            <div className="col-4">
              <Button form="user_info" type="submit" variant="peach" className="btn btn-register">
                  Registrarse
              </Button>  
            </div>
          </div>
        </div>
        
      </div>
    </div>

  )
}
export default Register