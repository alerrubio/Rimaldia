import "../components/css/loadingComponent.css";
import "./css/ForumCreate.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png"
import ForumInput from "../components/ForumInput";
import UserNavigationBar from "../components/UserNavigationBar";
import { useAuth0 } from "@auth0/auth0-react";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ForumCreate(props) {
  const {forum_name, about, members_no} = props;
  const { user, isLoading } = useAuth0();

  if (isLoading){
    return (
    <>
      <div className="loading d-flex justify-content-center align-items-center">
        <img src={Logo} className="loadingLogo" alt="" />
        <i class="bi bi-gear rotate"></i>
      </div>
    </>
    );
  }

  return (
    <>
        <div className="mt-3"></div>
        <UserNavigationBar tabs={[
          {name: 'Crear foro', link: 'crearforo'}, 
          {name: 'Regresar', link: 'misforos'}]} />
        <div className="forum-cards-container d-flex flex-column align-items-center">
            <ForumInput creator_id={user.sub.substring(6)}/>
        </div>
    </>
  )
}

export default ForumCreate