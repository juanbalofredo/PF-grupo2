import "../register/register.css"
import { useState } from "react"
import NavBar from '../../components/assets/NavBar'
import {db} from "./ConfigFirebase"
import { useDispatch } from "react-redux"
import { LoginWithGoogle } from "./Slice"


const Register = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: '',
        avatar: '',
        last_name: '',
        email: '',
        password: '',
    })
    function handleChange(e) {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        })

    }
    const handleSubmitGoogle= ()=>{
        dispatch(LoginWithGoogle())
    }
    async function handleSubmit(e) {
    e.preventDefault()
    db.collection("User").doc().set(input)
    }

    return (<div className="reg-todo">
        <NavBar />
        <div className="register-container">

            <div className="register-logo">
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677677451/dfmbqz6lottpgltuy6ye.webp" alt="logo" />
            </div>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <h1>Registrarse</h1>
                    <div className="register-text">
                        <div className="register-name">
                            <div><input placeholder="Nombre" name="name" type="text" value={input.name}  onChange={handleChange} /></div>
                            <div><input placeholder="Apellido" name="last_name" type="text" value={input.last_name} onChange={handleChange} /></div>
                        </div>
                        <div className="register-correo"><input name="email" type="email" value={input.email} onChange={handleChange} placeholder="bautgod@gmail.com" /></div>
                        <div className="rgister-contra"><input name="password" type='password' value={input.password} onChange={handleChange} placeholder="Contraseña" /></div>
                        <button type="submit">Registrarse</button>
                    </div>
                    <div className="reg-google-fac">
                        <button className="register-google" onClick={handleSubmitGoogle}>Registrarse con Google</button>
                        <button className="register-facebook">Registrarse con Facebook</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Register