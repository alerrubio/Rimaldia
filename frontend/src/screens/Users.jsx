import "./css/Users.css";
import Post from "../components/Post";
import UserInfo from "../components/UserInfo";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
import { NewRhyme } from "../components/NewRhyme";
import UserCard from "../components/UserCard";
import UserNavigationBar from "../components/UserNavigationBar";
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});

function Users() {

  return (
    <>
      <div className="mt-3"></div>
      <div className="users-cards-container d-flex flex-row justify-content-center flex-wrap col-12">
        <UserCard user_name="Sandra Noche" 
                   username="sansan" 
                   email="sansan@gmail.com"
                   role="Poeta"></UserCard>
        <UserCard user_name="Ricardo Lira" 
                   username="rickylira"
                   email="ricky@gmail.com"
                   role="Poeta"></UserCard>
        <UserCard user_name="Francisca Sueño" 
                   username="panchitadream"
                   email="panchita@gmail.com"
                   role="Super poeta"></UserCard>
        <UserCard user_name="Luisa Rimas"
                   username="luiri"
                   email="luiri@gmail.com"
                   role="Poeta"></UserCard>
      </div>
    </>
    
  )
}

export default Users