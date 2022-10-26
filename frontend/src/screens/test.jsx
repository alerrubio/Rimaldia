import "./css/Home.css";
import { NewRhyme } from "../components/NewRhyme";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP from"/img/pp-example.jpg";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
function Home() {

  return (
    <>
        <NewRhyme>
            <UserInfo user_name="Ricardo Poetiso" time={date} profile_picture={PP}></UserInfo>
        </NewRhyme>
        <Post>
            <UserInfo user_name="Ricardo Poetiso" time={date} profile_picture={PP}></UserInfo>
        </Post>
    </>
  )
}

export default Home