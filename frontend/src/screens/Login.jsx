import "./Login.css";


const FondoLogin = new URL("../../fotos/LOGIN.jpg", import.meta.url)
const Login = () => {
  return (
    <div className="Fondito_Login">
      
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
          <li><a href="#">Regstrarse</a></li>
        </ul>
        <div class="menu">
          <label for="chk1">
            <i class="fa fa-bars"></i>

            
          </label>
        </div>
      </header>
      <img src={FondoLogin} />

      

      <div className="login-box">

        <label for="username"></label>
        <input type="text" placeholder=" Usuario" />

        <label for="password"></label>
        <input type="password" placeholder=" Contraseña" />

        {/*<input type="submit" value="Iniciar Sesion" href="/post"/>*/}
        <div className="iniSec">
          <a href="/">Iniciar Sesion</a>
        </div>     

        {/*<a href="/post">Olvidó su contraseña?</a>*/}

      </div>
      <div className="Regi">
          <a href="/Register">Registrarse</a>
        </div>
    </div>

  )
}
export default Login