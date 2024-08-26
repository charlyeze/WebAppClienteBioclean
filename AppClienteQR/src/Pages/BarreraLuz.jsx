
function BarreraLuz() {
  return (
    <>
      <h3>Barrera Luz N°</h3>
      <br />
      <h5>Estación N°</h5>
      <hr />
    <div className="p-4 table-responsive">
        <table className="table table-sm text-center table-hover">
            <thead>
                <tr>
                    <th><span className="text-secondary"> FECHA <span className="fontBold mb-1"></span></span></th>
                    <th><span className="text-secondary"> CONTROLADO <span className="fontBold mb-1"></span></span></th>
                    <th><span className="text-secondary"> CAMBIO PLACA <span className="fontBold mb-1"></span></span></th>
                    <th><span className="text-secondary"> VERIFICACIÓN <span className="fontBold mb-1"></span></span></th>
                    <th><span className="text-secondary"> EQUIPO APAGADO <span className="fontBold mb-1"></span></span></th>
                    <th><span className="text-secondary"> MOSCA <span className="fontBold mb-1"></span></span></th>
                    <th><span className="text-secondary"> INSECTO <span className="fontBold mb-1"></span></span></th>
                    <th><span className="text-secondary"> POLILLA <span className="fontBold mb-1"></span></span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span>26/08/2024 </span></td><td><span className="fontBold text-danger"> NO </span></td><td><span className="fontBold text-danger"> NO </span></td><td><span className="fontBold text-success"> SI </span></td><td><span className="fontBold text-danger"> NO </span></td>
                </tr>
            </tbody>
        </table>
    </div>
</>
  )
}
