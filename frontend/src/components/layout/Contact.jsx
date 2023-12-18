import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import backgroundImage from "../../assets/backgroundContact.png";
import Location from "./homeComponents/Location";

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // Configurar EmailJs
        "",
        "",
        form.current,
        ""
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsFormSubmitted(true);
          resetForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    form.current.reset();
  };

  const handleCloseAlert = () => {
    setIsFormSubmitted(false);
  };

  return (
    <>
      <section className="h-[75vh] lg:h-[700px] relative w-full flex justify-center">
        <div className="absolute inset-0 z-0">
          <img
            className="object-cover w-full h-full"
            src={backgroundImage}
            alt="Fondo Contacto"
          />
          <div className="h-[75vh] lg:h-[700px] bg-black/80 absolute top-0 left-0 w-full" />
        </div>
        <div className="z-10 mt-12">
          <h1 className="text-white font-bold text-7xl drop-shadow-2xl text-center">
            Contáctanos
          </h1>
          <div className="py-4 px-8 lg:w-[420px] rounded-2xl bg-white mt-8 shadow-xl shadow-slate-800">
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" mx-auto w-full max-w-md text-black font-bold"
            >
              <div className="mb-4">
                <label htmlFor="nombre" className="block pb-2 text-lg">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Nombre..."
                  name="user_name"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block pb-2 text-lg">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Correo electronico..."
                  name="user_email"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="telefono" className="block pb-2 text-lg">
                  Teléfono:
                </label>
                <input
                  type="number"
                  id="telefono"
                  name="user_phone"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                  placeholder="Ej: +56 9 1234 5678"
                  required
                />
              </div>

              <div className="mb-2">
                <label htmlFor="mensaje" className="block pb-2 text-lg">
                  Mensaje:
                </label>
                <textarea
                  id="mensaje"
                  placeholder="Mensaje..."
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-md bg-gray-100"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="ENVIAR"
                  className="mt-4 w-40 h-10 transform hover:scale-105 transition-transform duration-300 rounded-md"
                  style={{
                    background: "linear-gradient(to bottom, #981E20, #4D0002)",
                    border: "none",
                    boxShadow: "none",
                    color: "#fff",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {isFormSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-lg font-bold mb-2">¡Formulario Enviado!</p>
            <p className="text-sm">
              Gracias por ponerte en contacto con nosotros.
            </p>
            <button
              onClick={handleCloseAlert}
              className="mt-4 px-3 py-2 bg-gray-300 text-gray-800 rounded-md"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Location />
    </>
  );
};

export default Contact;
