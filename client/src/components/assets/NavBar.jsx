import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../views/cart/Cart";
import "./navBar.css";
import User from "./User";
import { Link } from "react-router-dom";

const Navbar = ({}) => {
  const dispatch = useDispatch();
  const [model, setModel] = useState("");
  const user = useSelector((state) => state.userLogged);
  const [active, setActive] = useState(false);

  const handleInputModel = (e) => {
    e.preventDefault();
    setModel(e.target.value);
  };

  const changeTheme = () => {
    if (
      document.querySelector("body").getAttribute("data-bs-theme") === "light"
    ) {
      document.querySelector("body").setAttribute("data-bs-theme", "dark");
      document
        .querySelector("#dl-icon")
        .setAttribute("class", "bi bi-moon-fill");
      document.querySelector("#body").setAttribute("class", "bodyDark");
    } else {
      document.querySelector("body").setAttribute("data-bs-theme", "light");
      document
        .querySelector("#dl-icon")
        .setAttribute("class", "bi bi-sun-fill");
      document.querySelector("#body").setAttribute("class", "");
    }
  };

  return (
    <section className="" id="navbar1">
      <div className="logo-Container">
        <Link to="/home">
          <img
            src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
            alt="logo"
          /></Link>
      </div>
      <div className="searchbar-container">
        <form className="">
          <div className="busca">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleInputModel(e)}
            />
            <div type="submit" onClick={(e) => e}>
              <i className="bi bi-search" id="formbusca"></i>
            </div>
          </div>
        </form>
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
            <div>
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
          <button onClick={changeTheme} className="navButton">
            Dark mode
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
