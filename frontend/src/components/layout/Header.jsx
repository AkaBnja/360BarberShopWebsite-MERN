import React, { useState } from "react";
import { useGetMeQuery } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLazyLogoutQuery } from "../../redux/api/authApi";
import { Icon } from "semantic-ui-react";

const Header = () => {
  const navigate = useNavigate();
  const { isLoading } = useGetMeQuery();
  const [logout] = useLazyLogoutQuery();
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const logoutHandler = () => {
    logout();
    navigate(0);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Menú para pantallas pequeñas */}
      {menuOpen && (
        <>
          <div className="lg:hidden text-white flex flex-col items-center gap-y-20 pt-12 absolute !top-0 left-0 right-0 h-full w-full bg-zinc-950 z-50 opacity-1 text-2xl">
            <div className="flex justify-end">
              <div
                className="text-white text-2xl cursor-pointer"
                onClick={toggleMenu}
              >
                &#x2715;
              </div>
            </div>
            <a href="/" className="hover:text-red-600">
              Inicio
            </a>
            <a href="/products" className="hover:text-red-600">
              Productos
            </a>
            <a href="/gallery" className="hover:text-red-600">
              Galería
            </a>
            <a href="/contact" className="hover:text-red-600">
              Contacto
            </a>
            <a href="/about-us" className="hover:text-red-600">
              Sobre Nosotros
            </a>
            <a
              href="https://wa.me/56930988506"
              className="hover:text-red-600 h-[42px] w-[180px] flex items-center justify-center rounded-lg"
              style={{
                background: "linear-gradient(to bottom, #981E20, #4D0002)",
                border: "none",
                boxShadow: "none",
                color: "#fff", // Cambia el color del texto según tus necesidades
              }}
            >
              Reserva de horas
            </a>
            <div className="flex items-center flex-col gap-y-4 scale-125 mt-2">
              <a
                href="/cart"
                className="text-white flex items-center justify-center gap-4"
                style={{ textDecoration: "none" }}
              >
                <span id="cart" className="text-2xl">
                  <Icon name="cart" />
                </span>
                <span
                  className="mt-2"
                  style={{
                    background: "linear-gradient(to bottom, #981E20, #4D0002)",
                    border: "none",
                    boxShadow: "none",
                    color: "#fff",
                  }}
                  id="cart_count"
                >
                  {cartItems?.length}
                </span>
              </a>

              {user ? (
                <div className="dropdown">
                  <button
                    className="btn dropdown dropdown-toggle text-white flex items-center justify-center"
                    type="button"
                    id="dropDownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <figure className="avatar avatar-nav">
                      <img
                        src={
                          user?.avatar
                            ? user?.avatar?.url
                            : "/images/default_avatar.jpg"
                        }
                        alt="User Avatar"
                        className="rounded-circle"
                      />
                    </figure>
                    <span className="text-lg te">{user?.name}</span>
                  </button>
                  <div
                    className="dropdown-menu w-full"
                    aria-labelledby="dropDownMenuButton"
                  >
                    {user?.role === "admin" && (
                      <Link
                        className="dropdown-item text-lg"
                        to="/admin/dashboard"
                      >
                        Panel de administración
                      </Link>
                    )}

                    <Link className="dropdown-item text-lg" to="/me/orders">
                      Mis pedidos
                    </Link>

                    <Link className="dropdown-item text-lg" to="/me/profile">
                      Perfil
                    </Link>

                    <Link
                      className="dropdown-item text-danger text-lg"
                      to="/"
                      onClick={logoutHandler}
                    >
                      Cerrar sesión
                    </Link>
                  </div>
                </div>
              ) : (
                !isLoading && (
                  <Link to="/login" className="btn text-xl" id="login_btn">
                    Iniciar sesión
                  </Link>
                )
              )}
            </div>
          </div>
        </>
      )}

      <nav className="bg-zinc-900 h-32 flex justify-between items-center z-10 px-4">
        {/* Sección izquierda con el logo y el menú */}
        <div className="flex items-center">
          <div className="navbar-brand">
            <a href="/">
              <img src="/images/logoBarber.png" className="w-38 h-32" alt="" />
            </a>
          </div>

          {/* Barra de navegación para pantallas grandes */}
          <div className="hidden lg:flex text-white gap-8 text-lg ml-8">
            <a href="/" className="hover:text-red-600 flex items-center">
              Inicio
            </a>
            <a
              href="/products"
              className="hover:text-red-600 flex items-center"
            >
              Productos
            </a>
            <a href="/gallery" className="hover:text-red-600 flex items-center">
              Galería
            </a>
            <a href="/contact" className="hover:text-red-600 flex items-center">
              Contacto
            </a>
            <a
              href="/about-us"
              className="hover:text-red-600 flex items-center"
            >
              Sobre Nosotros
            </a>
            <a
              href="https://wa.me/56930988506"
              className="hover:text-red-600 h-10 w-36 flex items-center justify-center rounded-lg transform hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(to bottom, #981E20, #4D0002)",
                border: "none",
                boxShadow: "none",
                color: "#fff", // Cambia el color del texto según tus necesidades
              }}
            >
              Reserva de horas
            </a>
          </div>
        </div>

        {/* Sección central con el icono de menú */}
        <div className="flex mr-7 items-center lg:hidden">
          <div
            className="text-white text-4xl cursor-pointer"
            onClick={toggleMenu}
          >
            ☰
          </div>
        </div>

        {/* Sección derecha con Iniciar Sesión y Carrito de Compra */}
        <div className="lg:flex lg:items-center w-[65%] hidden lg:w-auto">
          <a
            href="/cart"
            className="mr-4 text-white flex flex-col gap-2 lg:flex-row lg:items-center lg:right-0"
            style={{ textDecoration: "none" }}
          >
            <span id="cart" className="text-2xl">
              <Icon name="cart" />
            </span>
            <span
              style={{
                background: "linear-gradient(to bottom, #981E20, #4D0002)",
                border: "none",
                boxShadow: "none",
                color: "#fff",
              }}
              id="cart_count"
            >
              {cartItems?.length}
            </span>
          </a>

          {user ? (
            <div className="dropdown">
              <button
                className="btn dropdown dropdown-toggle text-white flex items-center justify-center"
                type="button"
                id="dropDownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={
                      user?.avatar
                        ? user?.avatar?.url
                        : "/images/default_avatar.jpg"
                    }
                    alt="User Avatar"
                    className="rounded-circle"
                  />
                </figure>
                <span className="text-lg te">{user?.name}</span>
              </button>
              <div
                className="dropdown-menu w-full"
                aria-labelledby="dropDownMenuButton"
              >
                {user?.role === "admin" && (
                  <Link className="dropdown-item text-lg" to="/admin/dashboard">
                    Panel de administración
                  </Link>
                )}

                <Link className="dropdown-item text-lg" to="/me/orders">
                  Mis pedidos
                </Link>

                <Link className="dropdown-item text-lg" to="/me/profile">
                  Perfil
                </Link>

                <Link
                  className="dropdown-item text-danger text-lg"
                  to="/"
                  onClick={logoutHandler}
                >
                  Cerrar sesión
                </Link>
              </div>
            </div>
          ) : (
            !isLoading && (
              <Link to="/login" className="btn ms-4" id="login_btn">
                Iniciar sesión
              </Link>
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
