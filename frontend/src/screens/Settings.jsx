import "./css/UserProfile.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png"
import ThemeSettings from "../components/ThemeSet";
import EditUser from "../components/EditUser";

const Settings = () => {
  
  return (
    <>
    <img src={Background} className="bg-img" alt="" />
        <NavBar title="Rimaldía" 
                username="rickypoeta" 
                nav_bar_alignment="between" 
                logo>
            <MenuContent username="rickypoeta"/>
        </NavBar>
        <div className="profile-page-content mx-5">
        <h2>Configuración</h2>
        <ThemeSettings></ThemeSettings>
        <EditUser></EditUser>
        </div>
    </>
  )

}
export default Settings