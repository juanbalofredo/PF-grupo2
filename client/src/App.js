
import "./styles/styles.css";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Login from "./components/login/Login"
import { Route, Routes} from "react-router-dom";


const App =()=>{
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route exact path="/login" component={Login} />
      </Routes>
    </div>
  );
}
export default App;
