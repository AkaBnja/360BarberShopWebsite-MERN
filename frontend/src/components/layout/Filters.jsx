import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPriceQueryParams } from "../../helpers/helpers";
import { PRODUCT_CATEGORIES } from "../../constants/constants";
import StarRatings from "react-star-ratings";
import "../../styles.css";

const Filters = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const navigate = useNavigate();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    searchParams.has("min") && setMin(searchParams.get("min"));
    searchParams.has("max") && setMax(searchParams.get("max"));
  }, []);

  // Handle Category & Ratings filter
  const handleClick = (checkbox) => {
    const checkboxes = document.getElementsByName(checkbox.name);

    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
    });

    if (checkbox.checked === false) {
      // Delete filter from query
      if (searchParams.has(checkbox.name)) {
        searchParams.delete(checkbox.name);
        const path = window.location.pathname + "?" + searchParams.toString();
        navigate(path);
      }
    } else {
      // Set new filter value if already there
      if (searchParams.has(checkbox.name)) {
        searchParams.set(checkbox.name, checkbox.value);
      } else {
        // Append new filter
        searchParams.append(checkbox.name, checkbox.value);
      }

      const path = window.location.pathname + "?" + searchParams.toString();
      navigate(path);
    }
  };

  // Handle price filter
  const handleButtonClick = (e) => {
    e.preventDefault();

    searchParams = getPriceQueryParams(searchParams, "min", min);
    searchParams = getPriceQueryParams(searchParams, "max", max);

    const path = window.location.pathname + "?" + searchParams.toString();
    navigate(path);
  };

  const defaultCheckHandler = (checkboxType, checkboxValue) => {
    const value = searchParams.get(checkboxType);
    if (checkboxValue === value) return true;
    return false;
  };

  return (
    <div className="border p-3 filter rounded-3xl	mb-8 shadow shadow-slate-600">
      <h3 className="text-2xl mb-2">Filtros</h3>
      <hr className="mb-3" />
      <h5 className="filter-heading mb-3 text-lg">Precio</h5>
      <form id="filter_form" className="px-2 mb-4" onSubmit={handleButtonClick}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Min ($)"
              name="min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Max ($)"
              name="max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary w-24 h-[34px]"
              style={{
                background: "linear-gradient(to bottom, #981E20, #4D0002)",
                border: "none",
                boxShadow: "none",
                color: "#fff", // Cambia el color del texto según tus necesidades
              }}
            >
              Buscar
            </button>
          </div>
        </div>
      </form>
      <hr className="mb-3" />
      <h5 className="mb-3 text-lg">Categoria</h5>

      {PRODUCT_CATEGORIES?.map((category) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="category"
            id="check4"
            value={category}
            defaultChecked={defaultCheckHandler("category", category)}
            onClick={(e) => handleClick(e.target)}
          />
          <label className="form-check-label" for="check4">
            {category}
          </label>
        </div>
      ))}

      <hr className="mt-3 mb-3" />
      <h5 className="mb-3 text-lg">Calificaciones</h5>

      {[5, 4, 3, 2, 1].map((rating) => (
        <div className="form-check flex justify-start gap-2 items-center">
          <input
            className="form-check-input"
            type="checkbox"
            name="ratings"
            id="check7"
            value={rating}
            defaultChecked={defaultCheckHandler("ratings", rating?.toString())}
            onClick={(e) => handleClick(e.target)}
          />
          <label className="form-check-label" for="check7">
            <StarRatings
              rating={rating}
              starRatedColor="#ffb829"
              numberOfStars={5}
              name="rating"
              starDimension="21px"
              starSpacing="1px"
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filters;
