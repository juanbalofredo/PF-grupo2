import "./login.css";
import { useState } from "react";
import NavBar from "../Navbar/NavBar2";
import Footer from "../../views/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProductosGenerales, getUserByEmail } from "../../redux/apiPetitions";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state.bolsillo.name);


  const login = async (e)=> {
    e.preventDefault();
    const azul = await getUserByEmail(input.email, input.password)
    console.log(azul);
        if(azul === 'Request failed with status code 400'){
         return swal("Error!", 'Los datos ingresados no son validos', "error") 
        }
        swal({
          title: "Sesión iniciada",
          text: "Sesión iniciada correctamente",
          icon: "success",
          button: "A comparar!",
        })
        .then((e) => navigate("/home"))
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
              src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp"
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
                    placeholder="emailExample@gmail.com"
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
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
