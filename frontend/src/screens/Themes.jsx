import "./css/ThemeCreate.css";
//import ThemeList from "../components/ThemeList";
import { useState, useEffect } from "react";
import UserNavigationBar from "../components/UserNavigationBar";
import ThemeTable from "../components/ThemeTable";
import { getThemes } from '../services/themesService';

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function Themes(props) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const [themes, setThemes] = useState([]);
    
  const getThemesFromDb = async (event) => {
    try{
      
      setError(error => error);     

      const dbRes = await getThemes();

      //console.log("DB response: " +  JSON.stringify(dbRes));

      console.log("Temas cargados con éxito.");

      setThemes(dbRes);
      
    }
    catch(err){
      setErrorMessage(errorMessage => "No fue posible cargar los temas.")
      setError(error => !error);
    }
    
  }

  useEffect(()=>{
    getThemesFromDb();
  }, []);

  return (
    <>
        <div className="mt-3"></div>
        <UserNavigationBar tabs={[{name: 'Ver temas', link: 'admin/verTemas', color:'themedSecondary themedText'}, {name: 'Crear tema', link: 'admin/crearTema', color:'themedSecondary themedText'}, {name: 'Regresar', link: 'admin', color:'themedButton themedText'}]} />
        <div className="themedSecondary record-container">
          <ThemeTable headers={['Nombre', 'Fondo', 'Texto', 'Secundario', 'Botones']} data={themes} />  
        </div>
    </>
  )
}

export default Themes