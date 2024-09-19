import PropTypes from "prop-types";

import { Scanner } from "@yudiel/react-qr-scanner";

const ScanQr = ({ setScanResult }) => {
  const onScan = (result) => result[0] && setScanResult(result[0]?.rawValue);
  return (
    <div className="border-dark position-absolute content-center w-100 shadow">
      <Scanner onScan={onScan}/>
    </div>
  );
};

ScanQr.propTypes = {
  setScanResult: PropTypes.func.isRequired,
};

export default ScanQr;
