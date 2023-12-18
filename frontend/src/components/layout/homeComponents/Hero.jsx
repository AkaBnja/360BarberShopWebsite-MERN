import React from "react";
import { Button } from "semantic-ui-react";
import backgroundImage from "../../../assets/backgroundHero.jpg";

const Hero = () => {
  return (
    <section className="h-[75vh] relative w-full flex justify-center items-center">
      <div className="absolute inset-0 z-0">
        <img
          className="object-cover w-full h-full"
          src={backgroundImage}
          alt="Fondo Hero"
        />
        <div className="h-[75vh] bg-black/80 absolute top-0 left-0 w-full" />
      </div>
      <div className="z-10 flex flex-col items-center text-center">
        <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl mb-4 md:mb-6 lg:mb-8">
          Lucir lo mejor <br /> que puedas nunca <br /> pasa de moda...
        </h1>
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
    </section>
  );
};

export default Hero;
