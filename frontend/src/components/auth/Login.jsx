import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/api/authApi";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import "../../styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [login, { isLoading, error, data }] = useLoginMutation();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast.error(error?.data?.message);
    }
  }, [error, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    login(loginData);
  };

  return (
    <>
      <MetaData title={"Login"} />
      <div className="row wrapper mb-20">
        <div className="col-10 col-lg-5">
          <form className="rounded bg-body shadow-2xl" onSubmit={submitHandler}>
            <h2 className="mb-4 text-4xl text-center">Inicio de sesión</h2>
            <div className="mb-3">
              <label htmlFor="email_field" className="form-label text-xl">
                Correo electronico
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-12">
              <label htmlFor="password_field" className="form-label text-xl">
                Contraseña
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <a
              href="/password/forgot"
              className="float-end mb-4 font-bold text-lg hover:text-red-800"
            >
              ¿Has olvidado tu contraseña?
            </a>

            <button
              id="login_button"
              type="submit"
              className="btn w-100 py-2 text-xl"
              disabled={isLoading}
            >
              {isLoading ? "Autenticando..." : "Ingresar"}
            </button>

            <div className="mt-8 text-center">
              <a
                href="/register"
                className=" font-bold text-xl hover:text-red-800"
              >
                ¿Usuario nuevo?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
