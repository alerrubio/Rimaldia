import "./css/RecordTable.css";
import { useLocation, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { useContext } from "react";
import { RecordContext } from "../screens/Records";

const RecordTable = (props) => {

    const {headers} = props;
    let headerList = [];
    let dataList = [];

    const {records} = useContext(RecordContext);
    const data = records;
    //console.log("Records: "+JSON.stringify(records));

    {headers.forEach((header, index)=>{
        if(index == 0){
            headerList.push(<th key={index} className="ps-4 col-3">{header}</th>);
        }else{
            headerList.push(<th key={index}>{header}</th>);
        }
    })}

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
                return (
                  <tr key={cont}>
                    <td className="ps-4">{cont}</td>
                    <td>{row.start_date}</td>
                    <td>{row.end_date}</td>
                  </tr>
                );
            })}
        </tbody>
        </Table>
    )
}
export default RecordTable