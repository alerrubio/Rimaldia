import "./TForos.css";

function TForos() {

  return (

    <div className="Fondito_Todos_Foros">

<div className="Grupo_Foros2">
        <div className="Color_Foro2">
         
          <div className="mis_foros2">
          <a href={`/post`}>MIS FOROS</a>
           
          </div>
          <div className="todos_foros2">
          <a href="#">TODOS LOS FOROS</a>
           
          </div>
         
        </div>

      </div>















      <div className="Post_Contenedor3">
        <div className="perfil_usuario3">
         
          <img src="https://i.postimg.cc/XYHFk7d7/PERFIL.png" />

          <div>
          
            <p>Jaimito Guzman</p>
           
            <span>20 Octubre 2022, 12:40pm</span>
          </div>
        </div>

        <div className="Post_Input_Contenedor3">
        <p class="post-text3">El <span>amor no se compra</span>, no necesitas dinero lo que realmente
            se necesitas es valor para decirle te quiero.<a href="#">#Rimaldia</a></p>
          <img src="../../fotos/amorfoto.png" class="post-img3"></img>

          <div className="Links_post3">
            <a href="#"> <img src="../../fotos/publicar.png" /> Editar rima</a>
            <a href="#"> <img src="../../fotos/eliminar.png" /> Eliminar rima</a>
            <a href="#"> <img src="../../fotos/PHOTO.png" /> Cambiar imagen</a>

           

          </div>
          <span>______________________________________________________________________________________</span>
        </div>
        


        <div className="Contenido_Publicado3">
          <div className="perfil_usuario">

            <img src="https://i.postimg.cc/XYHFk7d7/PERFIL.png" />
            <div>
              <p>Karla Morrizon</p>
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

export default TForos