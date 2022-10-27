import "./css/Home.css";
import { NewRhyme } from "../components/NewRhyme";

import NotificationCard from "../components/NotificationCard";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
function Home() {

  return (
    <>
      <div className="col-12 d-flex flex-row flex-wrap justify-content-center">
        <NotificationCard title="Los usuarios más activos del mes" 
                          text="¡Felicidades! Fulanito y panganito, fueron los usuarios con más post en el mes." 
                          time={date}></NotificationCard>
        <NotificationCard title="Los usuarios más activos del mes" 
                          text="¡Felicidades! Fulanito y panganito, fueron los usuarios con más post en el mes." 
                          time={date}></NotificationCard>
        <NotificationCard title="Los usuarios más activos del mes" 
                          text="¡Felicidades! Fulanito y panganito, fueron los usuarios con más post en el mes." 
                          time={date}></NotificationCard>
        <NotificationCard title="Los usuarios más activos del mes" 
                          text="¡Felicidades! Fulanito y panganito, fueron los usuarios con más post en el mes." 
                          time={date}></NotificationCard>
      </div>
    </>
  )
}

export default Home