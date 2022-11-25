import React, { useState } from "react";
import "./css/EmptyState.css";
import PP from"/img/pp-example.jpg";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const EmptyState = (props) => {
    const {title} = props;
    
    return (
      <>
        <div className="empty-state w-50 d-flex flex-column justify-content-center align-items-center text-center">
            <i class="bi bi-x-circle"></i>
            No hay {title} que mostrar.
        </div>
      </>
    );
  };


export default EmptyState;