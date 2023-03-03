import './home.css'
import NavBar from '../../components/assets/NavBar'
import { useSelector } from "react-redux";
import Card from '../Card/Card';
import Footer from "../footer/Footer";

const Home =()=>{
const state = useSelector((state) => state.bolsillo);

const generales = state.productsBackup.filter(a => a.supermarket === "Coto")    

return(
    <>
    <div className="Navbar-Home">
    <NavBar/>
    </div>
    <div className='Home-container'>
    <div className="Home-container-products">
    {   generales.map((p)=>(
        <Card key={p.id} product={p} />
        ))}  
    </div>
    </div>
    <Footer/>
    </>
)
}
// {state.pokemonFilter?.slice((page -1) * perPage, (page -1) * perPage + perPage).map((p)=>(
//     <Card key={p.name} pokemon={p} />
//     ))}    

export default Home