import "./css/Settings.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import { Navigate } from "react-router-dom";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png"
import ThemeSettings from "../components/ThemeSet";
import EditUser from "../components/EditUser";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "/img/logo.png";


const Settings = (props) => {
  const {username, user_full_name, role} = props;
  const { user, isLoading, isAuthenticated } = useAuth0();

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

  if (!isAuthenticated){
    return <Navigate to="/login" replace />
  }
  
  return (
    <>
      <img src={Background} className="bg-img" alt="" />
      <NavBar title="Rimaldía" 
              nav_bar_alignment="between" 
              logo>
          <MenuContent username={user.nickname}/>
      </NavBar>
      <div className="settings-page-content">
        <ProfileBanner username={user.nickname} 
          user_full_name={user.given_name + " " + user.family_name} 
          role={props.role}
          picture={user.picture}>
          <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="Seleccione el tema">
              <Dropdown.Item href="#">Luz</Dropdown.Item>
              <Dropdown.Item href="#">Nocturno</Dropdown.Item>
              <Dropdown.Item href="#">Calido</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Frío</Dropdown.Item>
          </DropdownButton>
        </ProfileBanner>
        
        <div className="settings-content col-10 d-flex flex-row justify-content-center">
          <EditUser email={user.email}
            given_name={user.given_name}
            family_name={user.family_name}
            username={user.nickname}
            password={user.password}></EditUser>
        </div>
      </div>
    </>
  )

}
export default Settings