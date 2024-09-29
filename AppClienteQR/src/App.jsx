import { useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { capitalizarPrimeraLetra } from "./utilities/functions";
import useAxios from "./hooks/useAxios";

import ScanQr from "./components/scan";
import Tabla from "./components/tabla";
import ButtonScan from "./components/button";
import Pagination from "./components/pagination";
import Loading from "./components/loading";

// Ejemplo lectura Qr
// Razon Social - id cliente - nombre barrera - numero estacion - cantidad estacion
// const resultScan = "PROMAIZ SA|61e7f7fdb505940285fc73b9|barrera1|2|51";

function App() {
  const [scanResult, setScanResult] = useState();
  const [result, setResult] = useState();
  const { data, loading, makeQuery } = useAxios();

  const onClick = () => {
    setResult(undefined);
    setScanResult(undefined);
  };
  const getIsResult = () => scanResult && data && result;
  const handlerSelectPage = (pageCurrent) => {
    makeQuery({
      url: capitalizarPrimeraLetra(result.barrera),
      nBar: result.estacion,
      idCli: result.idCliente,
      params: {
        page: pageCurrent,
      },
    });
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
      {scanResult && data && <ButtonScan onClick={onClick} />}
      {loading && <Loading />}
      {!scanResult && <ScanQr setScanResult={setScanResult} />}
      {getIsResult() && <Tabla result={result} data={data} />}
      {getIsResult() && <Pagination selectPage={handlerSelectPage} {...data} />}
      {!scanResult && (
        <img
          src="./assets/logo.png"
          className="pt-2 w-50 float-end"
          alt="Bioclean"
        ></img>
      )}
    </>
  );
}
export default App;
