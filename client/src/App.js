import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import { Route, Routes} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./redux/apiPetitions";
import Usersget from "../src/views/RegisterFirebase/Usersget";


const App =()=>{
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/prueba" element={<Usersget/>} />
      </Routes>
    </div>
  );
}
export default App;
