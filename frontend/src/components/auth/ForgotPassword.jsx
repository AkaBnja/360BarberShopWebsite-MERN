import React, { useEffect, useState } from "react";
import { useForgotPasswordMutation } from "../../redux/api/userApi";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const [forgotPassword, { isLoading, error, isSuccess }] =
    useForgotPasswordMutation();

  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      toast.success("Email Sent. Please check your inbox");
    }
  }, [error, isAuthenticated, isSuccess]);

  const submitHandler = (e) => {
    e.preventDefault();

    forgotPassword({ email });
  };

  return (
    <>
      <MetaData title={"Forgot Password"} />
      <div className="row wrapper mb-20">
        <div className="col-10 col-lg-5">
          <form className="shadow rounded bg-body shadow-2xl" onSubmit={submitHandler}>
            <h2 className="mb-4 text-4xl text-center">¿Has olvidado tu contraseña?</h2>
            <div className="mt-3">
              <label htmlFor="email_field" className="mt-6 form-label text-xl">
                Ingrese correo electrónico
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

            <button
              id="forgot_password_button"
              type="submit"
              className="btn w-100 py-2 mt-12 text-xl"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar correo electrónico"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
