import "./css/ForumInput.css";
import NavBar from "../components/NavBar";
import { MenuContent } from "../components/NavBar";
import { NewRhyme } from "../components/NewRhyme";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/esm/Button";
import { useLocation, Link } from "react-router-dom";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ForumInput(props) {
  const {forum_name, members_no, about} = props;
  return (
    <>
        <div className="col-10 d-flex flex-row flex-wrap justify-content-center">
        <Form className="container col-10 py-5 my-0 justify-content-center align-items-around">
                <div>
                  <label for="email">Nombre del tema</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control email-input" name="email" placeholder="''El cielo, mi desvelo''" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color base</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control password-input" name="password" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color de fondo: Variante 1</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control password-input" name="password" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color de fondo: Variante 2</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control password-input" name="password" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <div>
                  <label for="password">Color de fondo: Variante 3</label>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control password-input" name="password" placeholder="#FFFFFF" required/>
                  </div>
                </div>
                <Button variant="peach" onClick={event =>  window.location.href='/misforos'} className="btn-login btn login col-12">
                    Crear
                </Button>
              </Form>
        </div>
    </>
  )
}

export default ForumInput