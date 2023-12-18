import React from "react";
import MetaData from "../layout/MetaData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { caluclateOrderCost } from "../../helpers/helpers";
import CheckoutSteps from "./CheckoutSteps";

const ConfirmOrder = () => {
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const { itemsPrice, shippingPrice, taxPrice, totalPrice } =
    caluclateOrderCost(cartItems);

  return (
    <>
      <MetaData title={"Confirm Order Info"} />
      <CheckoutSteps shipping confirmOrder />
      <div className="row d-flex justify-content-between px-8">
        <div className="col-12 col-lg-8 mt-5 order-confirm mb-12">
          <h4 className="mb-3 text-2xl">Datos de envío</h4>
          <p className="text-lg">
            <b>Nombre:</b> {user?.name}
          </p>
          <p className="text-lg">
            <b>Número telefónico:</b> {shippingInfo?.phoneNo}
          </p>
          <p className="mb-4 text-lg">
            <b>Dirección:</b> {shippingInfo?.address}, {shippingInfo?.city},{" "}
            {shippingInfo?.zipCode}, {shippingInfo?.country}
          </p>

          <hr />
          <h4 className="mt-4 mb-4 text-2xl">Artículos de su carro:</h4>

          {cartItems?.map((item, index) => (
            <div key={index} className="cart-item my-1">
              <div className="mt-3 mb-3 row flex justify-between items-center">
                <div className="col-4 col-lg-2">
                  <img src={item?.image} alt="Laptop" height="45" width="65" />
                </div>

                <div className="col-5 col-lg-6">
                  <Link to={`/product/${item.product}`}>{item?.name}</Link>
                </div>

                <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                  <p>
                    {item?.quantity} x ${item?.price} ={" "}
                    <b>${(item?.quantity * item.price).toFixed(2)}</b>
                  </p>
                </div>
              </div>

              {/* Condición para renderizar hr solo si no es el último elemento */}
              {index !== cartItems.length - 1 && <hr key={`hr-${index}`} />}
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-3 my-4">
          <div id="order_summary">
            <h4 className="text-2xl mb-3">Resumen del pedido</h4>
            <hr className="mb-3" />
            <p className="mb-2">
              Subtotal:{" "}
              <span className="order-summary-values">${itemsPrice}</span>
            </p>
            <p className="mb-2">
              Shipping:{" "}
              <span className="order-summary-values">${shippingPrice}</span>
            </p>
            <p className="mb-3">
              Tax: <span className="order-summary-values">${taxPrice}</span>
            </p>

            <hr className="mb-3" />

            <p className="mb-3">
              Total: <span className="order-summary-values">${totalPrice}</span>
            </p>

            <hr />
            <Link
              to="/payment_method"
              id="checkout_btn"
              className="btn btn-primary w-100"
            >
              Proceder al pago
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
