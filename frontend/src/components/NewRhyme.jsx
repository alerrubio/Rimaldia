import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import "./css/NewRhyme.css";
import PP from"/img/pp-example.jpg";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TagsBox from "./TagsBox";
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";
import createPost from "../services/PostService";

const styles = {
    menu: base => ({
      ...base,
      marginTop: 0
    })
  };
  const postInit = {
    user_id: "637c3f97110faec67bbd39db",
    color_index: "1",
  };

  const placeholder_textarea = `En las noches claras,
resuelvo el problema de la soledad del ser.
Invito a la luna y con mi sombra somos tres.`

export const NewRhyme = (props) => {
  const [post, setPost] = useState(postInit);
  const [error, setError] = useState(false);
  const newPost = async (event) => {
    try{
        const dbRes = await createPost(post);
        console.log("DB response: " +  dbRes);
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
    console.log(post);
  };
    const {children, title, user_name, time, post_to, visible_rows} = props;
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
                  <TagsBox tags={[{tag_name: "Romance"},
                                  {tag_name: "Rimaldía"},
                                  {tag_name: "Tristeza"},
                                  {tag_name: "Motivacional"},
                                  {tag_name: "Verso"},
                                  {tag_name: "Libre"}]} edit="true"></TagsBox>
                </div>
                <div className="d-flex flex-row justify-content-end col-4">
                  <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="Seleccione la categoría">
                      <Dropdown.Item href="#">Romántico</Dropdown.Item>
                      <Dropdown.Item href="#">Verso Libre</Dropdown.Item>
                      <Dropdown.Item href="#">Tristeza</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Motivacional</Dropdown.Item>
                  </DropdownButton>

                  <Button form="user_post" type="submit" variant="peach" className="btn btn-publish">
                  Publicar
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