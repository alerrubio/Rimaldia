import "./css/Register.css";
import Background from "/img/REGISTRO.png";
import Logo from "/img/logo.png";
import { useLocation, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const Register = () => {
  const location = useLocation();
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
          <div className="row col-12 login-box_R">
            <Form >
              <div>
                <label for="email">Correo electrónico</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-envelope-fill"></i>
                  <input type="email" className="form-control email-input" name="email" placeholder="Correo electrónico" required />
                </div>
              
              </div>
              <div>
                <label for="first-name">Nombre(s)</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text" className="form-control first-name-input" name="first-name" placeholder="Nombre" required/>
                </div>
              </div>
              <div>
                <label for="last-name">Apellido paterno</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text" className="form-control last-name-input" name="last-name" placeholder="Apellido paterno" required/>
                </div>
              </div>
              <div>
                <label for="mlast-name">Confirmar contraseña</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text" className="form-control mlast-name-input" name="mlast-name" placeholder="Apellido materno" required/>
                </div>
              </div>
              <div>
                <label for="username">Nombre de usuario</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text" className="form-control username-input" name="username" placeholder="Nombre de usuario" required/>
                </div>
              </div>
              <div>
                <label for="password">Contraseña</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-key-fill"></i>
                  <input type="password" className="form-control password-input" name="password" required/>
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
              <Link to="/login">
                <Button variant="peach" className="btn btn-register">
                    Registrarse
                </Button>  
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  )
}
export default Register