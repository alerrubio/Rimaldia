import "../screens/css/Register.css";
import "./css/SideBar.css";
import { useLocation, Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../assets/sb.css";

function EditUser(){
  return (
    <>
      <div className="col-8 edit-box_R sb">
            <div className="edit-user-content">
            <Form>
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
                <label for="mlast-name">Apellido materno</label>
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
              <div className="pb-3 col-12 d-flex flex-row justify-content-end">
                <Button variant="peach" className="col-4 p-2">
                  Guardar
                </Button>
              </div>
            </Form>
          </div>
          
        </div>
    </>

  )
}
export default EditUser