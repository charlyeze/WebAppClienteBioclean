const Loading = () => (
  <div className="poposition-absolute">
    <div className="d-flex text-primary content-center">
      <div
        style={{ width: "3rem", height: "3rem" }}
        className="spinner-grow"
        role="status"
      >
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  </div>
);

export default Loading;
