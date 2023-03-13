import Footer from "../../views/footer/Footer";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allProducts } from "../../redux/slice/globalSlice";
import { postProduct } from "../../redux/apiPetitions/productsPetitions";
import "./autorizacionMercader.css";
import axios from "axios";
import Navbar from "../../components/Navbar/NavBar";

const AutorizacionMercader = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [input, setInput] = useState({
    nombre: "",
    especialidad: "",
    about: "",
    ubicacion: "",
    comoNosConocio: "",
  });

  const [error, setError] = useState({
    nombre: "",
    especialidad: "",
    about: "",
    ubicacion: "",
    comoNosConocio: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.nombre.length >= 2 &&
      input.especialidad.length >= 2 &&
      input.about.length >= 10 &&
      input.ubicacion.length >= 2
    ) {
      dispatch(input);
      alert("Success");
      setInput({
        nombre: "",
        especialidad: "",
        about: "",
        ubicacion: "",
        comoNosConocio: "",
      });
    } else {
      alert("Complete correctamente el formulario antes de enviarlo");
    }
  }

  function handleChange(e) {
      const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }

  return (
    <>
      {" "}
      <div className="todo">
        <Navbar/>
        <div className="autorizar-container">
          <div className="register-logo">
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
              alt="logo"
            />
          </div>
          <div className="autorizar-form">
            <form onSubmit={handleSubmit} autoComplete="off">
              <h1>Solicitanos tu mercado</h1>
              <div className="autorizar-text">         
                  <div className="name-error-form">
                    <input
                      autoComplete="off"
                      placeholder="Nombre de tu mercado"
                      name="nombre"
                      type="text"
                      maxLength="15"
                      value={input.nombre}
                      onChange={handleChange}
                    />
                    {error.nombre.length ? (
                      <span id="error_name">{error.nombre}</span>
                    ) : null}
                  </div>
                  <div className="register-contra2">
                    <input
                      autoComplete="off"
                      placeholder="Tu especialidad"
                      name="especialidad"
                      type="text"
                      maxLength="20"
                      value={input.especialidad}
                      onChange={handleChange}
                    />
                    {error.especialidad.length ? (
                      <span id="error_name">{error.especialidad}</span>
                    ) : null}
                  </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="about"
                    type="text"
                    maxLength="100"
                    value={input.about}
                    onChange={handleChange}
                    placeholder="Cuentanos algo de tu Mercado"
                  />
                  {error.about.length ? (
                    <span id="error_name">{error.about}</span>
                  ) : null}
                </div>
                <div className="register-contra2">
                  <input
                    autoComplete="off"
                    name="ubicacion"
                    type="text"
                    maxLength="30"
                    value={input.ubicacion}
                    onChange={handleChange}
                    placeholder="Ubicacion de tu negocio"
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
                    maxLength="50"
                    value={input.comoNosConocio}
                    onChange={handleChange}
                    placeholder="Contanos como supiste de la página"
                  />
                  {error.comoNosConocio.length ? (
                    <span id="error_name">{error.comoNosConocio}</span>
                  ) : null}
                </div>
                <button type="submit" className="button" onClick={handleSubmit}>
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
