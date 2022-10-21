import "./Home.css";

const FondoHome = new URL("../../fotos/FONDO.jpg", import.meta.url)

function Home() {

  return (

    <div className="Fondito_Home">

      <div className="Post_Contenedor">
        <div className="perfil_usuario">
          <i className="fa-solid fa-caret-down"></i>
          <img src="https://i.postimg.cc/XYHFk7d7/PERFIL.png" />
          <div>
            <p>Alejandro Tijerina</p>
            <small>Publico</small>
          </div>
        </div>

        <div className="Post_Input_Contenedor">
          <textarea row="3" placeholder="Cual será la rima de hoy?"></textarea>

          <div className="Links_post">
            <a href="#"> <img src="../../fotos/publicar.png" /> Publicar rima</a>
            <a href="#"> <img src="../../fotos/PHOTO.png" /> Agregar foto</a>

            <div className="select" tabindex="1">
              <input class="selectopt" name="test" type="radio" id="opt1" checked />
              <label for="opt1" class="option">Categoria</label>
              <input class="selectopt" name="test" type="radio" id="opt2" />
              <label for="opt2" class="option">Romantico</label>
              <input class="selectopt" name="test" type="radio" id="opt3" />
              <label for="opt3" class="option">Verso Libre</label>
              <input class="selectopt" name="test" type="radio" id="opt4" />
              <label for="opt4" class="option">Tristeza</label>
              <input class="selectopt" name="test" type="radio" id="opt5" />
              <label for="opt5" class="option">Motivacional</label>
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