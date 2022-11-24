import "./css/ThemeCreate.css";
import ThemeInput from "../components/ThemeInput";
import UserNavigationBar from "../components/UserNavigationBar";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ThemeCreate(props) {
  const {forum_name, about, members_no} = props;
  //console.log(props.state);
  return (
    <>
        <div className="mt-3"></div>
        <UserNavigationBar tabs={[{name: 'Ver temas', link: 'SuperAdmin/verTemas'}, {name: 'Crear tema', link: 'SuperAdmin/crearTema'}, {name: 'Regresar', link: 'SuperAdmin', color:'peach'}]} />
        <div className="forum-cards-container d-flex flex-column align-items-center">
            <ThemeInput />        
        </div>
    </>
  )
}

export default ThemeCreate