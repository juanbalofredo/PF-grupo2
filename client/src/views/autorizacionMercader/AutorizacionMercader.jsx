import NavBar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/slice/globalSlice";
import { postProduct } from "../../redux/apiPetitions/productsPetitions";
import "./form.css";
import axios from "axios";

const AutorizacionMercader = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    nombre: "",
    producto: "",
    about: "",
    cantidad: "",
    ubicacion: "",
    comoNosConocio: "",
  });

  const [error, setError] = useState({
    nombre: "",
    producto: "",
    about: "",
    cantidad: "",
    ubicacion: "",
    comoNosConocio: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.nombre.length >= 2 &&
      input.producto.length >= 2 &&
      input.about.length >= 10 &&
      input.cantidad.length >= 1 &&
      input.ubicacion.length >= 2
    ) {
      dispatch(input);
      alert("Success");
      setInput({
        nombre: "",
        producto: "",
        about: "",
        cantidad: "",
        ubicacion: "",
        comoNosConocio: "",
      });
    } else {
      alert("Complete the form correctly before sending it");
    }
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      {" "}
      <div className="todo">
        <NavBar />
        <div className="autorizar-container">
          <div className="register-logo">
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
              alt="logo"
            />
          </div>
          <div className="autorizar-form">
            <form autoComplete="off">
              <h1>Solicitanos tu mercado</h1>
              <div className="autorizar-text">
                <div className="autorizar-name">
                  <div className="name-error-form">
                    <input
                      autoComplete="off"
                      placeholder="Nombre"
                      name="nombre"
                      type="text"
                      maxLength="15"
                      value={input.nombre}
                      onChange={(e) => handleChange(e)}
                    />
                    {error.nombre.length ? (
                      <span id="error_name">{error.nombre}</span>
                    ) : null}
                  </div>
                  <div className="utorizar-name">
                    <input
                      autoComplete="off"
                      placeholder="Tu producto"
                      name="producto"
                      type="text"
                      maxLength="20"
                      value={input.producto}
                      onChange={(e) => handleChange(e)}
                    />
                    {error.producto.length ? (
                      <span id="error_name">{error.producto}</span>
                    ) : null}
                  </div>
                </div>
                <div className="autorizar-name">
                  <input
                    autoComplete="off"
                    name="about"
                    type="text"
                    maxLength="30"
                    value={input.about}
                    onChange={(e) => handleChange(e)}
                    placeholder="Cuentanos algo de tu Mercado"
                  />
                  {error.about.length ? (
                    <span id="error_name">{error.about}</span>
                  ) : null}
                </div>
                <div className="autorizar-name">
                  <input
                    autoComplete="off"
                    name="cantidad"
                    type="number"
                    maxLength="30"
                    value={input.cantidad}
                    onChange={(e) => handleChange(e)}
                    placeholder="Cantidad"
                  />
                  {error.cantidad.length ? (
                    <span id="error_name">{error.cantidad}</span>
                  ) : null}
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="ubicacion"
                    type="text"
                    maxLength="30"
                    value={input.ubicacion}
                    onChange={(e) => handleChange(e)}
                    placeholder="Repetir contraseña"
                  />
                  {error.ubicacion.length ? (
                    <span id="error_name">{error.ubicacion}</span>
                  ) : null}
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="comoNosConocio"
                    type="text"
                    maxLength="30"
                    value={input.comoNosConocio}
                    onChange={(e) => handleChange(e)}
                    placeholder="Repetir contraseña"
                  />
                  {error.comoNosConocio.length ? (
                    <span id="error_name">{error.comoNosConocio}</span>
                  ) : null}
                </div>
                <button id="bt" className="button" onClick={handleSubmit}>
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AutorizacionMercader;
