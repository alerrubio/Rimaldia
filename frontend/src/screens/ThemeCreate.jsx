import "./css/ThemeCreate.css";
import { useState, useEffect } from "react";
import ThemeInput from "../components/ThemeInput";
import UserNavigationBar from "../components/UserNavigationBar";
import { useLocation, Link } from "react-router-dom";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ThemeCreate(props) {
  const [edTheme, setEdTheme] = useState({});

  const location = useLocation()
  //let editThemeLocal = null;

  const getState = () => {
    if(location.state){
      const {editTheme} = location.state;
      //editThemeLocal = editTheme;
      setEdTheme(editTheme);
    }else{
      setEdTheme(null);
    }
  }
    
  const getMode = async () => {
    const data = await getState();      
  }

  useEffect(()=>{
    getMode();
  }, edTheme);
 
  return (
    <>
        <div className="mt-3"></div>
        <UserNavigationBar tabs={[{name: 'Ver temas', link: 'admin/verTemas'}, {name: 'Crear tema', link: 'admin/crearTema'}, {name: 'Regresar', link: 'admin', color:'peach'}]} />
        <div className="forum-cards-container d-flex flex-column align-items-center">
            <ThemeInput editing={edTheme}/>
        </div>
    </>
  )
}

export default ThemeCreate