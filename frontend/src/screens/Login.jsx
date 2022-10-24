
import Background from "/img/LOGIN.png";
import Logo from "/img/logo.png";
import { useLocation, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import "./css/Login.css";

const Login = () => {
  const location = useLocation();
  
  return (
    
    <div>
      <img className="background" src={ Background } />
      <Link to={"/"}>
        <img className="logo-box" src={ Logo } />
      </Link>
      <div className="container content d-flex flex-row justify-content-around align-items-center">
        <div className="row login-box col-7 justify-content-center align-items-center">
          <Form className="container justify-content-center align-items-around">
            <div>
              <label for="email">Correo electrónico</label>
              <div class="input-group mb-3">
                <i class="input-group-text bi bi-envelope-fill"></i>
                <input type="email" className="form-control email-input" name="email" placeholder="Correo electrónico" required/>
              </div>
            </div>
            <div>
              <label for="password">Contraseña</label>
              <div class="input-group mb-3">
                <i class="input-group-text bi bi-key-fill"></i>
                <input type="password" className="form-control password-input" name="password" placeholder="Contraseña" required/>
              </div>
            </div>
            <Button variant="peach" onClick={event =>  window.location.href='/'} className="btn-login btn login col-12">
                Entrar
            </Button>
          </Form>
          {/*<div className="row col-12 forgot-pwd justify-content-end">
            ¿Olvidó su contraseña?
          </div>
          <input type="submit" value="Iniciar Sesion" href="/post"/>
          <div className="iniSec">
            <a href="/">Iniciar Sesion</a>
          </div>     */}
          

          {/*<a href="/post">Olvidó su contraseña?</a>*/}

        </div>
        
        <div className="row Regi col-5">
          <div className="registerBanner">
            ¿NO TIENES CUENTA?
          </div>
          <div>
            <Link to="/Register">
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