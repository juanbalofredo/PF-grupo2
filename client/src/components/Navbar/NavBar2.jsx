import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../../views/cart/Cart";
import "./navBar.css";
import User from "../user/User";
import { Link } from "react-router-dom";


const Navbar = () => {
  const user = useSelector((state) => state.id);
  const [active, setActive] = useState(false);

  const changeTheme = () => {
    if (document.querySelector("body").getAttribute("theme") === "light") {
      document.querySelector("body").setAttribute("class", "bodyDark");
      document.querySelector("body").setAttribute("theme", "dark");
      document.querySelector(".button-light").setAttribute("class", "button-dark");
    } else {
      document.querySelector("body").setAttribute("class", "");
      document.querySelector("body").setAttribute("theme", "light");
      document.querySelector(".button-dark").setAttribute("class", "button-light");
    }
  };

  return (
    <section className="" id="navbar1">
      <div className="logo-Container">
        <Link to="/home">
          <img
            src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
            alt="logo"
          />
        </Link>
      </div>
      <div className="login-Container">
        <div onClick={() => setActive(!active)}></div>
        <User />
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          <Cart />
        </div>
        <div>
          {!user ? (
            <div className="nav-kis">
              <Link to="/register">
                <button className="navButton">Registrarse</button>
              </Link>
              <Link to="/login">
                <button className="navButton">Iniciar sesion</button>
              </Link>
            </div>
          ) : (
            <button className="navButton">Log out</button>
          )}
        </div>

        <div>
          <button onClick={changeTheme} className="navButton button-light">
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
