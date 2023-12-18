import React from "react";
import backgroundImage from "../../../assets/backgroundServices.jpg";
import serviceOne from "../../../assets/corteBarba.png";
import serviceTwo from "../../../assets/cortePelo.png";
import serviceThree from "../../../assets/navaja.png";
import serviceFour from "../../../assets/corteNiño.png";

const Services = () => {
  const serviceStyle = {
    background: "rgba(240, 240, 240, 0.75)",
  };

  return (
    <section className="relative w-full flex justify-center">
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          src={backgroundImage}
          alt="Fondo Hero"
        />
        <div className="h-full bg-black/80 absolute top-0 left-0 w-full" />
      </div>
      <div className="text-center z-10 mt-16 px-4">
        <h1 className="text-white font-bold text-4xl md:text-6xl drop-shadow-2xl text-center">
          Nuestros Servicios
        </h1>
        <p className="text-lg md:text-2xl mt-2 text-white">
          Trabajamos potenciando a cada cliente según el perfil de cada uno,
          siempre en conjunto de todos nuestros conocimientos y los mejores
          productos.
        </p>
        <div className="w-full h-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap gap-y-8 font-bold">
            <div
              className="h-72 w-full md:w-64 mx-auto rounded-2xl flex flex-col items-center mb-8"
              style={serviceStyle}
            >
              <h3 className="text-xl md:text-2xl mt-4">Cortes de barba</h3>
              <img
                src={serviceOne}
                alt="Cortes de barba"
                className="h-40 w-40 mt-8"
              />
            </div>
            <div
              className="h-72 w-full md:w-64 mx-auto rounded-2xl flex flex-col items-center mb-8"
              style={serviceStyle}
            >
              <h3 className="text-xl md:text-2xl mt-4">Cortes de pelo</h3>
              <img
                src={serviceTwo}
                alt="Cortes de pelo"
                className="h-40 w-40 mt-8"
              />
            </div>
            <div
              className="h-72 w-full md:w-64 mx-auto rounded-2xl flex flex-col items-center mb-8"
              style={serviceStyle}
            >
              <h3 className="text-xl md:text-2xl mt-4">Afeitado</h3>
              <img
                src={serviceThree}
                alt="Afeitado"
                className="h-40 w-40 mt-8"
              />
            </div>
            <div
              className="h-72 w-full md:w-64 mx-auto rounded-2xl flex flex-col items-center mb-8"
              style={serviceStyle}
            >
              <h3 className="text-xl md:text-2xl mt-4">Cortes de pelo a niños</h3>
              <img
                src={serviceFour}
                alt="Cortes de pelo a niños"
                className="h-40 w-40 mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;