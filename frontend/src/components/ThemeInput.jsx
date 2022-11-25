import "./css/ForumInput.css";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { getThemes, createTheme, editTheme } from '../services/themesService';
import { Navigate } from "react-router-dom";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

const emptyTheme = {
  name: "",
  background_color: "",
  variation_1: "",
  variation_2: "",
  variation_3: ""
};

function ThemeInput(props) {
  const {editing} = props;
  const [theme, setTheme] = useState(emptyTheme);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    if(editing){
      setTheme(editing);
      console.log("Entered edit mode");
    }else{
      setTheme({
        name: "",
        background_color: "#E3C770",
        variation_1: "#FECD70",
        variation_2: "#FFAE6D",
        variation_3: "#F3E0B5"
      });
      console.log("Didn't enter edit mode");
    }
  }, [editing]);

  const newTheme = async (event) => {
    try{
      event.preventDefault();
      //const res = await createAuth0User(user);  Validar que no exista el nombre del tema
      if(theme.name == "" || theme.variation_1 == "" || theme.variation_2 == "" || theme.variation_3 == ""){
        console.log("No deje campos vacíos");
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

  const editThemeFromDb = async () => {
      try{
        event.preventDefault();
      
        setError(error => error);

        await editTheme(editing._id, theme);

        console.log("Tema editado: " + JSON.stringify(theme));

        setSuccess(true);
      }
      catch(err){
        setErrorMessage(errorMessage => "No fue posible editar el tema.")
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
    return <Navigate to="/admin/verTemas" replace />
  }

  return (
    <>
        <div className="col-10 d-flex flex-row flex-wrap justify-content-center">
        <p className="section-title">{editing ? "Editando tema: "+editing.name : "Crear un tema nuevo"}</p>
        <Form id="theme_info" className="container col-10 py-5 my-0 justify-content-center align-items-around" onSubmit={editing? editThemeFromDb : newTheme}>
                <div>
                  <label for="name">Nombre del tema</label>
                  <div className="input-group mb-3">
                    <input value={theme.name} autoComplete="off" onChange={handleChange} type="text" className="form-control email-input" name="name" placeholder="''El cielo, mi desvelo''" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color del fondo</label>
                  <div className="input-group mb-3">
                    <input value={theme.background_color} onChange={handleChange} type="color" className="form-control password-input" name="background_color" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color del texto</label>
                  <div className="input-group mb-3">
                    <input value={theme.variation_1} onChange={handleChange} type="color" className="form-control password-input" name="variation_1" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color secundario</label>
                  <div className="input-group mb-3">
                    <input value={theme.variation_2} onChange={handleChange} type="color" className="form-control password-input" name="variation_2" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color de botones</label>
                  <div className="input-group mb-3">
                    <input value={theme.variation_3} onChange={handleChange} type="color" className="form-control password-input" name="variation_3" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <Button form="theme_info" type="submit" variant="peach" className="btn-login btn login col-12">
                  {editing ? "Guardar cambios" : "Crear tema"}
                </Button>
              </Form>
        </div>
    </>
  )
}

export default ThemeInput