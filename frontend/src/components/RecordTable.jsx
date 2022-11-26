import "./css/RecordTable.css";
import { useLocation, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { RecordContext } from "../screens/Records";
import { ultraShortDate } from "../utils/dateFormatter";
import { getUser } from "../services/usersService";
import { useEffect, useState } from "react";

const RecordTable = (props) => {

    const {headers} = props;
    const [settedUser, setSettedUser] = useState("");
    let headerList = [];
    let dataList = [];

    const {records} = useContext(RecordContext);
    const data = records;
    //console.log("Records: "+JSON.stringify(records));

    const getUserDb = async (user_id) => {
        let userdb = await getUser(user_id);
        setSettedUser(userdb.username)
        //return userdb.username;
    }

    {headers.forEach((header, index)=>{
        if(index == 0){
            headerList.push(<th key={index} className="ps-4 col-3">{header}</th>);
        }else{
            headerList.push(<th key={index}>{header}</th>);
        }
    })}

    /*useEffect(()=>{
        getUserDb();
        //console.log("Records: "+ JSON.stringify(records));
        const fetchdata = async () => {
          const dbRes = await getRecords();
          setRecords(dbRes);
        };
        //fetchdata();
        //console.log("Records: "+ JSON.stringify(records));
      }, []);*/

    const location = useLocation();
    let cont=0;
    return (
        <Table striped hover className="records-usuario borderless ps-5">
        <thead>
            <tr>
                {headerList}
            </tr>
        </thead>
        <tbody>
            {data.map(row => {
                cont=cont+1;
                //getUserDb(row.most_popular_users_id[0]);
                let name= settedUser;
                console.log("??"+name);
                return (
                  <tr key={cont}>
                    <td>{ultraShortDate(row.start_date)}</td>
                    <td>{ultraShortDate(row.end_date)}</td>
                    <td>{row.most_popular_users_id[0]}</td>
                  </tr>
                );
            })}
        </tbody>
        </Table>
    )
}
export default RecordTable