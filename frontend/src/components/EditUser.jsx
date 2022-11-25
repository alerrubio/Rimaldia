import "../assets/sb.css";
import "../screens/css/Register.css";
import "./css/SideBar.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth0 } from "@auth0/auth0-react";
import { editUser as editUserService } from '../services/usersService.js';
import React, { useState } from "react";

const userInit = {
  connection: "Username-Password-Authentication",
};

const pwdInit = {
};

function EditUser(props){
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { email, given_name, family_name, username,} = props;
  const [editUser, seteditUser] = useState(userInit);
  const [pwd, setpwd] = useState(pwdInit);
  const [error, setError] = useState(false);
  const [editMode, seteditMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const id = JSON.parse(localStorage.getItem('user')).user_id;
  const handlePwdChange = (event) => {
    const { name, value } = event.target;

    setpwd({
      ...pwd,
      [name]: value,
    });

    console.log(pwd);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    seteditUser({
      ...editUser,
      "user_id": id,
      [name]: value,
    });
    console.log(editUser);
  };

  const editUserEvent = async (event) => {
    try{
      event.preventDefault();
      
      console.log(editUser);
      const res = await editUserService(editUser);
      console.log(res);
    }
    catch(err){
      setErrorMessage(errorMessage => "Algo salió mal.")
      setError(error => !error);
      console.log(err);
    }
    
  }

  return (
    <>
      <div className="col-8 edit-box_R sb">
            <div className="edit-user-content">
            <Form form="editUserForm" onSubmit={editUserEvent}>
              <div>
                <label for="email">Correo electrónico</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-envelope-fill"></i>
                  <input type="email" 
                    className="form-control email-input" 
                    name="email" 
                    placeholder={email} 
                    readOnly />
                </div>  
              </div>
              <div>
                <label for="first-name">Nombre(s)</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text"
                    onChange={handleChange}
                    className="form-control first-name-input" 
                    name="first-name" 
                    placeholder={given_name}
                    readOnly={!editMode}
                    />
                </div>
              </div>
              <div>
                <label for="last-name">Apellido paterno</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text" 
                    onChange={handleChange}
                    className="form-control last-name-input" 
                    name="last-name" 
                    placeholder={family_name}
                    readOnly={!editMode}
                    />
                </div>
              </div>
              <div>
                <label for="username">Nombre de usuario</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text"
                    onChange={handleChange}
                    className="form-control username-input" 
                    name="username" 
                    placeholder={username}
                    readOnly={!editMode}
                    />
                </div>
              </div>
              {editMode &&
                <div>
                  <label for="password">Contraseña</label>
                  <div className="input-group mb-3">
                    <i className="input-group-text bi bi-key-fill"></i>
                    <input onChange={handlePwdChange} 
                      title="8 caracteres o más y al menos una mayúscula, una minúscula, un dígito" 
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                      type="password" 
                      className="form-control password-input" 
                      name="password"
                      required/>
                  </div>
                </div>
              }
              <div className="pb-3 col-12 d-flex flex-row justify-content-end">
                {!editMode &&
                  <Button variant="peach" onClick={() => seteditMode(true)} className="col-4 p-2">
                    Editar
                  </Button>
                }
                {editMode &&
                  <Button variant="peach" type="submit" onClick={() => editUserEvent()}className="col-4 p-2">
                    Guardar
                  </Button>
                }
              </div>
            </Form>
          </div>
          {error && 
                <span className="error">{errorMessage}</span>}
        </div>
    </>

  )
}
export default EditUser