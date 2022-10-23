import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar, { MenuContent }  from "../components/NavBar";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="container d-flex flex-row contenido">
        <div className="row">
          <SideBar username="Nombre de usuario" />
        </div>
        
        <div id="detail" className="row col-9 ">
          <div className="col-12 bordes">
            <NavBar title="Rimaldía">
              <MenuContent/>
            </NavBar>
          </div>
          <div className="col-12 bordes">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}