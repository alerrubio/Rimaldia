import Form from 'react-bootstrap/Form';
import "./css/Post.css";
import "./css/NewRhyme.css";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import createCategory from "../services/categoryService";

const categoryInit = {
    user_id: "637c3f97110faec67bbd39db",
    user_name: "name full",
    user_picture: "photo",
    color_index: "1",
  };

function CategoryInput() {

const [category, setcategory] = useState(categoryInit);
const [error, setError] = useState(false);
const newCat = async (event) => {
    event.preventDefault();
    try{

      let dbcategory = {
        name: category.textName,
        description: category.textDesc
      }
        const dbRes = await createCategory(dbcategory);
        console.log("DB response: " +  dbRes);
        window.location.reload(false);
    }
    catch(err){
      setErrorMessage(errorMessage => "Hubo un error al querer publicar.")
      setError(error => !error);
    }
    
  }

const handleChange = (event) => {
    const { name, value } = event.target;

    setCat({
      ...category,
      [name]: value,
    });
    console.log(category);
  };

    return (
        <>
          <div className="post-container">
          <Form id="new_cat" onSubmit={newCat}>
          <input onChange={handleChange} id="CatNameInput" name='CatNameInput' type="text" class="form-control" placeholder="Nombre de categoría" aria-label="Username" aria-describedby="basic-addon1"></input>
            <div className="Contenido_Publicado border-top">
          <textarea onChange={handleChange} id="CatDescInput" name='CatDescInput' className="post-text" placeholder='Descripción de la categoría'></textarea>
              <div className="categories-dd d-flex justify-content-between  col-12">
                <div>
                <Button variant="leaf">
                  Crear 
                </Button>
                </div>
                </div>
            </div>
          </Form>
          </div>
        </>
      );
}

export default CategoryInput;