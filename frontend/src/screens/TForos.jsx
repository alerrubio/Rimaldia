import "./css/TForos.css";
import Post from "./Post";
import UserInfo from "../components/UserInfo";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function TForos() {

  return (
    <>
    <div className="Fondito_Todos_Foros">
      <div className="Grupo_Foros2">
        <div className="Color_Foro2">
          <div className="mis_foros2">
            <a href={`/post`}>MIS FOROS</a>
          </div>
          <div className="todos_foros2">
            <a href="#">TODOS LOS FOROS</a>
          </div>
        </div>
      </div>
    </div>
    <Post>
      <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
    </Post>
    <Post>
      <UserInfo user_name="Ricardo Poetiso" time={datetime} profile_picture={PP}></UserInfo>
    </Post>
    </>
    
  )
}

export default TForos