import "./App.css";
import React from "react";
import NavBar from "./components/navBar/NavBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Home from "./components/home/Home.jsx";
function App() {
  return (
    <Router>
      <NavBar />
      <div className="content-houser">
        <div className="inner-houser">
          <div className="nav-dodger">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
