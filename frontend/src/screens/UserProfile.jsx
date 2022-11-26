import React, { useEffect, useState } from "react";
import "./css/UserProfile.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import ProfileBanner from "../components/ProfileBanner";
import UserInfo from "../components/UserInfo";
import { useAuth0 } from "@auth0/auth0-react";
import { getPostsbyuser,destroypost } from "../services/PostService";
import "../components/css/Post.css";
import TagsBox from "../components/TagsBox";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NewRhyme } from "../components/NewRhyme";
import Background from "/img/LOGIN.png";
import Logo from "/img/logo.png";
import { Navigate, Link } from "react-router-dom";
import { getUserByEmail } from "../services/usersService";
import { getRole } from "../services/userRoleService";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var datedb;
function UserProfile(props) {
  const { user} = useAuth0();
  const {username, user_full_name, role} = props;
  const { isLoading, isAuthenticated} = useAuth0();
  const [rhymes, setRhymes] = useState("");
  const [userDb, setUserDb] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const postsdata = await getPostsbyuser(user.sub.substring(6));
      setRhymes(postsdata);
      const result = await getUserByEmail(user.email);
      const roleDb = await getRole(result.data.role)
      setUserDb(roleDb.name);
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

  if (isLoading){
    return (
    <>
      <div className="loading d-flex justify-content-center align-items-center">
        <img src={Logo} className="loadingLogo" alt="" />
        <i class="bi bi-gear rotate"></i>
      </div>
    </>
    );
  }

  if (!isAuthenticated){
    return <Navigate to="/login" replace />
  }

  return (
    <>
    <img src={Background} className="bg-img" alt="" />
        <NavBar title="Rimaldía" 
                username={user.nickname} 
                nav_bar_alignment="between" 
                logo>
            <MenuContent username={user.nickname}/>
        </NavBar>
        <div className="profile-page-content">
          <ProfileBanner username={user.nickname} 
            user_full_name={user.given_name + " " + user.family_name} 
            role={userDb}
            picture={user.picture}/>
          <div className="posts-content col-10 d-flex flex-column justify-content-center">
            <NewRhyme ></NewRhyme>
            
            {rhymes &&
     rhymes.map((posting) => (
      <div className="post-container">
      
      <UserInfo user_name={ user.given_name + " " + user.family_name } time= {datedb = new Date(posting.createdAt).toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' })} profile_picture={user.picture}></UserInfo>
     
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
                <Dropdown.Item as={Link} to={`/post_edit/${posting._id}`} eventKey = {posting._id} >Editar</Dropdown.Item>
                <Dropdown.Item onClick={() => deletePost(posting._id)} eventKey = {posting._id} >Eliminar</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
            
          </div>
          
        </div>
          ))}
          </div>
        </div>
        
    </>
  )
}

export default UserProfile;