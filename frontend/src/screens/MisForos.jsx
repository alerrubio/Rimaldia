import "./css/TForos.css";
import Post from "../components/Post";
import UserInfo from "../components/UserInfo";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
import { NewRhyme } from "../components/NewRhyme";
import UserNavigationBar from "../components/UserNavigationBar";
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var foro = " en Educación poeta"
function MisForos() {

  return (
    <>
    
    <NewRhyme post_to={foro}>
        <UserInfo user_name="Ricardo Poetiso" time={date} profile_picture={PP}></UserInfo>
    </NewRhyme>
    <UserNavigationBar>
    </UserNavigationBar>
    <Post>
      <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
    </Post>
    <Post>
      <UserInfo user_name="Ricardo Poetiso" time={datetime} profile_picture={PP}></UserInfo>
    </Post>
    </>
    
  )
}

export default MisForos