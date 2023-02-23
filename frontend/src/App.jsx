import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
