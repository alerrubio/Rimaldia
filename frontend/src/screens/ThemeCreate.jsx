import "./css/ThemeCreate.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png"
import ThemeInput from "../components/ThemeInput";
import UserNavigationBar from "../components/UserNavigationBar";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ThemeCreate(props) {
  const {forum_name, about, members_no} = props;
  console.log(props.state);
  return (
    <>
        <div className="mt-3"></div>
        <UserNavigationBar tabs={[{name: 'Crear tema', link: 'crearforo'}, {name: 'Regresar', link: 'misforos', color:'peach'}]} />
        <div className="forum-cards-container d-flex flex-column align-items-center">
            <ThemeInput />        
        </div>
    </>
  )
}

export default ThemeCreate