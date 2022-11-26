import "../components/css/Post.css";
import "./css/Home.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useEffect, useState } from "react";
import TagsBox from "../components/TagsBox";
import UserInfo from "../components/UserInfo";
import { Link } from "react-router-dom";
import { NewRhyme } from "../components/NewRhyme";
import { getallPosts } from "../services/PostService";
import { longDate } from "../utils/dateFormatter";

var datedb;
var id_search;

function Home() {
  const [rhymes, setRhymes] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const postsdata = await getallPosts();
      setRhymes(postsdata);
    };
    fetchdata();
  }, []);

  return (
    <>
    <NewRhyme/>
    {rhymes &&
     rhymes.map((posting) => (
      <div className="post-container">
      <UserInfo user_name={ posting.user_name } 
        time={datedb = longDate(posting.createdAt)} 
        profile_picture={ posting.user_picture }></UserInfo>
     
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
            <div><Link to={`/post/${posting._id}`}><i className="bi bi-chat-left-fill"></i>5 </Link></div>
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