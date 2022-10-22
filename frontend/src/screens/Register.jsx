import "./Register.css";
import Background from "/img/REGISTRO.png";
import Logo from "/img/logo.png";
import { useLocation, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const Register = () => {
  const location = useLocation();
  return (
    <div>
      <img className="background" src={ Background } />
      <Link to={"/"}>
        <img className="logo" src={ Logo } />
      </Link>
      <div className="container content d-flex flex-row justify-content-around align-items-center bordes">
        <div className="row Iniciar col-3">
          <a href="/Login">Iniciar Sesion</a>
        </div>
        <div className="row login-box_R col-9 justify-content-center align-items-center bordes">
          <label for="username"></label>
          <input type="text" placeholder=" Usuario" />

          <label for="Email"></label>
          <input type="text" placeholder=" Correo Electronico" />

          <label for="password"></label>
          <input type="password" placeholder=" Contraseña" />

          <label for="password"></label>
          <input type="password" placeholder=" Repetir Contraseña" />

          {/*<input type="submit" value="Iniciar Sesion" href="/post"/>*/}
          <div className="Registrar">
            <a href="/">Registrar</a>
          </div>     

          {/*<a href="/post">Olvidó su contraseña?</a>*/}

        </div>
      </div>
    </div>

  )
}
export default Register