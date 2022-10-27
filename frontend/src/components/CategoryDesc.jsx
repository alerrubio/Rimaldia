import Form from 'react-bootstrap/Form';
import "./css/Post.css";
import "./css/NewRhyme.css";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function CategoryDesc(props) {
    const{nombre_categoria, placeholder_textarea} = props;
    return (
        <>
          <div className="post-container">
          <label className="label-textarea" for="poet_input">{nombre_categoria}</label>
            <div className="Contenido_Publicado border-top">
          <textarea className="post-text" readOnly>
          {placeholder_textarea}</textarea>
              <div className="categories-dd d-flex justify-content-between  col-12">
                <Button variant="peach" className="">
                  Ver publicaciones 
                </Button>
                <div>
                <Button variant="leaf">
                  Editar 
                </Button>
                <Button variant="leaf">
                  Borrar 
                </Button>
                </div>
                </div>
            </div>
          </div>
        </>
      );
}

export default CategoryDesc;