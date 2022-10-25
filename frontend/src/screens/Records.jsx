import "./css/Records.css";
import UserInfo from "../components/UserInfo";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
import Table from 'react-bootstrap/Table';
import UserNavigationBar from "../components/UserNavigationBar";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function Records() {

  return (
    <>
    <UserInfo user_name="Ricardo Poetiso" time={date} profile_picture={PP}></UserInfo>
    <div className="mt-5"></div>
    <UserNavigationBar tabs={['Palabras clave', 'Likes', 'Comentarios', 'Usuarios']}>
    </UserNavigationBar>
    <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
    </>
  )
}

export default Records