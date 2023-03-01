import "./register.css"
import { useState } from "react"
import { useEffect } from "react"
import NavBar from '../../components/assets/NavBar'


const Register = () => {

    // const [input, setInput] = useState({
    //     name: '',
    //     avatar: '',
    //     apellido: '',
    //     mail: '',
    //     contraseña: '',
    // })


    // const [error, setError] = useState({
    //     name: '',
    //     avatar: '',
    //     apellido: '',
    //     mail: '',
    //     contraseña: '',
    // })

    // function handleChange(e) {
    //     const { name, value } = e.target;
    //     switch (name) {
    //         case 'name': {
    //             setError({
    //                 ...error,
    //                 name: value.length < 3 ? 'El nombre es demasiado corto' : ''
    //             })
    //             break;
    //         }


    //         case 'tipo': {
    //             setError({
    //                 ...error,
    //                 tipo: value.length < 1 ? 'Tipo no puede estar vacio' : ''
    //             })
    //             break;
    //         }

    //         case 'cobertura': {
    //             setError({
    //                 ...error,
    //                 cobertura: value.length < 1 ? 'Cobertura no puede estar vacio' : ''
    //             })
    //             break;
    //         }



    //         case 'relleno': {
    //             setError({
    //                 ...error,
    //                 relleno: value.length < 1 ? 'Relleno no puede esatr vacio' : ''
    //             })
    //             break;
    //         }

    //         case 'stock': {
    //             setError({
    //                 ...error,
    //                 stock: value < 1 ? 'El stock deberia ser mayor a 0' : ''
    //             })
    //             break;
    //         }

    //         case 'descripcion': {
    //             setError({
    //                 ...error,
    //                 descripcion: value.length < 10 || value > 200 ? 'La descripcion debe tener entre 10 y 200 palabras' : ''
    //             })
    //             break;
    //         }

    //         case 'precio': {
    //             setError({
    //                 ...error,
    //                 precio: value < 1 ? 'El precio deberia ser mayor a 0' : ''
    //             })
    //             break;
    //         }

    //         default: {
    //             break;
    //         }
    //     }

    //     setInput({
    //         ...input,
    //         [name]: value
    //     })

    // }

    // function validarForm() {
    //     let valid = true;

    //     console.log(input)

    //     if (input.name.length <= 2) valid = false

    //     if (input.urlImg.length <= 2) valid = false

    //     if (input.tipo.length <= 2) valid = false

    //     if (input.cobertura.length <= 2) valid = false

    //     if (input.relleno.length <= 2) valid = false

    //     if (input.descripcion.length <= 2) valid = false

    //     if (input.stock === 0) valid = false

    //     if (input.precio === 0) valid = false

    //     return valid;
    // }

    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     if (validarForm()) {
    //         try {
    //             const resp = await axios.get('/producto')
    //             const act = resp.data;
    //             if (!act.length || act.indexOf(input.name) === -1) {
    //                 console.log(input.urlImg)
    //                 dispatch(addProducto(input.name, input.urlImg, input.tipo, input.relleno, input.cobertura, input.precio, input.stock, input.descripcion))
    //                 dispatch(loadingState(false))
    //                 dispatch(filterAndOrder(true))
    //                 dispatch(loadProducto())
    //                 setInput({
    //                     name: '',
    //                     urlImg: '',
    //                     tipo: '',
    //                     relleno: '',
    //                     cobertura: '',
    //                     precio: 0,
    //                     stock: 0,
    //                     descripcion: ''
    //                 })
    //             } else {
    //                 alert("ERROR: El producto con ese nombre ya existe");
    //             }
    //         } catch (error) {
    //             alert("ERROR: reintenta más tarde! (" + error + ")");
    //         }
    //     } else {
    //         alert("ERROR: Faltan completar algunos campos");
    //     }
    // }

    useEffect(() => {
        document.title = "Registrarse";
    }, [])





    return ( <div className="reg-todo"> 
    <NavBar/>         
        <div className="register-container">

            <div className="register-logo">
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677677451/dfmbqz6lottpgltuy6ye.webp" alt="logo" />
            </div>
            <div className="register-form">
                <form>
                    <h1>Registrarse</h1>
                    <div className="register-text">
                        <div className="register-name">
                            <div><input placeholder="Nombre" type="text" /></div>
                            <div><input placeholder="Apellido" type="text" /></div>
                        </div>
                        <div className="register-correo"><input type="email" placeholder="bautgod@gmail.com" /></div>
                        <div className="rgister-contra"><input type='password' placeholder="Contraseña" /></div>
                        <div className="register-conta2"><input type='password' placeholder="Repetir contraseña" /></div>
                        <button>Registrarse</button>
                    </div>
                    <div className="reg-google-fac">
                        <button className="register-google">Iniciar con Google</button>
                        <button className="register-facebook">Iniciar con Facebook</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
     )
}

export default Register