import './landing.css'
import { Link } from 'react-router-dom'

const Landing = () => {


    return (
        <div className='landing-container'>
            <div className='landing-principal'>
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677791179/dfmbqz6lottpgltuy6ye.webp" alt="foto" />
                <div className='landing-boton'>
                    <button><Link to='/home'>Ir al inicio</Link></button>
                </div>
                <img src="" alt="" />
            </div>
            <div className='landing-fotos'>
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/elsssfc03lvqxk6a3p4i.png" alt="" />
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/z6w6n2scxq7pp4tqjvpm.png" alt="" />
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/gy5hpxliqxoknxbkytg2.png" alt="" />
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/urcpur3gnbkjftcz1meh.png" alt="" />
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/g8iupzjk1qrtkvr2lefo.png" alt="" />
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/xin8w1koh0ck5vu1vrem.png" alt="" />
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/ovuozay6oxqpnmqek4u0.png" alt="" />
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/cnfvf4ktda34t0ata0se.png" alt="" />
            </div>
        </div>
    )


}

export default Landing