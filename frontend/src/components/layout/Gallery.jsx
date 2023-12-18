import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../../styles.css";
import cutOne from "../../assets/cutOne.jpeg";
import cutTwo from "../../assets/cutFour.jpg";
import cutThree from "../../assets/cutThree.jpg";
import cutFour from "../../assets/cutTwo.jpeg";
import cutFive from "../../assets/cutFive.jpg";
import cutSix from "../../assets/cutSix.jpg";

const Gallery = () => {
  const images = [cutOne, cutTwo, cutThree, cutFour, cutFive, cutSix];

  return (
    <>
      <h1 className="text-black font-bold text-6xl drop-shadow-2xl text-center !mt-12">
        Galeria de trabajos
      </h1>
      <p className="text-2xl text-black text-center px-4 mt-8">
        Descubre nuestro estilo en la Galería. Desde cortes clásicos hasta
        tendencias modernas, cada imagen cuenta la historia de la excelencia en
        nuestra barbería. Encuentra inspiración para tu próximo look.
        ¡Bienvenido al arte de la barbería!
      </p>
      <div className="p-8">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="15px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="rounded-2xl"
                style={{ width: "100%", display: "block", maxHeight: "600px" }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
