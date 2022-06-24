import './App.css';
import { Routes, Route } from "react-router-dom";
import Second from "./Components/Second";
import Landing from "./Components/Landing";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </div>
  );
}

export default App;