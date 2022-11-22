import "../assets/sb.css";
import "./css/Register.css";
import Background from "/img/REGISTRO.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Logo from "/img/logo.png";
import React, { useState } from "react";
import createAuth0User from '../services/auth0/signUpService.js';
import createUser from '../services/usersService.js';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const userInit = {
  role: "63689cdd54a0ef75a20761ae",
  connection: "Username-Password-Authentication",
};

const Register = () => {
  const [user, setUser] = useState(userInit);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const { loginWithRedirect } = useAuth0();

  const newUser = async (event) => {
    try{
      event.preventDefault();
      const res = await createAuth0User(user);
      if (res == 404){
        setErrorMessage(errorMessage => "El correo ya fue registrado anteriormente.")
        setError(error => !error);
      }
      else{
        setError(error => error);
        const auth0User = JSON.parse(res.request.response);

        let dbUser = {
          user_id: auth0User._id,
          email: user.email, 
          password: user.password,
          username: user.nickname,
          given_name: user.given_name,
          family_name: user.family_name,
          name: user.given_name + " " + user.family_name,
          role: user.role,
          picture: user.avatar,
        }
        
        const dbRes = await createUser(dbUser);

        console.log("Auth response: " +  res);
        console.log("DB response: " +  dbRes);
        console.log(user);

        loginWithRedirect();

      }
    }
    catch(err){
      setErrorMessage(errorMessage => "El correo ya fue registrado anteriormente.")
      setError(error => !error);
    }
    
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
              {/*<div>
                <label for="avatar">Imagen de perfil</label>
                <input type="file"
                  id="avatar" name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleChange} />
  </div>*/}
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
                  <input onChange={handleChange} title="Solo se aceptan letras." type="text" className="form-control first-name-input" name="given_name" placeholder="Nombre" required/>
                </div>
              </div>
              <div>
                <label for="family_name">Apellido paterno</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input onChange={handleChange} title="Solo se aceptan letras." type="text" className="form-control last-name-input" name="family_name" placeholder="Apellido paterno" required/>
                </div>
              </div>
              <div>
                <label for="nickname">Nombre de usuario</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input onChange={handleChange} type="text" className="form-control username-input" name="nickname" placeholder="Nombre de usuario" required/>
                </div>
              </div>
              <div>
                <label for="password">Contraseña</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-key-fill"></i>
                  <input onChange={handleChange} title="8 caracteres o más y al menos una mayúscula, una minúscula, un dígito" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password" className="form-control password-input" name="password" required/>
                </div>
              </div>
            </Form>
            
          </div>
          {error && 
                <span className="error">{errorMessage}</span>}
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