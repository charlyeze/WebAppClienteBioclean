import PropTypes from "prop-types";

import { Scanner } from "@yudiel/react-qr-scanner";

const ScanQr = ({ setScanResult }) => {
  const onScan = (result) => result[0] && setScanResult(result[0]?.rawValue);
  return <Scanner onScan={onScan} />;
};

ScanQr.propTypes = {
  setScanResult: PropTypes.func.isRequired,
};

export default ScanQr;
