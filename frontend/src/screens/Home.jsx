import "./Home.css";
import { NewRhyme } from "../components/NewRhyme";

function Home() {

  return (

    <div className="Fondito_Home container">
      <div className="Post_Contenedor">
       
        <NewRhyme user_name="Ricardo Poetiso"></NewRhyme>

        <div className="Contenido_Publicado">
          <div className="perfil_usuario">

            <img src="https://i.postimg.cc/XYHFk7d7/PERFIL.png" />
            <div>
              <p>Alejandro Tijerina</p>
              <span>20 Octubre 2022, 12:40pm</span>
            </div>
          </div>
          <p class="post-text">El <span>amor no se compra</span>, no necesitas dinero lo que realmente
            se necesitas es valor para decirle te quiero.<a href="#">#Rimaldia</a></p>
          <img src="../../fotos/amorfoto.png" class="post-img"></img>

          <div className="post-row">
            <div className="Actividad-iconos">
              <div><img src="../../fotos/like-blue.png" /> 12</div>
              <div><img src="../../fotos/comments.png" /> 5</div>
              <div><img src="../../fotos/share.png" /> 2</div>
            </div>
            <div className="Perfil-Post-Icono">

            </div>
          </div>
          <span>______________________________________________________________________________________</span>
        </div>


        <div className="Contenido_Publicado">
          <div className="perfil_usuario">

            <img src="https://i.postimg.cc/XYHFk7d7/PERFIL.png" />
            <div>
              <p>Alejandro Tijerina</p>
              <span>20 Octubre 2022, 12:40pm</span>
            </div>
          </div>
          <p class="post-text">El <span>amor no se compra</span>, no necesitas dinero lo que realmente
            se necesitas es valor para decirle te quiero.<a href="#">#Rimaldia</a></p>
          <img src="../../fotos/amorfoto.png" class="post-img"></img>

          <div className="post-row">
            <div className="Actividad-iconos">
              <div><img src="../../fotos/like-blue.png" /> 12</div>
              <div><img src="../../fotos/comments.png" /> 5</div>
              <div><img src="../../fotos/share.png" /> 2</div>
            </div>
            <div className="Perfil-Post-Icono">

            </div>
          </div>
          <span>______________________________________________________________________________________</span>
        </div>




      </div>






    </div>


  )
}

export default Home