import "./Home.css";
const FondoHome = new URL("../../fotos/FONDO.jpg", import.meta.url)
function Home() {
  return (
    <div className="Fondito_Home">
        <img src={FondoHome} />
      <div>
        <p>HomeScreen</p>
      </div>
    </div>
  )
}

export default Home