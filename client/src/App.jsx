import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={"not found"} />
      </Routes>
    </div>
  );
}

export default App;
