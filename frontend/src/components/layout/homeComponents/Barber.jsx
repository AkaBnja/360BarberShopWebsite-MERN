import React from "react";
import { Button } from "semantic-ui-react";

const Barber = () => {
  return (
    <section className="max-w-[1400px] m-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Imagen en la parte superior en pantallas más pequeñas */}
      <div className="md:order-1">
        <img
          className="rounded-2xl w-full h-full shadow-2xl shadow-slate-600"
          src="https://cdn2.dineroenimagen.com/media/dinero/styles/original/public/images/2023/06/barbero-mexico-ganancias.jpg"
          alt=""
        />
      </div>
      {/* Texto en la parte inferior en pantallas más pequeñas */}
      <div className="md:order-2 flex flex-col h-full justify-center">
        <h3 className="text-6xl font-bold text-black mb-3">Benjamin Mendoza</h3>
        <p className="text-2xl mb-2">
          Su destreza y pasión por su oficio lo convierten en un artista capaz
          de esculpir peinados y barbas con una calidad única. Con manos hábiles
          y un ojo meticuloso para el detalle, Benjamín no solo crea looks
          impecables, sino que también construye relaciones auténticas con sus
          clientes.
        </p>
        <Button
          icon
          href="https://wa.me/56930988506"
          className="transform w-48 h-12 mx-auto hover:scale-105 transition-transform duration-300"
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

export default Barber;
