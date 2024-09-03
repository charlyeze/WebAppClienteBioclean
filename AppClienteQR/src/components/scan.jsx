import PropTypes from "prop-types";

import { Scanner } from "@yudiel/react-qr-scanner";

const ScanQr = ({ setScanResult }) => {
  const onScan = (result) => result[0] && setScanResult(result[0]?.rawValue);
  return (
      <div className="card">
          <Scanner onScan={onScan} />
        <img src="/logo.png" className="card-img-bottom" alt="Bioclean"></img>
      </div>
  );
};

ScanQr.propTypes = {
  setScanResult: PropTypes.func.isRequired,
};

export default ScanQr;
