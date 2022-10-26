import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar, { MenuContent }  from "../components/NavBar";
import "./css/Layout.css";
import Background from "/img/FONDO.jpg";

export default function Layout() {
  return (
    <>
      <div className="container d-flex flex-row contenido">
        <div className="row col-3">
          <SideBar username="rickypoeta" email="ricky@gmail.com" />
        </div>
        <NavBar title="Rimaldía" username="rickypoeta" nav_bar_alignment="end">
            <MenuContent username="rickypoeta"/>
        </NavBar>
        
        <div id="detail" className="row col-11 ps-5">
          <div className="page-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}