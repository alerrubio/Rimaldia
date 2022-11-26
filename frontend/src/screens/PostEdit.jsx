import "./css/PostDetail.css";
import "../components/css/Post.css";
import UserInfo from "../components/UserInfo";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { getPost, EditPost } from "../services/PostService";
import { getAllComments } from "../services/CommentsService";
import TagsBox from "../components/TagsBox";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var datedb;
export const PostEdit = (props) => {
  const {id} = useParams();
  const { user } = useAuth0();
  const [post, setPost] = useState({});
  var commentsCount = 0;

  useEffect(() => {
    const fetchdata = async () => {
      const res = await getPost(id);
      setPost(res.data);
      console.log(res);
    };
    fetchdata();
  }, []);

  async function PostEdit() {
    try{
        const dbRes = await EditPost(post._id,post);
        console.log("DB response: " +  dbRes);
    }
    catch(err){
      setErrorMessage(errorMessage => "Hubo un error al querer editar.")
      setError(error => !error);
    }
  }

  const commentsCountFunct = async () => {
    try{
      var commCount = 0;
      const dbRes = await getAllComments(id);
      console.log(dbRes);
      if (dbRes.status == 204){
        commCount = 0;
      }
      else if (dbRes.status == 200){
        commCount = dbRes.data.length;
      }
      return commCount;
    }
    catch(err){
      setErrorMessage(errorMessage => "Hubo un error al querer editar.")
      setError(error => !error);
    }  
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost({
      ...post,
      [name]: value,
    });
  };

  
  return (
    <>
    <br />
        <div className="post-container">
        <UserInfo user_name={post.user_name} 
                time={datedb = new Date(post.createdAt).toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' })}  
                profile_picture={post.user_picture}></UserInfo>
          <div className="Contenido_Publicado">
            <textarea onChange={handleChange} row="5" id="poet_input" className="mt-0 pb-5 w-100" name="text" value={post.text}></textarea>

            <div className="post-row d-flex flex-row justify-content-between ">
          <div className="hashtags d-flex flex-row justify-content-around align-items-center flex-wrap">
              <TagsBox tags={[{tag_name: "Romance"},
                              {tag_name: "Rimaldía"},
                              {tag_name: "Tristeza"},
                              {tag_name: "Motivacional"},
                              {tag_name: "Verso"},
                              {tag_name: "Libre"}]} edit></TagsBox>
          </div>
          <div className="Actividad-iconos">
            <div><i className="bi bi-hand-thumbs-up-fill"></i>12</div>
            <div><i className="bi bi-chat-left-fill"></i>{commentsCount}</div>
            <div><i className="bi bi-save-fill"></i></div>
            <Button variant="peach" onClick={() => PostEdit()} className="mx-4">
                Guardar
            </Button>
          </div>
        </div>
            
          </div>
        </div>
    </>
  )
}

export default PostEdit