import "./css/NewNotification.css";
import { NewRhyme } from "../components/NewRhyme";
import ForumCard from "../components/ForumCard";
import UserNavigationBar from "../components/UserNavigationBar";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP from"/img/pp-example.jpg";
import Notification from "../components/Notification";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});

function NewNotification() {

  return (
    <>
        <Notification></Notification>
    </>
  )
}

export default NewNotification