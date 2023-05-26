import React from "react";
import { useState } from "react";
import "./CSS/login.css";
import Login from "./components/login.js";
import Register from "./components/signup";
import Navbar from "./components/navbar";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";

export default function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
