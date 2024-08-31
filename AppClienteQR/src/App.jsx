import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import columns from "./data/columns";
import barreras from "./data/barreras";
import { capitalizarPrimeraLetra, formatoFecha } from "./utilities/functions";
import useAxios from "./hooks/useAxios";
import { useEffect } from "react";

// Ejemplo lectura Qr
// Razon Social - id cliente - nombre barrera - numero estacion - cantidad estacion
const resultScan =
  "MOLINO CAÑUELAS RIO CUARTO|61e802bdb505940285fc73d5|barrera3|25|25";

function App() {
  const { data, makeQuery } = useAxios();
  const result = resultScan.split("|"); // separa en array
  const idCliente = result[1];
  const barrera = result[2];
  const estacion = result[3];
  const tableColumns = columns[barrera];

  const getClass = (type, value) => {
    if (type === "Boolean") {
      return value ? "text-success" : "text-danger";
    }
    return;
  };

  const getClassSpan = (type, value) => {
    if (type === "String") {
      return value == "S/N"
        ? "badge text-bg-secondary"
        : "badge text-bg-danger";
    }
    return;
  };

  const getValue = (type, value) => {
    if (type === "Boolean") {
      return value ? "✅" : "⛔";
    }
    if (type === "Date") {
      return formatoFecha(value);
    }
    return value;
  };

  useEffect(() => {
    makeQuery({
      url: capitalizarPrimeraLetra(barrera),
      nBar: estacion,
      idCli: idCliente,
    });
  }, []);

  return (
    <>
      <div className="table-responsive card border-primary m-1">
        <h4
          className="card-header bg-transparent border-primary text-uppercase"
          style={{ color: "rgb(135, 208, 2)" }}
        >
          {barreras[barrera]}
        </h4>
        <h5 className="p-2">Estación N° {estacion}</h5>
        <table className="table text-center table-striped">
          <thead>
            <tr>
              {tableColumns.map((column) => (
                <th key={column.property}>
                  <span className="text-secondary">{column.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.docs.map((row, indexRow) => (
              <tr key={indexRow}>
                {tableColumns.map((column, indexColumn) => (
                  <td
                    className={getClass(column.type, row[column.property])}
                    key={indexColumn}
                  >
                    <span
                      className={getClassSpan(column.type, row[column.property])}
                    >
                      {getValue(column.type, row[column.property])}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div />
      <div className="pe-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end ">
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
