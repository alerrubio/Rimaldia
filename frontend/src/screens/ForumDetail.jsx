import "./css/ForumDetail.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Background from "/img/LOGIN.png"
import ForumBanner from "../components/ForumBanner";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ForumDetail(props) {
  const {forum_name, about, members_no} = props;
  console.log(props.state);
  return (
    <>
    <img src={Background} className="bg-img" alt="" />
        <div className="profile-page-content d-flex flex-column align-items-center">
          <ForumBanner forum_name={forum_name} 
                        about={about} 
                        members_no={members_no}/>
          <div className="posts-content col-12 d-flex flex-column justify-content-center">
            <NewRhyme post_to={`en ${forum_name}`}/>
            <Post>
              <UserInfo user_name={props.username} 
                        time={date} 
                        profile_picture={PP}></UserInfo>
            </Post>
            <Post>
              <UserInfo user_name={props.username} 
                        time={date} 
                        profile_picture={PP}></UserInfo>
            </Post>
            <Post>
              <UserInfo user_name={props.username} 
                        time={date} 
                        profile_picture={PP}></UserInfo>
            </Post>
          </div>
        </div>
        
    </>
  )
}

export default ForumDetail