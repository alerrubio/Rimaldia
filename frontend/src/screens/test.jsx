import "./css/Home.css";
import { NewRhyme } from "../components/NewRhyme";
import ForumCard from "../components/ForumCard";
import UserNavigationBar from "../components/UserNavigationBar";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP from"/img/pp-example.jpg";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
function Home() {

  return (
    <>
      <UserNavigationBar tabs={['Mis foros', 'Todos los foros']}/>
        <div className="forum-cards-container d-flex flex-row flex-wrap col-12">
          <ForumCard forum_name="Romance" icon="bi bi-tag-fill"></ForumCard>
          <ForumCard forum_name="Poesía lírica" icon="bi bi-tag-fill"></ForumCard>
          <ForumCard forum_name="Poesía épica" icon="bi bi-tag-fill"></ForumCard>
          <ForumCard forum_name="Poesía dramática" icon="bi bi-tag-fill"></ForumCard>
          <ForumCard forum_name="Poesía coral" icon="bi bi-tag-fill"></ForumCard>
        </div>
    </>
  )
}

export default Home