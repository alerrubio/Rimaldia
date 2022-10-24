import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar, { MenuContent }  from "../components/NavBar";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="container d-flex flex-row contenido">
        <div className="row col-3">
          <SideBar username="rickypoeta" />
        </div>
        
        <div id="detail" className="row col-9 ">
          <NavBar title="Rimaldía">
              <MenuContent/>
          </NavBar>
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}