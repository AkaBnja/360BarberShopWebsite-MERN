import React from "react";
import SideMenu from "./SideMenu";

const AdminLayout = ({ children }) => {
  const menuItems = [
    {
      name: "Panel",
      url: "/admin/dashboard",
      icon: "fas fa-tachometer-alt",
    },
    {
      name: "Nuevo producto",
      url: "/admin/product/new",
      icon: "fas fa-plus",
    },
    {
      name: "Productos",
      url: "/admin/products",
      icon: "fab fa-product-hunt",
    },
    {
      name: "Pedidos",
      url: "/admin/orders",
      icon: "fas fa-receipt",
    },
    {
      name: "Usuarios",
      url: "/admin/users",
      icon: "fas fa-user",
    },
    {
      name: "Reseñas",
      url: "/admin/reviews",
      icon: "fas fa-star",
    },
  ];

  return (
    <div className=" mb-20">
      <div className="mt-2 mb-4 py-4">
        <h2 className="text-center fw-bolder text-3xl">Panel de administración</h2>
      </div>

      <div className="row justify-content-around">
        <div className="col-12 col-lg-3">
          <SideMenu menuItems={menuItems} />
        </div>
        <div className="col-12 col-lg-8 user-dashboard">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
