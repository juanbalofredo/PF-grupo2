import Landing from "./views/Landing";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
