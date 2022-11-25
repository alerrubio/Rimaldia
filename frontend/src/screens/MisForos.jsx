import "./css/MisForos.css";
import Post from "../components/Post";
import UserInfo from "../components/UserInfo";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
import { NewRhyme } from "../components/NewRhyme";
import ForumCard from "../components/ForumCard";
import UserNavigationBar from "../components/UserNavigationBar";
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var foro = " en Educación poeta"

function MisForos() {

  return (
    <>
      <div className="mt-3"></div>
      <UserNavigationBar tabs={[{name: 'Mis foros', link: 'misforos'}, 
                                {name: 'Foros seguidos', link: '#'},
                                {name: 'Todos los foros', link: 'foros'},
                                {name: 'Crear foro', link: 'crearforo'}]} />
      <div className="forum-cards-container d-flex flex-row justify-content-center flex-wrap col-12">
        <ForumCard forum_name="Romance" 
                   icon="bi bi-tag-fill" 
                   about="Foro para románticos empedernidos"
                   members_no="3"></ForumCard>
        <ForumCard forum_name="Poesía lírica" 
                   icon="bi bi-tag-fill"
                   about="Foro de poesía lírica"
                   members_no="3"></ForumCard>
        <ForumCard forum_name="Poesía épica" 
                   icon="bi bi-tag-fill"
                   about="Foro poesía épica"
                   members_no="3"></ForumCard>
        <ForumCard forum_name="Poesía dramática"
                   icon="bi bi-tag-fill"
                   about="Foro de poesía dramáticae"
                   members_no="3"></ForumCard>
        <ForumCard forum_name="Poesía coral" 
                   icon="bi bi-tag-fill"
                   about="Foro de poesía coral"
                   members_no="3"></ForumCard>
      </div>
    </>
    
  )
}

export default MisForos