import React from "react";

const NotFound = () => {
  return (
    <div className="mt-8">
      <div className="row">
        <div className="d-flex justify-content-center page-not-found-wrapper mb-4">
          <img
            src="/images/error404.png"
            height="450"
            width="450"
            alt="404_not_found"
          />
        </div>
        <h5 className="text-center text-2xl">
          Página no encontrada. Ir a <a href="/" className="text-red-700 hover:text-slate-500">Página principal</a>
        </h5>
      </div>
    </div>
  );
};

export default NotFound;
