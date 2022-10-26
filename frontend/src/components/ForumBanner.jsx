import "./css/ForumBanner.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ForumBanner(props) {
  const {forum_name, members_no, about} = props;
  return (
    <>
        <div className="forum-information col-10 d-flex flex-row justify-content-center">
            <div className="forum-detail-box d-flex flex-column justify-content-center align-items-center">
                <div className="forum_name">{forum_name}</div>
                <div className="about_forum">{about}</div>
                <div className="members_no">{members_no}</div>
            </div>
        </div>
    </>
  )
}

export default ForumBanner