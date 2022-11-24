import "./css/RecordTable.css";
import { useLocation, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

const RecordTable = (props) => {

    const {headers, data} = props;
    let headerList = [];
    let dataList = [];
    let count = 0;

    {headers.forEach((header, index)=>{
        if(index == 0){
            headerList.push(<th key={index} className="ps-4 col-3 borderless headerDark">{header}</th>);
        }else{
            headerList.push(<th key={index} className="borderless headerDark">{header}</th>);
            count = index;
        }
    })}
    headerList.push(<th key={count + 1} className="borderless headerDark">Acciones</th>);

    const location = useLocation();
    return (
        <Table striped hover id="theme_table" className="records-usuario borderless ps-5">
        <thead>
            <tr className="borderless">
                {headerList}
            </tr>
        </thead>
        <tbody>
            {data.map(row => {
                return (
                  <tr className="borderless" key={row.name}>
                    <td className="borderless ps-4">{row.name}</td>
                    <td className="borderless" style={{backgroundColor: row.background_color, color: "#ffffff"}}>{row.background_color}</td>
                    <td className="borderless" style={{backgroundColor: row.variation_1, color: "#ffffff"}}>{row.variation_1}</td>
                    <td className="borderless" style={{backgroundColor: row.variation_2, color: "#ffffff"}}>{row.variation_2}</td>
                    <td className="borderless" style={{backgroundColor: row.variation_3, color: "#ffffff"}}>{row.variation_3}</td>
                    <td className="borderless"><i class="bi bi-pencil-fill"></i><i class="bi bi-trash-fill"></i></td>
                  </tr>
                );
            })}
        </tbody>
        </Table>
    )
}
export default RecordTable