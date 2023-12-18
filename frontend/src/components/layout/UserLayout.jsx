import React from "react";
import SideMenu from "./SideMenu";

const UserLayout = ({ children }) => {
  const menuItems = [
    {
      name: "Perfil",
      url: "/me/profile",
      icon: "fas fa-user",
    },
    {
      name: "Actualización del perfil",
      url: "/me/update_profile",
      icon: "fas fa-user",
    },
    {
      name: "Subir Avatar",
      url: "/me/upload_avatar",
      icon: "fas fa-user-circle",
    },
    {
      name: "Actualizar contraseña",
      url: "/me/update_password",
      icon: "fas fa-lock",
    },
  ];

  return (
    <div className="mb-20">
      <div className="mt-20 mb-2 py-4">
        <h2 className="text-center fw-bolder text-3xl">Ajustes de usuario</h2>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12 col-lg-3">
            <SideMenu menuItems={menuItems} />
          </div>
          <div className="col-12 col-lg-8 user-dashboard">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
