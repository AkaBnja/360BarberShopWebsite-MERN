import React from "react";
import { Icon, Button } from "semantic-ui-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-900 flex flex-col md:flex-row gap-y-5 z-30 items-center justify-center pb-4">
        {/* bg-sky-950*/}
        <div className="w-full md:w-1/4 mt-3 flex justify-center md:justify-start items-center">
          <img src="/images/logoBarber.png" className="w-48 h-48" alt="" />
        </div>
        <div className="flex flex-col md:flex-row md:justify-around items-center md:items-start md:w-3/4">
          <div className="text-center md:text-left">
            <h3 className="text-white text-xl font-bold">UBICACION:</h3>
            <h4 className="text-white mt-3 font-bold">Avenida Tobalaba 1600</h4>
            <div className="flex gap-3 justify-center w-full mt-4">
              <Button
                icon
                href=""
                style={{
                  background: "linear-gradient(to bottom, #981E20, #4D0002)",
                  border: "none",
                  boxShadow: "none",
                  color: "#fff",
                }}
              >
                <Icon name="facebook" />
              </Button>
              <Button
                icon
                href=""
                style={{
                  background: "linear-gradient(to bottom, #981E20, #4D0002)",
                  border: "none",
                  boxShadow: "none",
                  color: "#fff",
                }}
              >
                <Icon name="instagram" />
              </Button>
            </div>
          </div>
          <div className="text-center mt-14 md:mt-0">
            <h3 className="text-white text-xl font-bold">HORARIO:</h3>
            <h4 className="text-white mt-3 font-bold">
              Lunes a Viernes 9:00am - 7:00pm
            </h4>
            <h4 className="text-white mt-2.5 font-bold">
              Sábados 12:00am - 6:00pm
            </h4>
            <h4 className="text-white mt-2.5 font-bold">
              Domingos 12:00am - 4:00pm
            </h4>
          </div>
          <div className="mt-14 flex items-center justify-center">
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
      </footer>
      <div className="h-14 items-center flex justify-center w-full bg-zinc-950">
        <a className="font-bold text-gray-400	 hover:text-white" href="/">
          ©2023 360BarberShop, All Rights Reserved.
        </a>
      </div>
    </>
  );
};

export default Footer;
