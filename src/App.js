import "./styles.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { BrouserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Product } from "./components/Product";

export default function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </div>
  );
}
