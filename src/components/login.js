import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Login(props) {
  // let history = useHistory();

  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  function handleData(e) {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Login Form</h1>
      <div className="header">
        <input
          name="email"
          type="text"
          placeholder="Enter your Email here"
          value={inputData.email}
          onChange={handleData}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter your password here"
          value={inputData.password}
          onChange={handleData}
        />

        <div className="subHeader">
          <span>
            Don't have a account ?
            <button
              onClick={() => {
                props.onFormSwitch("register");
              }}
            >
              register
            </button>
          </span>
        </div>

        <div className="footer">
          <button
          // onClick={() => {
          //   history.push("/home");
          // }}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
