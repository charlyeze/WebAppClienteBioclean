const Loading = () => {
  return (
    <div className="d-flex justify-content-center m-5 text-primary">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );
};

export default Loading;
