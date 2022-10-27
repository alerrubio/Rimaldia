import "./css/ProfileBanner.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ProfileBanner(props) {
  const {username, user_full_name,role} = props;
  return (
    <>
        <div className="user-information col-12 d-flex flex-row justify-content-center">
            <img src={PP} alt="" className="pp"/>
            <div className="text-user-box d-flex flex-column justify-content-center align-items-center">
                <div className="username-text">{username}</div>
                <div className="userfullname-text">{user_full_name}</div>
                <div className="profile-user-role">{role}</div>
            </div>
        </div>
    </>
  )
}

export default ProfileBanner