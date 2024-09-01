import PropTypes from "prop-types";

import columns from "../data/columns";
import barreras from "../data/barreras";
import { formatoFecha } from "../utilities/functions";

const Tabla = ({ data, result }) => {
  const { barrera, estacion } = result;
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

  return (
    <div className="card m-3 shadow">
      <h2 className="p-2 text-uppercase">
        <span className="badge text-bg-primary ms-1">{barreras[barrera]}</span>
      </h2>
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
  );
};

Tabla.propTypes = {
  data: PropTypes.shape({
    docs: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  result: PropTypes.shape({
    barrera: PropTypes.string.isRequired,
    estacion: PropTypes.string.isRequired,
  }).isRequired,
};

export default Tabla;
