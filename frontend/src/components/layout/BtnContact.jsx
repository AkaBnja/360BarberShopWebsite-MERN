import React from "react";
import { Button } from "semantic-ui-react";
import ImgContact from "../../assets/btnContactImg.jpg";

export function Location() {
  return (
    <div className="my-14 p-4 flex flex-col items-center">
      <div className="bg-zinc-950 max-w-[760px] w-full rounded-2xl flex flex-col items-center px-6 gap-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-6 md:mt-8 lg:mt-10 pt-4 text-center">
            ¿Deseas contactarnos? ¡Escríbenos aquí!
          </h1>
          <Button
            icon
            href="/contact"
            className="mt-4 w-full md:w-48 h-12 transform hover:scale-105 transition-transform duration-300"
            style={{
              background: "linear-gradient(to bottom, #981E20, #4D0002)",
              border: "none",
              boxShadow: "none",
              color: "#fff",
            }}
          >
            ESCRIBENOS AQUÍ
          </Button>
        </div>
        <div className="flex items-center mt-4 pb-8">
          <img src={ImgContact} alt="Contact" className="w-full md:w-[500px] rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Location;