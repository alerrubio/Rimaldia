import "./css/PostDetail.css";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
import Background from "/img/LOGIN.png"
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function PostDetail() {

  return (
    <>
        <img src={Background} className="bg-img" alt="" />
        <div className="post-detail-box d-flex flex-row">
            <div className="post-box col-6 d-flex flex-column justify-content-center">
                <Post visible_rows="12">
                <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
                </Post>
            </div>
            <div className="comments-box col-6 d-flex flex-column justify-content-center ms-4">
                Aquí va la caja de comentarios
            </div>
        </div>
    </>
  )
}

export default PostDetail