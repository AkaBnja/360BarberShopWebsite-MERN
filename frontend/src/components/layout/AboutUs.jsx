import React from "react";
import "../../styles.css";
import BtnContact from "./BtnContact";
import { Button } from "semantic-ui-react";
import backgroundImage from "../../assets/backgroundAboutUs.jpg";

const About = () => {
  return (
    <>
      <section className="h-[60vh] relative w-full flex justify-center items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="object-cover w-full h-full"
            src={backgroundImage}
            alt="Fondo Hero"
          />
          <div className="h-[60vh] bg-black/80 absolute top-0 left-0 w-full" />
        </div>
        <div className="z-10 flex flex-col items-center px-4 md:px-16 lg:px-32">
          <h1 className="text-white font-bold text-4xl md:text-7xl drop-shadow-2xl text-center">
            Sobre Nosotros
          </h1>
          <p className="text-xl md:text-2xl text-white text-center mt-4 md:mt-8">
            Creemos que ir a la barbería debería ser más que un simple quehacer.
            Debería ser una experiencia. Para nosotros es importante que usted
            se haga un excelente corte de cabello, reciba un servicio
            extraordinario y establezca relaciones duraderas en un espacio
            cómodo. Estamos comprometidos a ser un ambiente inclusivo y acogedor
            para cada cliente y miembro de nuestro equipo que ingresa a nuestro
            espacio sin importar género, raza, orientación sexual, religión o
            política. Celebramos la diversidad dentro de nuestra comunidad y
            aspiramos a ser un ejemplo de unidad en 360 BarberShop.
          </p>
          <Button
            icon
            href="https://wa.me/56930988506"
            className="transform hover:scale-105 transition-transform duration-300 mt-4"
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
      <BtnContact />
    </>
  );
};

export default About;
