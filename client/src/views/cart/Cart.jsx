import axios from "axios";
import React from "react";
import Footer from "../footer/Footer";
import "./cart.css";

const MercadoP = () => {
  async function funsion() {
    const pete = await axios.post("http://localhost:3001/market/subscription");
    window.location.href = pete.data.init_point;
  }

  return (
    <>
      <div className="container-mp">
        <div className="container-txt-mp">
          <h3>Solo queda un paso para que puedas publicar tus productos</h3>
          <p>
            Para formar parte del grupo de mercados de nuestra aplicación
            "Bolsillo Feliz", y obtener mayor exposición entre los mercados que
            no lo hacen ,deberá abonar una suscripción mensual
          </p>
          <button onClick={funsion}>Pagar membresia</button>
        </div>
        <img
          className="foto-mp"
          src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1678683637/kbp243qvw2ld1stk2ixq.jpg"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
};

export default MercadoP;
