import React, { useState } from "react";
import "./css/UserNavigationBar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
var fecha = new Date();
fecha = fecha.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric' });
import { useLocation, Link } from "react-router-dom";
  
export const UserNavigationBar = (props) => {
    const {tabs} = props;
    let tabList = [];
    {/*`/${tab}`*/}

    {tabs.forEach((tab, index)=>{
      //console.log(`/${tab.link}`);
      tabList.push(<Link to={`/${tab.link}`} key={index} className={`col-2 forum-tab d-flex justify-content-center ${tab.color}`}>
      <div className="">
          {tab.name}
      </div>
      </Link>);
    })}

    return (
      <>
        <div className="container user-nav-bar d-flex flex-row ms-4">
          {tabList}           
        </div>
      </>
    );
  };


export default UserNavigationBar;