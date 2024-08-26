import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <h3>Barrera N°</h3>
      <br />
      <h5>Estación N°</h5>
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
