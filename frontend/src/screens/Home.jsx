import "./css/Home.css";
import { NewRhyme } from "../components/NewRhyme";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function Home() {

  return (
    <>
    <NewRhyme>
        <UserInfo user_name="Ricardo Poetiso" time={date} profile_picture={PP}></UserInfo>
    </NewRhyme>
    <Post>
      <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
    </Post>
    <Post>
      <UserInfo user_name="Ricardo Poetiso" time={date} profile_picture={PP}></UserInfo>
    </Post>
    </>
  )
}

export default Home