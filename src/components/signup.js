import React, { useState } from "react";

export default function Register(props) {
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const data = { email: "", password: "" };
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>Register Form</h1>
        <div className="header">
          <input type="Text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter Your Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>
        <div className="subHeader">
          Already have a account ?{" "}
          <button
            onClick={() => {
              props.onFormSwitch("login");
            }}
          >
            sign in
          </button>
        </div>
        <div className="footer">
          <button>Register</button>
        </div>
      </div>
    </form>
  );
}
