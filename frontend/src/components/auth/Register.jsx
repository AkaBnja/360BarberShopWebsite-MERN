import React, { useEffect, useState } from "react";
import { useRegisterMutation } from "../../redux/api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const navigate = useNavigate();

  const [register, { isLoading, error, data }] = useRegisterMutation();

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

    const signUpData = {
      name,
      email,
      password,
    };

    register(signUpData);
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MetaData title={"Register"} />
      <div className="row wrapper mb-20">
        <div className="col-10 col-lg-5">
          <form
            className="shadow rounded bg-body shadow-2xl"
            onSubmit={submitHandler}
          >
            <h2 className="mb-4 text-4xl text-center">Registro</h2>

            <div className="mb-3">
              <label htmlFor="name_field" className="form-label text-xl">
                Nombre
              </label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                name="name"
                value={name}
                onChange={onChange}
              />
            </div>

            <div className="mt-12">
              <label htmlFor="email_field" className="form-label text-xl">
                Correo electronico
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                name="email"
                value={email}
                onChange={onChange}
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
                onChange={onChange}
              />
            </div>

            <button
              id="register_button"
              type="submit"
              className="mt-12 btn w-100 py-2 text-xl"
              disabled={isLoading}
            >
              {isLoading ? "Creando..." : "Registrar"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
