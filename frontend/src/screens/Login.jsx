import React from "react";
import Background from "/img/LOGIN.png";
import Logo from "/img/logo.png";
import { useLocation, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { useAuth0 } from "@auth0/auth0-react";
import "./css/Login.css";

function useradmin() {
  // Get the checkbox
  var checkBox = document.getElementById("cbox1");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

const Login = () => {
  const location = useLocation();
  const { loginWithRedirect } = useAuth0();
  return (
    
    <div>
      <img className="background" src={ Background } />
      <Link to={"/"}>
        <img className="logo-box" src={ Logo } />
      </Link>
      <div className="container content d-flex flex-row justify-content-around align-items-center">
        <div className="row login-box col-7 justify-content-center align-items-center">
          <h1 className="registerBanner">¿Qué es Rimaldía?</h1>
          <div className="flex-wrap description-rimaldia">
            Rimaldía es una red social en la cual los usuarios amantes de la poesía pueden compartir sus creaciones en línea, participar en foros de discusión de temas relevantes en el mundo de la poesía, guardar sus poemas o rimas favoritos y más.
          </div>
          {/*<Form className="container justify-content-center align-items-around">
            <div>
              <label for="email">Correo electrónico</label>
              <div className="input-group mb-3">
                <i className="input-group-text bi bi-envelope-fill"></i>
                <input type="email" className="form-control email-input" name="email" placeholder="Correo electrónico" required/>
              </div>
            </div>
            <div>
              <label for="password">Contraseña</label>
              <div className="input-group mb-3">
                <i className="input-group-text bi bi-key-fill"></i>
                <input type="password" className="form-control password-input" name="password" placeholder="Contraseña" required/>
              </div>
            </div>
            
            <Link style={{fontSize: "18px"}} to="/SuperAdmin">
            <div><br /><br /><center><label><input style={{width: "14px", height: "14px"}} type="checkbox" id="cbox1" value="first_checkbox"/> Soy Administrador</label></center></div>
            </Link>
          </Form>
          {/*<div className="row col-12 forgot-pwd justify-content-end">
            ¿Olvidó su contraseña?
          </div>
          <input type="submit" value="Iniciar Sesion" href="/post"/>
          <div className="iniSec">
            <a href="/">Iniciar Sesion</a>
          </div>     */}
          <Button variant="peach" onClick={() => loginWithRedirect()} /*onClick={event =>  window.location.href='/'} */ className="btn-login btn login col-12">
              Entrar
          </Button>
        </div>
        
        <div className="row Regi col-5">
          <div className="registerBanner">
            ¿NO TIENES CUENTA?
          </div>
          <div>
            <Link to="/register">
              <Button variant="peach" className="register">
                Registrarse
              </Button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login