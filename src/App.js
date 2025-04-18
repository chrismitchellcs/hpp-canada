import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import What from "./pages/What";
import Benefits from "./pages/Benefits";
import Packaging from "./pages/Packaging";
import WhitePapers from "./pages/WhitePapers";
import Contact from "./pages/Contact";
import Services from "pages/Services";
import Products from "pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/what" element={<What />}></Route>
        <Route path="/benefits" element={<Benefits />}></Route>
        <Route path="/packaging" element={<Packaging />}></Route>

        <Route path="/services" element={<Services />}></Route>
        <Route path="/products" element={<Products />}></Route>

        <Route path="/whitepapers" element={<WhitePapers />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
