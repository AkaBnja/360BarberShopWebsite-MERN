import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../redux/api/productsApi";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";
import StarRatings from "react-star-ratings";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../redux/features/cartSlice";
import MetaData from "../layout/MetaData";
import NewReview from "../reviews/NewReview";
import ListReviews from "../reviews/ListReviews";
import NotFound from "../layout/NotFound";
import "../../styles.css";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState("");

  const { data, isLoading, error, isError } = useGetProductDetailsQuery(
    params?.id
  );
  const product = data?.product;
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    setActiveImg(
      product?.images[0]
        ? product?.images[0]?.url
        : "/images/default_product.png"
    );
  }, [product]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message);
    }
  }, [isError]);

  const increseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber >= product?.stock) return;

    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreseQty = () => {
    const count = document.querySelector(".count");

    if (count.valueAsNumber <= 1) return;

    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  const setItemToCart = () => {
    const cartItem = {
      product: product?._id,
      name: product?.name,
      price: product?.price,
      image: product?.images[0]?.url,
      stock: product?.stock,
      quantity,
    };

    dispatch(setCartItem(cartItem));
    toast.success("Artículo agregado al carrito");
  };

  if (isLoading) return <Loader />;

  if (error && error?.status === 404) {
    return <NotFound />;
  }
  return (
    <>
      <MetaData title={product?.name} />
      <div className="row d-flex justify-content-around mb-20">
        <div className="col-12 col-lg-5 img-fluid" id="product_image">
          <div className="p-3">
            <img
              className="d-block w-100"
              src={activeImg}
              alt={product?.name}
              width="340"
              height="390"
            />
          </div>
          <div className="row justify-content-start mt-5">
            {product?.images?.map((img) => (
              <div className="col-2 ms-4 mt-2">
                <a role="button">
                  <img
                    className={`d-block border rounded p-3 cursor-pointer ${
                      img.url === activeImg ? "!border-red-600" : ""
                    } `}
                    height="100"
                    width="100"
                    src={img?.url}
                    alt={img?.url}
                    onClick={(e) => setActiveImg(img.url)}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="col-12 col-lg-5 mt-5 px-8">
          <h3 className="text-2xl">{product?.name}</h3>
          <p id="product_id" className="text-sm mb-2">
            Product # {product?._id}
          </p>

          <hr className="mb-2" />

          <div className="d-flex mb-2 items-center">
            <StarRatings
              rating={product?.ratings}
              starRatedColor="#ffb829"
              numberOfStars={5}
              name="rating"
              starDimension="24px"
              starSpacing="1px"
            />
            <span id="no-of-reviews" className="pt-1 ps-2 text-lg">
              ({product?.numOfReviews} Reseñas)
            </span>
          </div>
          <hr className="mb-2" />

          <p id="product_price">${product?.price}</p>
          <div className="stockCounter d-inline">
            <span className="btn btn-danger minus" onClick={decreseQty}>
              -
            </span>
            <input
              type="number"
              className="form-control count d-inline"
              value={quantity}
              readonly
            />
            <span className="btn btn-primary plus" onClick={increseQty}>
              +
            </span>
          </div>
          <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ms-4"
            disabled={product?.stock <= 0}
            onClick={setItemToCart}
            style={{
              background: "linear-gradient(to bottom, #981E20, #4D0002)",
              border: "none",
              boxShadow: "none",
              color: "#fff",
            }}
          >
            Añadir al carrito
          </button>

          <hr className="mb-2" />

          <p className="mb-2">
            Estado:{" "}
            <span
              id="stock_status"
              className={product?.stock > 0 ? "greenColor" : "redColor"}
            >
              {product?.stock > 0 ? "En Stock" : "Agotado"}
            </span>
          </p>

          <hr className="mb-2" />

          <h4 className="text-xl">Descripción:</h4>
          <p className="text-base mb-2">{product?.description}</p>
          <hr className="mb-2" />
          <p id="product_seller mb-3">
            Vendedor: <strong>{product?.seller}</strong>
          </p>

          {isAuthenticated ? (
            <NewReview productId={product?._id} />
          ) : (
            <div className="alert alert-danger my-5" type="alert">
              Inicie sesión para publicar su reseña.
            </div>
          )}
        </div>
      </div>
      {product?.reviews?.length > 0 && (
        <ListReviews reviews={product?.reviews} />
      )}
    </>
  );
};

export default ProductDetails;
