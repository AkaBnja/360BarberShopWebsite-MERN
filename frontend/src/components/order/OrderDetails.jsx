import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../layout/Loader";
import { toast } from "react-hot-toast";
import MetaData from "../layout/MetaData";
import { useOrderDetailsQuery } from "../../redux/api/orderApi";

const OrderDetails = () => {
  const params = useParams();
  const { data, isLoading, error } = useOrderDetailsQuery(params?.id);
  const order = data?.order || {};

  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    user,
    totalAmount,
    orderStatus,
  } = order;

  const isPaid = paymentInfo?.status === "paid" ? true : false;

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  if (isLoading) return <Loader />;

  return (
    <>
      <MetaData title={"Order Details"} />
      <div className="row d-flex justify-content-center mx-2">
        <div className="col-12 col-lg-9 mt-5 order-details">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-5 mb-4 text-2xl">Detalles de su pedido</h3>
            <a
              className="btn btn-success"
              href={`/invoice/order/${order?._id}`}
            >
              <i className="fa fa-print"></i> Factura
            </a>
          </div>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row">ID</th>
                <td>{order?._id}</td>
              </tr>
              <tr>
                <th scope="row">Estado</th>
                <td
                  className={
                    String(orderStatus).includes("Delivered")
                      ? "greenColor"
                      : "redColor"
                  }
                >
                  <b>{orderStatus}</b>
                </td>
              </tr>
              <tr>
                <th scope="row">Fecha</th>
                <td>{new Date(order?.createdAt).toLocaleString("en-US")}</td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-5 mb-4  text-2xl">Informacion de envio</h3>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row">Nombre</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th scope="row">Número telefónico</th>
                <td>{shippingInfo?.phoneNo}</td>
              </tr>
              <tr>
                <th scope="row">Direccion</th>
                <td>
                  {shippingInfo?.address}, {shippingInfo?.city},{" "}
                  {shippingInfo?.zipCode}, {shippingInfo?.country}
                </td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-5 mb-4  text-2xl">Información de pago</h3>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th scope="row">Estado</th>
                <td className={isPaid ? "greenColor" : "redColor"}>
                  <b>{paymentInfo?.status}</b>
                </td>
              </tr>
              <tr>
                <th scope="row">Metodo de pago</th>
                <td>{order?.paymentMethod}</td>
              </tr>
              <tr>
                <th scope="row">ID Stripe</th>
                <td>{paymentInfo?.id || "Nill"}</td>
              </tr>
              <tr>
                <th scope="row">Total compra</th>
                <td>${totalAmount}</td>
              </tr>
            </tbody>
          </table>

          <h3 className="mt-5 my-4 text-2xl">Productos del pedido:</h3>

          <hr />
          <div className="cart-item my-1">
            {orderItems?.map((item) => (
              <div className="row my-5 flex items-center justify-center ml-16">
                <div className="col-4 col-lg-2">
                  <img
                    src={item?.image}
                    alt={item?.name}
                    height="75"
                    width="95"
                  />
                </div>

                <div className="col-5 col-lg-5 text-xl">
                  <Link to={`/products/${item?.product}`}>{item?.name}</Link>
                </div>

                <div className="col-4 col-lg-2 mt-4 mt-lg-0 text-xl">
                  <p>${item?.price}</p>
                </div>

                <div className="col-4 col-lg-3 mt-4 mt-lg-0 text-xl">
                  <p>{item?.quantity} Piece(s)</p>
                </div>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
