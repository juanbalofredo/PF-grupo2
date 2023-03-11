import './landing.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import Navbar from '../../components/Navbar/NavBar';

const Landing = () => {
    AOS.init({
        duration: 1000,
    });



    return (
        <div className='landing-container'>
            <div id="carrusel-contenido">
                <div id="carrusel-caja" data-aos="fade-up">
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/gy5hpxliqxoknxbkytg2.png" alt="jumbo" />
                    </div>
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/urcpur3gnbkjftcz1meh.png" alt="vital" />
                    </div>
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/g8iupzjk1qrtkvr2lefo.png" alt="carrefour" />
                    </div>
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/elsssfc03lvqxk6a3p4i.png" alt="vea" />
                    </div>
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/xin8w1koh0ck5vu1vrem.png" alt="coto" />
                    </div>
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/ovuozay6oxqpnmqek4u0.png" alt="dia" />
                    </div>
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/z6w6n2scxq7pp4tqjvpm.png" alt="disco" />
                    </div>
                    <div className='carru'>
                        <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677805204/m5xpm7k7ovcmplzkwakl.webp" alt="walmart" />
                    </div>
                </div>
            </div>

     <div className='land-text'>
     <div className='landing-t1' data-aos="fade-right"><h1>Compará</h1><br /><p>de la manera mas</p> <br /><h2>fácil y rapida</h2></div>
            <div className='landing-principal' data-aos="fade-up">
                <img src="https://res.cloudinary.com/dzuasgy3l/image/upload/v1677807225/de0ieqim2kymph6cldvl.webp" alt="foto" />
                <div className='landing-boton'>
                    <Link to='/home'><button>Ingresar</button></Link>
                </div>
                <img src="" alt="" />
            </div>
            <div className='landing-t2'><h1> Ahorrá </h1><h2> mas</h2> <div className='kkiajs'><p>gastá menos</p></div></div>
  </div>
        </div>
    )


}

export default Landing