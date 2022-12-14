import "../assets/sb.css";
import "../screens/css/Register.css";
import "./css/SideBar.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth0 } from "@auth0/auth0-react";
//import { editUser as editUserService } from '../services/usersService.js';
import React, { useState } from "react";
import { editAuthUser } from "../services/auth0/authUserService.js";

const userInit = {
  //connection: "Username-Password-Authentication",
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
      [name]: value,
    });
    console.log(editUser);
  };

  const editUserEvent = async (event) => {
    try{
      event.preventDefault();
      
      console.log("user id " + id);
      //const res = await editUserService(editUser, id);
      const authRes = await editAuthUser(editUser, id);
      console.log(authRes);
      window.location.reload();
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
                <label for="given_name">Nombre(s)</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text"
                    onChange={handleChange}
                    className="form-control first-name-input" 
                    name="given_name" 
                    placeholder={given_name}
                    readOnly={!editMode}
                    />
                </div>
              </div>
              <div>
                <label for="family_name">Apellido paterno</label>
                <div className="input-group mb-3">
                  <i className="input-group-text bi bi-person-fill"></i>
                  <input type="text" 
                    onChange={handleChange}
                    className="form-control last-name-input" 
                    name="family_name" 
                    placeholder={family_name}
                    readOnly={!editMode}
                    />
                </div>
              </div>
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
        </div>
    </>

  )
}
export default EditUser