import Form from 'react-bootstrap/Form';
import "./css/Post.css";
import "./css/NewRhyme.css";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ThemeSettings() {
    return (
        <>
          <div className="post-container">
          <label className="label-textarea" for="poet_input">Configuración del tema</label>
            <div className="Contenido_Publicado border-top">
              <div className="categories-dd d-flex justify-content  col-12">
                <DropdownButton id="dropdown-basic-button" className="mx-4" variant="leaf" title="Seleccione el tema">
                    <Dropdown.Item href="#">Luz</Dropdown.Item>
                    <Dropdown.Item href="#">Nocturno</Dropdown.Item>
                    <Dropdown.Item href="#">Calido</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Frío</Dropdown.Item>
                </DropdownButton>
                <Button variant="peach" className="">
                  Aplicar
                </Button>
                </div>
            </div>
          </div>
        </>
      );
}

export default ThemeSettings;