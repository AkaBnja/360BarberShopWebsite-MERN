import React from "react";
import { Button } from "semantic-ui-react";

export function Location() {
  const iframeStyle = {
    border: "0",
  };

  return (
    <div className="my-14 px-4 md:px-0 max-w-screen-xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-1 text-center">
        Nuestra sucursal
      </h1>
      <p className="text-lg md:text-2xl mt-2 text-black text-center mb-4">
        ¿Deseas visitarnos? Agenda tu hora y visítanos en nuestra sucursal.
      </p>
      <iframe
        title="iframe"
        className="rounded-3xl w-full md:w-96 lg:w-3/4 xl:w-4/5 mx-auto shadow-2xl shadow-slate-600"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.668649055286!2d-70.54977552339898!3d-33.587951504568686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d693aac3b5fb%3A0x954c5e758ca468d6!2sAv.%20Tobalaba%201600%2C%208181393%20Puente%20Alto%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1701224523954!5m2!1ses-419!2scl"
        height="500" // Ajusta según tus necesidades
        style={iframeStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="flex justify-center mt-4">
        <Button
          icon
          href="https://wa.me/56930988506"
          className="transform hover:scale-105 transition-transform duration-300"
          style={{
            background: "linear-gradient(to bottom, #981E20, #4D0002)",
            border: "none",
            boxShadow: "none",
            color: "#fff",
          }}
        >
          RESERVA TU HORA
        </Button>
      </div>
    </div>
  );
}

export default Location;
