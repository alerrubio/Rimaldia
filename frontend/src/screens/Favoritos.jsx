import "./css/Favoritos.css";
import { NewRhyme } from "../components/NewRhyme";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import PP2 from"/img/pp2.png";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function Favoritos() {

  return (
    <>
    <div className="header-container-favs col-12 d-flex flex-row justify-content-center">
        <div className="favs-header col-8">
            Mis Publicaciones Favoritas
        </div>
    </div>
    <Post>
      <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
    </Post>
    <Post>
      <UserInfo user_name="Francisca Sueño" time={date} profile_picture={PP}></UserInfo>
    </Post>
    </>
  )
}

export default Favoritos