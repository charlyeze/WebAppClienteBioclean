import PropTypes from "prop-types";

const ButtonScan = ({ onClick }) => {
  return (
    <div className="me-3 ms-3 mt-4 mb-4 d-grid gap-2 d-md-flex justify-content-md-end">
      <button
        className="btn btn-primary me-md-2"
        type="button"
        onClick={onClick}
      >
        Escanear Qr
      </button>
    </div>
  );
};

ButtonScan.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonScan;
