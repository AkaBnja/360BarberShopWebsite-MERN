import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ shipping, confirmOrder, payment }) => {
  return (
    <div className="checkout-progress d-flex justify-content-center mt-5">
      {shipping ? (
        <Link to="/shipping" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Envío</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" className="float-right" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Envío</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {confirmOrder ? (
        <Link to="/confirm_order" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Confirmar pedido</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" className="float-right" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Confirmar pedido</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {payment ? (
        <Link to="/payment_method" className="float-right">
          <div className="triangle2-active"></div>
          <div className="step active-step">Pago</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="#!" className="float-right" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Pago</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}
    </div>
  );
};

export default CheckoutSteps;
