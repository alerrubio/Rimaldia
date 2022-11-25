import "./css/PostDetail.css";
import Comments from "../components/Comments";
import Post from "../components/Post";
import UserInfo from "../components/UserInfo";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/PostService";
import React, { useState, useEffect } from "react";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

export const PostDetail = (props) => {
  const {id} = useParams();
  const { user } = useAuth0();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const res = await getPost(id);
      setPost(res.data);
      console.log(res);
    };
    fetchdata();
  }, []);

  return (
    <>
        <div className="post-detail-box d-flex flex-column justify-content-center">
            <Post visible_rows="5" post_detail text={post.text} commentsCount="FALTA NUM COMMENTS" likesCount="FALTA NUM LIKES">
              <UserInfo user_name={`${post.user_name}`} 
                time={post.createdAt} 
                profile_picture={post.user_picture}></UserInfo>
            </Post>
            <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId={user.sub.substring(6)}
              post_id={id}/>
        </div>
    </>
  )
}

export default PostDetail