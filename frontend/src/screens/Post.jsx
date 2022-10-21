import "./Post.css";

function Post() {

  return (

    <div className="Fondito_Post">

      <div className="Grupo_Foros">
          <div className="Color_Foro">
          
            <div className="mis_foros">
            <a href={`/post`}>MIS FOROS</a>
            
            </div>
            <div className="todos_foros">
            <a href={`/tForos`}>TODOS LOS FOROS</a>
            
            </div>
          
          </div>

        </div>

      <div className="Post_Contenedor2">
        <div className="perfil_usuario">
         
          <img src="https://i.postimg.cc/XYHFk7d7/PERFIL.png" />

          <div>
          
            <p>Alejandro Tijerina</p>
           
            <span>20 Octubre 2022, 12:40pm</span>
          </div>
        </div>

        <div className="Post_Input_Contenedor2">
        <p class="post-text">El <span>amor no se compra</span>, no necesitas dinero lo que realmente
            se necesitas es valor para decirle te quiero.<a href="#">#Rimaldia</a></p>
          <img src="../../fotos/amorfoto.png" class="post-img"></img>

          <div className="Links_post">
            <a href="#"> <img src="../../fotos/publicar.png" /> Editar rima</a>
            <a href="#"> <img src="../../fotos/eliminar.png" /> Eliminar rima</a>
            <a href="#"> <img src="../../fotos/PHOTO.png" /> Cambiar imagen</a>

           

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
          <div className="Links_post">
            <a href="#"> <img src="../../fotos/publicar.png" /> Editar rima</a>
            <a href="#"> <img src="../../fotos/eliminar.png" /> Eliminar rima</a>
            <a href="#"> <img src="../../fotos/PHOTO.png" /> Cambiar imagen</a>

           

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
          <div className="Links_post">
            <a href="#"> <img src="../../fotos/publicar.png" /> Editar rima</a>
            <a href="#"> <img src="../../fotos/eliminar.png" /> Eliminar rima</a>
            <a href="#"> <img src="../../fotos/PHOTO.png" /> Cambiar imagen</a>

           

          </div>
          </div>
          <span>______________________________________________________________________________________</span>
        </div>

      </div>

    </div>
  )
}

export default Post