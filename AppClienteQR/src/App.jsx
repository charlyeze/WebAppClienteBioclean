import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import columns from "./data/columns";
import barreras from "./data/barreras";
// Ejemplo lectura Qr
// Razon Social - id cliente - nombre barrera - numero estacion - cantidad estacion
//CLIENTE PRUEBA|63e2ee7d2de3de451532a660|barrera1|1|3
const resultScan = "CLIENTE PRUEBA|63e2ee7d2de3de451532a660|barreraluz5|1|5";

function App() {
  const result = resultScan.split('|'); // separa en array
  const barrera = result[2];
  const estacion = result[3];
  const tableColumns = columns[barrera];
  console.log('tableColumns', tableColumns);
  
  return (
    <>
      <h3>{barreras[barrera]}</h3>
      <br />
      <h5>Estación N° {estacion}</h5>
      <hr />
      <table className="table text-center table-hover table-responsive">
        <thead>
          <tr>
            <th>
              <span className="text-secondary"> FECHA</span>
            </th>
            <th>
              <span className="text-secondary"> NOVEDAD 1</span>
            </th>
            <th>
              <span className="text-secondary"> NOVEDAD 2</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span> 25/08/2024</span>
            </td>
            <td>
              <span className="badge bg-secondary"> S/N</span>
            </td>
            <td>
              <span className="badge bg-secondary"> S/N</span>
            </td>
          </tr>
          <tr>
            <td>
              <span> 25/08/2024 </span>
            </td>
            <td>
              <span className="badge bg-secondary"> S/N</span>
            </td>
            <td>
              <span className="badge bg-secondary"> S/N</span>
            </td>
          </tr>
          <tr>
            <td>
              <span> 26/08/2024</span>
            </td>
            <td>
              <span className="badge bg-secondary"> S/N</span>
            </td>
            <td>
              <span className="badge bg-danger"> Cebo Sustraido</span>
            </td>
          </tr>
          <tr>
            <td>
              <span> 26/08/2024 </span>
            </td>
            <td>
              <span className="badge bg-danger"> Roto </span>
            </td>
            <td>
              <span className="badge bg-danger"> Tapado </span>
            </td>
          </tr>
          <tr>
            <td>
              <span> 26/08/2024 </span>
            </td>
            <td>
              <span className="badge bg-secondary"> S/N</span>
            </td>
            <td>
              <span className="badge bg-danger"> Roto </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="pe-4">   
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
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
