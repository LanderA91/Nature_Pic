import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import ImagesProvider from "./context/ImagesProvider";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ImagesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </ImagesProvider>
      </BrowserRouter>
    </div>
  );
}