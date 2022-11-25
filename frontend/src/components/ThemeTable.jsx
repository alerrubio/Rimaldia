import "./css/RecordTable.css";
import { useState, useEffect, fetchData, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { deleteTheme, editTheme } from '../services/themesService';
import Table from 'react-bootstrap/Table';
import { Navigate } from "react-router-dom";
import ThemeInput from "../components/ThemeInput";
import { ThemeContext } from "../screens/SuperAdmin";

const ThemeTable = (props) => {
  const [needRefresh, setRefresh] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");

  const {setThemeStyle} = useContext(ThemeContext);

  const {headers, data} = props;
  let headerList = [];
  let dataList = [];
  let count = 0;

  {headers.forEach((header, index)=>{
      if(index == 0){
          headerList.push(<th key={index} className="ps-4 col-3 borderless headerDark">{header}</th>);
      }else{
          headerList.push(<th key={index} className="borderless headerDark">{header}</th>);
          count = index;
      }
  })}
  headerList.push(<th key={count + 1} className="borderless headerDark">Acciones</th>);

  const deleteThemeFromDb = async (id) => {
      try{
    
        setError(error => error);     

        await deleteTheme(id);
        //console.log(id);

        console.log("Tema eliminado con éxito.");
        setRefresh(true);
        return <Navigate to="/admin/crearTema" replace />
    
      }
      catch(err){
        setErrorMessage(errorMessage => "No fue posible cargar los temas.")
        //setError(error => !error);
      }    
  }

  const selectTheme = async (select) => {
      try{
    
        setError(error => error);
        const styleString = ``;

        //logica de eniar al css
        setThemeStyle(`#themed {
          background-color:`+select.background_color+`; 
          position:relative;
          margin: auto;   
      }

      #themed .themedText {
          color: `+select.variation_1+`;
      }

      #themed .themedSecondary {
          background-color: `+select.variation_2+`;
      }

      #themed .themedButton {
          background-color: `+select.variation_3+`;
      }

      #themed .btn {
          background-color: `+select.variation_3+`;
      }

      #themed form {
          background-color: `+select.variation_2+`;
      }

      #themed .users-cards-container {
          background-color: `+select.variation_2+`;
      }

      #themed .forum-cards-container {
          background-color: `+select.variation_2+`;
      }

      #themed .user-card-container {
          background-color: `+select.background_color+`;
      }

      #themed .user_info_card {
          color:`+select.variation_1+`;    
      }

      #themed form h3{
          color: `+select.variation_1+`;
      }

      #themed .nav-link{
          color: `+select.variation_1+`;
      }

      #themed th{
          color: `+select.variation_1+`;
      }

      #themed td{
          color: `+select.variation_1+`;
      }

      #themed p{
          color: `+select.variation_1+`;
      }

      #themed label{
          color: `+select.variation_1+`;
      }`);

        console.log("Tema seleccionado con éxito.");
        setRefresh(true);    
      }
      catch(err){
        setErrorMessage(errorMessage => "No fue posible cargar los temas.")
        setError(error => !error);
      }    
  }

  if(needRefresh){
      //setRefresh(false);
      console.log("Entered need refresh");
      //window.location.reload();
      return <Navigate to="/admin/crearTema" replace />
  }

  return (
      <Table striped hover id="theme_table" className="records-usuario borderless ps-5">
      <thead>
          <tr className="borderless">
              {headerList}
          </tr>
      </thead>
      <tbody>
          {data.map(row => {
              return (
                <tr className="borderless" key={row.name}>
                  <td className="borderless ps-4">{row.name}</td>
                  <td className="borderless" style={{backgroundColor: row.background_color, color: "#ffffff"}}>{row.background_color}</td>
                  <td className="borderless" style={{backgroundColor: row.variation_1, color: "#ffffff"}}>{row.variation_1}</td>
                  <td className="borderless" style={{backgroundColor: row.variation_2, color: "#ffffff"}}>{row.variation_2}</td>
                  <td className="borderless" style={{backgroundColor: row.variation_3, color: "#ffffff"}}>{row.variation_3}</td>
                  <td className="borderless">
                    <Link to="/admin/crearTema" state={{editTheme: row}}>
                      <i class="bi bi-pencil-fill"></i>
                    </Link>
                      <i class="bi bi-trash-fill" onClick={() => deleteThemeFromDb(row._id)}></i>
                      <i class="bi bi-check-lg" onClick={() => selectTheme(row)}></i>
                  </td>
                </tr>
              );
          })}
      </tbody>
      </Table>
  )
}
export default ThemeTable