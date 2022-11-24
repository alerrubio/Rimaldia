import "./css/ForumInput.css";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { getThemes, createTheme } from '../services/themesService';
import { Navigate } from "react-router-dom";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

const themeTemp = {
  name: "",
  background_color: "",
  variation_1: "",
  variation_2: "",
  variation_3: ""
};

function ForumInput(props) {
  const {forum_name, members_no, about} = props;
  const [theme, setTheme] = useState(themeTemp);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const [success, setSuccess] = useState(false);

  const newTheme = async (event) => {
    try{
      event.preventDefault();
      //const res = await createAuth0User(user);  Validar que no exista el nombre del tema
      const res = 200;
      if (res == 404){
        setErrorMessage(errorMessage => "El correo ya fue registrado anteriormente.")
        setError(error => !error);
      }
      else{
        setError(error => error);

        let dbTheme = {
          name: theme.name,
          background_color: theme.background_color,
          variation_1: theme.variation_1,
          variation_2: theme.variation_2,
          variation_3: theme.variation_3
        }       

        const dbRes = await createTheme(dbTheme);

        //console.log("Service response: " +  res);
        console.log("DB response: " +  dbRes);
        //console.log(theme);

        setSuccess(true);
      }
    }
    catch(err){
      setErrorMessage(errorMessage => "No fue posible cargar los temas.")
      setError(error => !error);
    }
    
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setTheme({
      ...theme,
      [name]: value,
    });
    console.log(theme);
  };

  if(success){
    return <Navigate to="/SuperAdmin/verTemas" replace />
  }

  return (
    <>
        <div className="col-10 d-flex flex-row flex-wrap justify-content-center">
        <Form id="theme_info" className="container col-10 py-5 my-0 justify-content-center align-items-around" onSubmit={newTheme}>
                <div>
                  <label for="name">Nombre del tema</label>
                  <div className="input-group mb-3">
                    <input onChange={handleChange} type="text" className="form-control email-input" name="name" placeholder="''El cielo, mi desvelo''" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color base</label>
                  <div className="input-group mb-3">
                    <input onChange={handleChange} type="color" className="form-control password-input" name="background_color" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color de fondo: Variante 1</label>
                  <div className="input-group mb-3">
                    <input onChange={handleChange} type="color" className="form-control password-input" name="variation_1" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color de fondo: Variante 2</label>
                  <div className="input-group mb-3">
                    <input onChange={handleChange} type="color" className="form-control password-input" name="variation_2" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color de fondo: Variante 3</label>
                  <div className="input-group mb-3">
                    <input onChange={handleChange} type="color" className="form-control password-input" name="variation_3" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <Button form="theme_info" type="submit" variant="peach" className="btn-login btn login col-12">
                    Crear
                </Button>
              </Form>
        </div>
    </>
  )
}

export default ForumInput