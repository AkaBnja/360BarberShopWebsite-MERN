import React, { useEffect } from "react";
import "./invoice.css";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";
import MetaData from "../layout/MetaData";
import { useOrderDetailsQuery } from "../../redux/api/orderApi";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "../../styles.css";

const Invoice = () => {
  const params = useParams();
  const { data, isLoading, error } = useOrderDetailsQuery(params?.id);
  const order = data?.order || {};

  const { shippingInfo, orderItems, paymentInfo, user } = order;

  useEffect(() => {
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error]);

  const handleDownload = () => {
    const input = document.getElementById("order_invoice");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();

      const pdfWidth = pdf.internal.pageSize.getWidth();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, 0);
      pdf.save(`invoice_${order?._id}.pdf`);
    });
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <MetaData title={"Order Invoice"} />
      <div className="order-invoice my-5 mx-4">
        <div className="row d-flex justify-content-center mb-5">
          <button className="btn btn-success col-md-5" onClick={handleDownload}>
            <i className="fa fa-print"></i> Descargar factura
          </button>
        </div>
        <div id="order_invoice" className="p-3 border border-secondary">
          <header className="clearfix">
            <div id="logo">
              <img src="/images/invoice-logo.png" alt="Company Logo" />
            </div>
            <h1>FACTURA # {order?._id}</h1>
            <div id="company" className="clearfix">
              <div>360BarberShop</div>
              <div>
                Avenida Tobalaba 1600
                <br />
                8320000, Santiago
              </div>
              <div>(+56 9) 1234 5678</div>
              <div>
                <a href="mailto:info@shopit.com">info@360BarberShop.com</a>
              </div>
            </div>
            <div id="project" className="w-10">
              <div>
                <span>NOMBRE</span> {user?.name}
              </div>
              <div>
                <span>EMAIL</span> {user?.email}
              </div>
              <div>
                <span>NUMERO</span> {shippingInfo?.phoneNo}
              </div>
              <div>
                <span>DIRECCIÓN</span>
                {shippingInfo?.address}, {shippingInfo?.city},{" "}
                {shippingInfo?.zipCode}, {shippingInfo?.country}
              </div>
              <div>
                <span>FECHA</span>{" "}
                {new Date(order?.createdAt).toLocaleString("en-US")}
              </div>
              <div>
                <span>ESTADO</span> {paymentInfo?.status}
              </div>
            </div>
          </header>
          <main>
            <table className="mt-5">
              <thead>
                <tr>
                  <th className="service">ID</th>
                  <th className="desc">NOMBRE</th>
                  <th>PRECIO</th>
                  <th>QTY</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {orderItems?.map((item) => (
                  <tr>
                    <td className="service">{item?.product}</td>
                    <td className="desc">{item?.name}</td>
                    <td className="unit">${item?.price}</td>
                    <td className="qty">{item?.quantity}</td>
                    <td className="total">${item?.price * item?.quantity}</td>
                  </tr>
                ))}

                <tr>
                  <td colspan="4">
                    <b>SUBTOTAL</b>
                  </td>
                  <td className="total">${order?.itemsPrice}</td>
                </tr>

                <tr>
                  <td colspan="4">
                    <b>TAX 15%</b>
                  </td>
                  <td className="total">${order?.taxAmount}</td>
                </tr>

                <tr>
                  <td colspan="4">
                    <b>ENVIO</b>
                  </td>
                  <td className="total">${order?.shippingAmount}</td>
                </tr>

                <tr>
                  <td colspan="4" className="grand total">
                    <b>GRAN TOTAL</b>
                  </td>
                  <td className="grand total">${order?.totalAmount}</td>
                </tr>
              </tbody>
            </table>
            <div id="notices">
              <div className="text-lg mb-2">AVISO:</div>
              <div className="notice mb-2">
                Se aplicará un cargo financiero del 1,5% sobre los saldos
                impagos después 30 dias.
              </div>
            </div>
          </main>
          <footer>
            La factura fue creada en una computadora y es válida sin la firma.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
