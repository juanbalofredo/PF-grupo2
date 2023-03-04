import "./login.css";
import { useState } from "react";
import NavBar from "../Navbar/NavBar";
import Footer from "../../views/footer/Footer";
import { useDispatch } from "react-redux";
import { getUserByEmail } from "../../redux/apiPetitions";

const Login = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  async function login(event) {
    event.preventDefault();
    console.log(input);
    getUserByEmail(dispatch, input.email);
  }

  const [input, setInput] = useState({
    name: "",
    avatar: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    avatar: "",
    last_name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "email": {
        setError({
          ...error,
          email: value.length < 1 ? "email no puede esatr vacio" : "",
        });
        break;
      }

      case "password": {
        setError({
          ...error,
          password: value < 1 ? "password no puede esatr vacia" : "",
        });
        break;
      }
      default: {
        break;
      }
    }

    setInput({
      ...input,
      [name]: value,
    });
  }

  function validarForm() {
    let valid = true;

    if (input.email.length <= 2) valid = false;

    if (input.password.length <= 2) valid = false;

    return valid;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (validarForm()) {
      try {
        alert("Ingresado correctamente");
        window.location.href = "http://localhost:3000/home";
      } catch (error) {
        alert("ERROR: reintenta más tarde! (" + error + ")");
      }
    } else {
      alert("email no puede estar vacio");
    }
  }

  return (
    <>
      <div className="reg-todo">
        <NavBar />
        <div className="login-container">
          <div className="register-logo">
            <img
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677791179/dfmbqz6lottpgltuy6ye.webp"
              alt="logo"
            />
          </div>
          <div className="register-form">
            <form onSubmit={handleSubmit}>
              <h1>Iniciar sesion</h1>
              <div className="register-text">
                <div className="register-correo">
                  <input
                    name="email"
                    type="email"
                    value={input.email}
                    onChange={handleChange}
                    placeholder="bautgod@gmail.com"
                  />
                </div>
                <div className="rgister-contra">
                  <input
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                  />
                </div>
                <button type="submit" onClick={login}>
                  Iniciar sesion
                </button>
              </div>
              <div className="reg-google-fac">
                <button className="register-google">Iniciar con Google</button>
                <button className="register-facebook">
                  Iniciar con Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Login;
