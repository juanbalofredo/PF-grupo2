import './home.css'
import NavBar from '../../components/assets/NavBar'
import { useSelector } from "react-redux";
const Home =()=>{
const state = useSelector((state) => state.productsBackup);    
console.log(state);  
return(
    <>
    <div className="Navbar-Home">
    <NavBar/>
    </div>
    <div className='Home-container'>
        <div className="Home-container-products">
        </div>
    </div>
    </>
)
}
// {state.pokemonFilter?.slice((page -1) * perPage, (page -1) * perPage + perPage).map((p)=>(
//     <Card key={p.name} pokemon={p} />
//     ))}    

export default Home