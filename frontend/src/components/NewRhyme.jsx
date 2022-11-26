import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import "./css/NewRhyme.css";
import PP from"/img/pp-example.jpg";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TagsBox from "./TagsBox";
import { useAuth0 } from "@auth0/auth0-react";
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";
import {createPost} from "../services/PostService";
import {createTag} from "../services/TagService";

const styles = {
    menu: base => ({
      ...base,
      marginTop: 0
    })
  };
  const postInit = {
    user_id: "637c3f97110faec67bbd39db",
    user_name: "name full",
    user_picture: "photo",
    color_index: "1",
  };

  const placeholder_textarea = `En las noches claras,
resuelvo el problema de la soledad del ser.
Invito a la luna y con mi sombra somos tres.`

export const NewRhyme = (props) => {
  const {children, title, user_name, time, post_to, visible_rows} = props;
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [post, setPost] = useState(postInit);
  const [error, setError] = useState(false);
  const tagsNames = [];
  const tagsArr = [];
  const newPost = async (event) => {
    event.preventDefault();
    try{
      
      let dbPost = {
        user_id: user.sub.substring(6),
        user_name: user.given_name + " " + user.family_name,
        user_picture: user.picture,
        text: post.text, 
        color_index: "1",
        tag_id: tagsArr,
        liked_by_id: "637c3f97110faec67bbd39db"
      }
        const dbRes = await createPost(dbPost);
        console.log("DB response: " +  dbRes);
        //window.location.reload(false);
    }
    catch(err){
      setErrorMessage(errorMessage => "Hubo un error al querer publicar.")
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

  const newTag = async (tag) => {
    const response = await createTag(tag).then((tag) => {
      tagsNames.push({tag_name: tag.data.data.name});
      tagsArr.push(tag.data.data._id);
      console.log(tagsArr);
    });
    console.log(response);
  }
    
    return (
      <>
        {children}
        <div className="Post_Input_Contenedor p-4">
        
          <label className="label-textarea" for="poet_input">¿Cuál será la rima de hoy?</label>
          <Form id="user_post" onSubmit={newPost}>
          <textarea onChange={handleChange} row="5" id="poet_input" className="mt-0 pb-5" name="text" placeholder={placeholder_textarea}></textarea>

          <div className="Links_post d-flex flex-row justify-content-between">

            <div className="categories-dd d-flex justify-content-between col-12">
                <div className="post-tag-list d-flex flex-row justify-content-start align-items-center flex-wrap col-8">
                  <TagsBox tags={tagsNames} 
                            edit="true"
                            addTag={newTag}></TagsBox>
                </div>
                <div className="d-flex flex-row justify-content-end col-4">

                  <Button form="user_post" type="submit" variant="peach" className="btn btn-publish">
                      Publicar {post_to}
                  </Button>  
                </div>
            </div>
          </div>
          
          </Form>
          {error && 
                <span className="error">{errorMessage}</span>}
        </div>
      </>
    );
  };


export default NewRhyme;