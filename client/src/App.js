import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Route, Routes} from "react-router-dom";
import Usersget from "./views/Firebase/GoogleSign";
import DetalleProd from "./views/detalleProd/Detail";
import DashUsers from "./components/dashboard/DashUsers";
import Form from "./views/form/Form"
import Mercadomp from "../src/components/Mercadomp"
import About from "./views/about/About";
import Contact from "./views/contact/Contact"
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getAllProducts } from "./redux/apiPetitions";


const App =()=>{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Register" element={<Register/>} />
        <Route exact path="/prueba" element={<Usersget/>} />
        <Route exact path="/Form" element={<Form/>} />
        <Route exact path="/Dashuser" element={<DashUsers/>} />
        <Route exact path="/Products/id/:id" element={<DetalleProd/>} />
        <Route exact path="/Mercado" element={<Mercadomp/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}
export default App;
