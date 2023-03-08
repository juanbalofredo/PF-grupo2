import { useSelector } from 'react-redux';
import './dashUsers.css'
import Navbar from '../Navbar/NavBar';


const DashUsers = ()=>{
    
    
    const state = useSelector((state) => state.bolsilloFeliz);


return(
<>
<Navbar/>
 hola admin
</>
)


}

export default DashUsers