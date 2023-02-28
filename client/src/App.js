import { Route, Routes} from "react-router-dom";
import Home from "./views/home/Home";
import Landing from "./views/landing/Landing";

const App =()=>{
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
  );
}
export default App;
