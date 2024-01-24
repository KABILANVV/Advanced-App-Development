import React, { useState } from "react";
import '../Css/login.css'
// import axios from "axios";
export default function Login() {
  // initial state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
//   const [login, setLogin] = useState(false);
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
}

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-auth-app.herokuapp.com/login",
      data: {
        username,
        password,
      },
    };

    // make the API call
    // axios(configuration)
    //   .then((result) => {
    //     setLogin(true);
    //   })
    //   .catch((error) => {
    //     error = new Error();
    //   });
  };

  
  if (authMode === "signin") {
    return (
        <div className="App1">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      </div>
    )
  }

  return (
    <div className="App2">
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">

            <button type="submit" class="button-67"  className="btn btn-primary" role="button">Submit</button>
              
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    </div>
  );
}
