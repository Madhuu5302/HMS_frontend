import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";

function LoginForm() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [usernameBlurred, setUsernameBlurred] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const usernameBlurHandler = () => {
    setUsernameBlurred(true);
  };

  const passwordBlurHandler = () => {
    setPasswordBlurred(true);
  };

  const usernameIsInvalid = usernameBlurred && enteredUsername.trim() === "";
  const passwordIsInvalid = passwordBlurred && enteredPassword.length < 6;

  const loginHandler = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: enteredUsername,
          password: enteredPassword,
        }),
      });
      if (!response.ok) {
        throw new Error("Invalid Username or Password");
      }
      const responseData = await response.json();
      console.log("Login Successful:", responseData);
      localStorage.setItem("token", responseData.access); 
      navigate("/"); 
      // console.log("Login Successful:", responseData);
      const storedToken = localStorage.getItem("token");
      console.log("Stored Token:", storedToken);
    } catch (error) {
      setError(error.message || "An error occurred");
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="backdrop">
      <div className="my-modal">
        <div className="container">
          <h1 className="text-center">Login</h1>
          <form>
            {/* Username Input Field */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder=""
                value={enteredUsername}
                onChange={usernameChangeHandler}
                onBlur={usernameBlurHandler}
              />
              <label htmlFor="username">Username</label>
              {usernameIsInvalid && (
                <p className="alert alert-danger">Username is required</p>
              )}
            </div>

            {/* Password Input Field */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder=""
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
              <label htmlFor="password">Password</label>
              {passwordIsInvalid && (
                <p className="alert alert-danger">
                  Password should have at least 6 characters
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              className="btn btn-primary"
              type="button"
              onClick={loginHandler}
              disabled={usernameIsInvalid || passwordIsInvalid}
            >
              Login
            </button>

            {/* Display Error */}
            {error && <div className="alert alert-danger mt-3">{error}</div>}

            {/* Link to Registration Page */}
            <div className="text-center mt-3">
              Don't have an account? <Link to="/register">Register here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
