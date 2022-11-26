import "./css/PostDetail.css";
import Comments from "../components/Comments";
import Post from "../components/Post";
import UserInfo from "../components/UserInfo";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/PostService";
import { getPostTags } from "../services/TagService";
import React, { useState, useEffect } from "react";
import { longDate } from "../utils/dateFormatter";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var datedb;
export const PostDetail = (props) => {
  const {id} = useParams();
  const { user } = useAuth0();
  const [post, setPost] = useState({});
  var tagIds = [];
  const [tags, settags] = useState([]);
  var tagTitles = []
  
  useEffect(() => {
    const fetchdata = async () => {
      const res = await getPost(id);
      if (res.status == 200){
        setPost(res.data);
        const tempTags = await getPostTags(id, {tags: res.data.tag_id});
        settags(tempTags.data);
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if (post){
      datedb = longDate(post.createdAt);
      console.log(tagIds);
      console.log(tags);
      if (tags.length > 0){
        tags.forEach(element => {
          tagTitles.push({tag_name: element.name})
        });
      }
      
      console.log(tagTitles);
    }
  }, [tags, post]);

  return (
    <>
        <div className="post-detail-box d-flex flex-column justify-content-center">
            <Post visible_rows="5" tags_list={tagTitles} post_detail text={post.text} commentsCount="FALTA NUM COMMENTS" likesCount="FALTA NUM LIKES">
              <UserInfo user_name={`${post.user_name}`} 
                time={datedb} 
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