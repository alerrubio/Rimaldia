import "./css/JoinedForums.css";
import ForumCard from "../components/ForumCard";
import UserNavigationBar from "../components/UserNavigationBar";
import Forums from "../components/Forums";

function JoinedForums() {

  return (
    <>
      <div className="mt-3"></div>
      <UserNavigationBar tabs={[{name: 'Mis foros', link: 'misforos'}, 
                                {name: 'Foros seguidos', link: 'foros_seguidos'},
                                {name: 'Todos los foros', link: 'foros'},
                                {name: 'Crear foro', link: 'crearforo'}]} />
      <div className="forum-cards-container d-flex flex-row justify-content-center flex-wrap col-12">
        <Forums usersForums />
      </div>
    </>
    
  )
}

export default JoinedForums