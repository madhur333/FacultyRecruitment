import React from "react";
import { useState } from "react";
import "./CSS/login.css";
import Login from "./components/login.js";
import Register from "./components/signup";
import Navbar from "./components/navbar";

export default function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      <Navbar />

      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}
