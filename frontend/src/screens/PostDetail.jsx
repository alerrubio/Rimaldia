import Comments from "./comments/Comments";
import "./css/PostDetail.css";
import "./css/comments.css";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP2 from"/img/pp2.png";
import Background from "/img/LOGIN.png";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function PostDetail() {

  return (
    <>
        <div className="post-detail-box d-flex flex-row bordes">
            <div className="post-box col-6 d-flex flex-column justify-content-center">
                <Post visible_rows="12" post_detail>
                  <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
                </Post>
            </div>
            <div className="comments-box col-6 d-flex flex-column justify-content-center ms-4">
              <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"/>
            </div>
        </div>
    </>
  )
}

export default PostDetail