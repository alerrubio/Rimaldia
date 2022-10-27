import Comments from "../components/Comments";
import "./css/PostDetail.css";
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
        <div className="post-detail-box d-flex flex-column justify-content-center">
            <Post visible_rows="5" post_detail>
              <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
            </Post>
            <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"/>
        </div>
    </>
  )
}

export default PostDetail