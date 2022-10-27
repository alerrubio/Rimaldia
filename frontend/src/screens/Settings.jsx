import "./css/Settings.css";
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
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Settings = (props) => {
  const {username, user_full_name, role} = props;
  return (
    <>
      <img src={Background} className="bg-img" alt="" />
      <NavBar title="Rimaldía" 
              nav_bar_alignment="between" 
              logo>
          <MenuContent username={props.username}/>
      </NavBar>
      <div className="settings-page-content">
        <ProfileBanner username={props.username} user_full_name={props.user_full_name} role={props.role}>
          <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="Seleccione el tema">
              <Dropdown.Item href="#">Luz</Dropdown.Item>
              <Dropdown.Item href="#">Nocturno</Dropdown.Item>
              <Dropdown.Item href="#">Calido</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Frío</Dropdown.Item>
          </DropdownButton>
        </ProfileBanner>
        
        <div className="settings-content col-10 d-flex flex-row justify-content-center">
          <EditUser></EditUser>
        </div>
      </div>
    </>
  )

}
export default Settings