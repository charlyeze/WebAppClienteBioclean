import { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { capitalizarPrimeraLetra } from "./utilities/functions";
import useAxios from "./hooks/useAxios";

import ScanQr from "./components/scan";
import Tabla from "./components/tabla";
import ButtonScan from "./components/button";

// Ejemplo lectura Qr
// Razon Social - id cliente - nombre barrera - numero estacion - cantidad estacion
// const resultScan ="MOLINO CAÑUELAS RIO CUARTO|61e802bdb505940285fc73d5|barrera3|25|25";
// const resultScan = "PROMAIZ SA|61e7f7fdb505940285fc73b9|barrera1|2|51";

function App() {
  const [scanResult, setScanResult] = useState();
  const [result, setResult] = useState();
  const { data, makeQuery } = useAxios();
  const onClick = () => {
    setResult(undefined);
    setScanResult(undefined);
  };

  const getResult = (scanResult) => {
    const result = scanResult.split("|"); // separa en array
    const idCliente = result[1];
    const barrera = result[2];
    const estacion = result[3];

    setResult({
      idCliente,
      barrera,
      estacion,
    });

    makeQuery({
      url: capitalizarPrimeraLetra(barrera),
      nBar: estacion,
      idCli: idCliente,
    });
  };

  useEffect(() => {
    if (scanResult) getResult(scanResult);
  }, [scanResult]);

  return (
    <>
      {(scanResult && data) && <ButtonScan onClick={onClick} />}
      {!scanResult && <ScanQr setScanResult={setScanResult} />}
      {(scanResult && data && result) && <Tabla result={result} data={data} />}
    </>
  );
}
export default App;
