import "./login.css";
import { useState } from "react";
import NavBar from "../Navbar/NavBar2";
import Footer from "../../views/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUserSoloByEmail, getUserByEmail, logearse } from "../../redux/apiPetitions";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state.bolsillo.name);


  const login = async (e) => {
    e.preventDefault();
    if (await handleClickError(input)) {

      const azul = await getUserByEmail(input.email, input.password)
      if (azul === 'Request failed with status code 400') {
        return swal("Error!", 'Los datos ingresados no son validos', "error")
      }
      logearse(azul.data, dispatch)
      swal({
        title: "Sesión iniciada",
        text: "Sesión iniciada correctamente",
        icon: "success",
        button: "A comparar!",
      })
        .then((e) => navigate("/home"))
    }
  }



  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  function setear(e) {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  }


  async function handleClickError() {
    const imail = await getUserSoloByEmail(input.email)
    const azul = await getUserByEmail(input.email, input.password)
    let valid = true;
    if (imail == "Request failed with status code 400") {
       valid=false;
            setError({
        ...error,
        email: "Email no existe"
      })
       return valid;
    }
    console.log(azul)
    console.log(input.password)

    if (input.email.length <= 6) valid = false;
    if (input.password.length <= 3) valid = false;

      setError({
        ...error,
        password: azul === "Request failed with status code 400"  ? "contraseña incorrecta" : "contraseña no puede estar vacia",

      })

    
     return valid;
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
            <form >
              <h1>Iniciar sesion</h1>
              <div className="register-text">
                <div className="register-correo">
                  <input
                    name="email"
                    type="email"
                    maxLength="30"
                    value={input.email}
                    onChange={setear}
                    placeholder="emailExample@gmail.com"
                  />
                  {error.email.length ? <span id='error_name'>{error.email}</span> : null}
                </div>
                <div className="rgister-contra">
                  <input
                    name="password"
                    type="password"
                    maxLength="30"
                    onChange={setear}
                    value={input.password}
                    placeholder="Contraseña"
                  />
                  {error.password.length ? <span id='error_name'>{error.password}</span> : null}
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
