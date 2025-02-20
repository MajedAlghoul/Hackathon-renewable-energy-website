import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./components/navBar/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Home from "./components/home/Home.jsx";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="inner-houser">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
