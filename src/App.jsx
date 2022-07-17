import React from "react";
import { Header, About, Skills, Testimonial, Work, Footer } from "./container";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import "./App.scss";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetail from "./pages/PortfolioDetail/PortfolioDetail";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
