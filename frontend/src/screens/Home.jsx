import "../components/css/Post.css";
import "./css/Home.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useEffect, useState } from "react";
import TagsBox from "../components/TagsBox";
import UserInfo from "../components/UserInfo";
import { Link } from "react-router-dom";
import { NewRhyme } from "../components/NewRhyme";
import { getUser } from "../services/usersService";
import { getallPosts, destroypost } from "../services/PostService";
import { useAuth0 } from "@auth0/auth0-react";
import { longDate } from "../utils/dateFormatter";

var datedb;
var id_search;

function Home() {
  const { user} = useAuth0();
  const [rhymes, setRhymes] = useState("");
  const [authors, author_info] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const postsdata = await getallPosts();
      setRhymes(postsdata);
      console.log(postsdata);
    };
    fetchdata();
  }, [user]);

  async function deletePost(id_post) {
    try{
      console.log(id_post);
        const dbRes = await destroypost(id_post);
        window.location.reload(false);
    }
    catch(err){
      setErrorMessage(errorMessage => "Hubo un error al querer eliminar.")
      setError(error => !error);
    }
    
  }

  function Showbutton(user_id,post_id) {
    if (user.sub.substring(6) == user_id) {
      return <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="✎">
      <Dropdown.Item as={Link} to={`/post_edit/${post_id}`} eventKey = {post_id} >Editar</Dropdown.Item>
      <Dropdown.Item onClick={() => deletePost(post_id)} eventKey = {post_id} >Eliminar</Dropdown.Item>
     </DropdownButton> 
    }
    return ;
  }

  return (
    <>
    <NewRhyme/>
    {rhymes &&
     rhymes.map((posting) => (
      <div className="post-container">
        <Link to={`/post/${posting._id}`}>
      <UserInfo user_name={ posting.user_name } 
        time={datedb = longDate(posting.createdAt)} 
        profile_picture={ posting.user_picture }></UserInfo>
     </Link>
          <div className="Contenido_Publicado">
            {posting.text}
            <div className="post-row d-flex flex-row justify-content-between ">
          <div className="hashtags d-flex flex-row justify-content-around align-items-center flex-wrap">
              
          </div>
          <div className="Actividad-iconos">
            {Showbutton(posting.user_id, posting._id)} 
          </div>
        </div>
            
          </div>
          
        </div>
          ))}
    </>
  )
}

export default Home