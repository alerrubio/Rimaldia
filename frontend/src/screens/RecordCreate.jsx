import "./css/NewNotification.css";
import NewRecord from "../components/NewRecord";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});

function RecordCreate() {

  return (
    <>
        <NewRecord></NewRecord>
    </>
  )
}

export default RecordCreate