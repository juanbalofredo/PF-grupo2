import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Route, Routes} from "react-router-dom";
import Usersget from "./views/Firebase/GoogleSign";
import DetalleProd from "./views/detalleProd/Detail";
import DashUsers from "./components/dashboard/DashUsers";

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getAllProducts } from "./redux/apiPetitions";


const App =()=>{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/prueba" element={<Usersget/>} />
        <Route exact path="/mercado" element={<DashUsers/>} />
        <Route exact path="/dashuser" element={<DashUsers/>} />
        <Route exact path="/products/id/:id" element={<DetalleProd/>} />
      </Routes>
    </div>
  );
}
export default App;
