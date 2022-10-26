import "./css/UserProfile.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png"

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function UserProfile(props) {
  const {username, user_full_name} = props;

  return (
    <>
    <img src={Background} className="bg-img" alt="" />
        <NavBar title="Rimaldía" 
                username="rickypoeta" 
                nav_bar_alignment="between" 
                logo>
            <MenuContent username="rickypoeta"/>
        </NavBar>
        <div className="profile-page-content">
          <ProfileBanner username={props.username} user_full_name={props.user_full_name}/>
          <div className="posts-content col-10 d-flex flex-column justify-content-center">
            <NewRhyme ></NewRhyme>
            <Post>
              <UserInfo user_name={props.username} time={date} profile_picture={PP}></UserInfo>
            </Post>
            <Post>
              <UserInfo user_name={props.username} time={date} profile_picture={PP}></UserInfo>
            </Post>
            <Post>
              <UserInfo user_name={props.username} time={date} profile_picture={PP}></UserInfo>
            </Post>
          </div>
        </div>
        
    </>
  )
}

export default UserProfile