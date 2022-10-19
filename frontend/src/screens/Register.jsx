import "./Register.css";

const FondoRegistro = new URL("../../fotos/REGISTRO.jpg", import.meta.url)
const Register = () => {
  return (
    <div className="Fondito_Registro">
      
      <header>
     
        <input type="checkbox" name="" id="chk1" />
        <div class="logo"></div>
        <div class="search-box">
          <form>
            <input type="text" name="search" id="srch" placeholder="Buscar" />
            <button  type="submit"><i class="fa fa-search"></i></button>
          </form>
        </div>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Foros</a></li>
          <li><a href="#">Registrarse</a></li>
        </ul>
        <div class="menu">
          <label for="chk1">
            <i class="fa fa-bars"></i>

            
          </label>
        </div>
      </header>
      <img src={FondoRegistro} />

      

      <div className="login-box_R">

        <label for="username"></label>
        <input type="text" placeholder=" Usuario" />

        <label for="Email"></label>
        <input type="text" placeholder=" Correo Electronico" />

        <label for="password"></label>
        <input type="password" placeholder=" Contraseña" />

        <label for="password"></label>
        <input type="password" placeholder=" Repetir Contraseña" />

        {/*<input type="submit" value="Iniciar Sesion" href="/post"/>*/}
        <div className="Registrar">
          <a href="/">Registrar</a>
        </div>     

        {/*<a href="/post">Olvidó su contraseña?</a>*/}

      </div>
      <div className="Iniciar">
          <a href="/Login">Iniciar Sesion</a>
        </div>
    </div>

  )
}
export default Register