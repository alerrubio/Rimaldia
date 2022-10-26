import "./css/RecordTable.css";
import { useLocation, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const RecordTable = (props) => {

    const {headers, data} = props;
    let headerList = [];
    let dataList = [];

    {headers.forEach((header, index)=>{
        if(index == 1){
            headerList.push(<th key={index} className="ps-4">{header}</th>);
        }else{
            headerList.push(<th key={index}>{header}</th>);
        }
    })}

    const location = useLocation();
    return (
        <Table striped hover className="borderless ps-5">
        <thead>
            <tr>
                {headerList}
            </tr>
        </thead>
        <tbody>
            {data.map(row => {
                return (
                  <tr key={row.rank}>
                    <td className="ps-4">{row.rank}</td>
                    <td>{row.pclave}</td>
                    <td>{row.usos}</td>
                  </tr>
                );
            })}
        </tbody>
        </Table>
    )
}
export default RecordTable