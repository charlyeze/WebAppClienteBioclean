import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import columns from "./data/columns";
import barreras from "./data/barreras";
import data from "./data/mock2.json";
import { formatoFecha } from "./utilities/functions";

// Ejemplo lectura Qr
// Razon Social - id cliente - nombre barrera - numero estacion - cantidad estacion
//CLIENTE PRUEBA|63e2ee7d2de3de451532a660|barrera1|1|3
const resultScan = "CLIENTE PRUEBA|63e2ee7d2de3de451532a660|barreraluz2|1|5";

function App() {
  const result = resultScan.split("|"); // separa en array
  const barrera = result[2];
  const estacion = result[3];
  const tableColumns = columns[barrera];

  const getClass = (type, value) => {
    if (type === "Boolean") {
      return value ? "text-success" : "text-danger";
    }
    if (type === "String") {
      return value == "S/N"
        ? "badge text-bg-secondary"
        : "badge text-bg-danger";
    }
    return;
  };

  const getValue = (type, value) => {
    if (type === "Boolean") {
      return value ? "SI" : "NO";
    }
    if (type === "Date") {
      return formatoFecha(value);
    }
    return value;
  };

  return (
    <>
      <div className="table-responsive card border-success mb-3">
        <h4 className="card-body bg-transparent border-success text-success">{barreras[barrera]}</h4>
        <h5 className="m-1">Estación N° {estacion}</h5>
        <table className="table text-center table-striped">
          <thead>
            <tr>
              {tableColumns.map((column) => (
                <th key={column.propierty}>
                  <span className="text-secondary">{column.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.docs.map((row, indexRow) => (
              <tr key={indexRow}>
                {tableColumns.map((column, indexColumn) => (
                  <td
                    className={getClass(column.type, row[column.property])}
                    key={indexColumn}>
                    <span>{getValue(column.type, row[column.property])}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div/>
      <div className="pe-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default App;
