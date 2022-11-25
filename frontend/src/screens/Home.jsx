import "./css/Home.css";
import { NewRhyme } from "../components/NewRhyme";
import UserInfo from "../components/UserInfo";
import { getallPosts } from "../services/PostService";
import { getUser } from "../services/usersService";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import "../components/css/Post.css";
import TagsBox from "../components/TagsBox";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
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
  }, []);

  return (
    <>
    <NewRhyme/>
    {rhymes &&
     rhymes.map((posting) => (
      <div className="post-container">
      <UserInfo user_name={ posting.user_name } time= {datedb = new Date(posting.createdAt).toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' })} profile_picture={ posting.user_picture }></UserInfo>
     
          <div className="Contenido_Publicado">
      {posting.text}
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
            <div><Link to={"/post/:id"}><i className="bi bi-chat-left-fill"></i>5 </Link></div>
            <div><i className="bi bi-save-fill"></i></div>
            <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="✎">
                <Dropdown.Item href="#">Editar</Dropdown.Item>
                <Dropdown.Item href="#">Eliminar</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
            
          </div>
          
        </div>
          ))}
    </>
  )
}

export default Home