import PropTypes from "prop-types";

import { Scanner } from "@yudiel/react-qr-scanner";

const ScanQr = ({ setScanResult }) => {
  const onScan = (result) => result[0] && setScanResult(result[0]?.rawValue);
  return (
    <>
      <Scanner onScan={onScan} />
      <img
        className="w-50 img-fluid position-absolute top-50 start-50 translate-middle"
        src="/logo.png"
        alt="Bioclean"
      ></img>
    </>
  );
};

ScanQr.propTypes = {
  setScanResult: PropTypes.func.isRequired,
};

export default ScanQr;
