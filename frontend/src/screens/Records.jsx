import "./css/Records.css";
import UserInfo from "../components/UserInfo";
import PP from"/img/pp-example.jpg";
import PP2 from"/img/pp2.png";
import UserNavigationBar from "../components/UserNavigationBar";
import RecordTable from "../components/RecordTable";

var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function Records() {

  let pclaveDummy = 
  [
    {
      rank: 1,
      pclave: 'amor',
      usos: 184
    },
    {
      rank: 2,
      pclave: 'cielo',
      usos: 156
    },
    {
      rank: 3,
      pclave: 'bosque',
      usos: 76
    },
    {
      rank: 4,
      pclave: 'agua',
      usos: 43
    },
    {
      rank: 5,
      pclave: 'vida',
      usos: 29
    }
  ]

  return (
    <>
      <UserInfo user_name="Ricardo Poetiso" time={date} profile_picture={PP}></UserInfo>
      <div className="mt-5"></div>
      <UserNavigationBar tabs={['Tags', 'Likes', 'Comentarios', 'Usuarios']}>
      </UserNavigationBar>
      <div className="record-container">
        <RecordTable headers={['Ranking semanal', 'Tags', 'Usos']} data={pclaveDummy}>        
        </RecordTable>      
      </div>    
      <div className="record-container">
        <RecordTable headers={['Ranking mensual', 'Tags', 'Usos']} data={pclaveDummy}>        
        </RecordTable>      
      </div>    
    </>
  )
}

export default Records