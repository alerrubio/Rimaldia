import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header2>

        <input type="checkbox2" name="" id="chk1" />
        <div class="logo"></div>
        <div class="search-box2">
          <form>
            <input type="text" name="search" id="srch2" placeholder="Buscar" />
            <button type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="#">Favoritos</a></li>
          <li><a href="#">Foros</a></li>
          <li><a href={`/login`}>Cerrar Sesion</a></li>

        </ul>
        <div class="menu">
          <label for="chk1">
            <i class="fa fa-bars"></i>


          </label>
        </div>
      </header2>


      <div id="sidebar">
        <h1></h1>
        <div>
          <ul>
            <div className="Imgperfil">
              <img className="Imgperfil" src="https://i.postimg.cc/XYHFk7d7/PERFIL.png" />

            </div>
            <li>
              <a >Usuario:</a>
            </li>
            <li>
              <a >Correo:</a>
            </li>

          </ul>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/`}>Home</a>
            </li>
            <li>
              <a href={`/post`}>Mis Foros</a>
            </li>

          </ul>

          <ul>
            <li>
              <a >   CATEGORIAS</a>
            </li>
            <li>
              <a >        Romantico</a>
            </li>
            <li>
              <a >        Verso Libre</a>
            </li>
            <li>
              <a >        Tristeza</a>
            </li>
            <li>
              <a >        Motivacional</a>
            </li>
          

          </ul>
        </nav>
      </div>

      

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}