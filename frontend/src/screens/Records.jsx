import "./css/Records.css";
import UserNavigationBar from "../components/UserNavigationBar";
import RecordTable from "../components/RecordTable";
import { useState, useEffect } from "react";
import { getRecords } from '../services/recordsService';
import { useAuth0 } from "@auth0/auth0-react";
import { createContext } from "react";

export const RecordContext = createContext(null);

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function Records(props) {
  const { user } = useAuth0();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ha ocurrido un error.");
  const [records, setRecords] = useState([]);

  /*let pclaveDummy = 
  [
    {
      rank: 1,
      tag: 'amor',
      user: 'Ana'
    },
    {
      rank: 2,
      tag: 'amor',
      user: 'Ana'
    },
    {
      rank: 3,
      tag: 'amor',
      user: 'Ana'
    },
    {
      rank: 4,
      tag: 'amor',
      user: 'Ana'
    },
    {
      rank: 5,
      tag: 'amor',
      user: 'Ana'
    }
  ]*/

    
  const getRecordsFromDb = async (event) => {
    try{
      
      setError(error => error);     

      const dbRes = await getRecords();

      //console.log("DB response: " +  JSON.stringify(dbRes));

      console.log("Records cargados con éxito");

      setRecords(dbRes);
      
    }
    catch(err){
      setErrorMessage(errorMessage => "No fue posible cargar los temas.")
      setError(error => !error);
    }
    
  }

  useEffect(()=>{
    getRecordsFromDb();
    //console.log("Records: "+ JSON.stringify(records));
    const fetchdata = async () => {
      const dbRes = await getRecords();
      setRecords(dbRes);
    };
    //fetchdata();
    //console.log("Records: "+ JSON.stringify(records));
  }, []);

  return (
    <RecordContext.Provider value={{records, setRecords}}>
      <>
        <div className="mt-5"></div>


          <div className="record-container">

            <RecordTable headers={['Ranking', 'Usuarios', 'Tags']} data={records} />  
          </div>
          
      </>
    </RecordContext.Provider>  
  )
}

export default Records