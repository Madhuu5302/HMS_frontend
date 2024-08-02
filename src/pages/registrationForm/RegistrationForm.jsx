import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"; // Import the FaHome icon from Font Awesome
import "./registrationForm.css";

function RegistrationForm() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const emailBlurHandler = () => {
    setEmailBlurred(true);
  };

  const passwordBlurHandler = () => {
    setPasswordBlurred(true);
  };

  const emailIsInvalid = emailBlurred && enteredEmail.trim() !== "" && !enteredEmail.includes("@");
  const passwordIsInvalid = passwordBlurred && enteredPassword.trim() !== "" && enteredPassword.length < 6;
  const usernameIsInvalid = enteredUsername.trim() === "" && emailBlurred;

  const registerHandler = () => {
    // Prepare user data
    const userData = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword
    };

    // Send POST request to registration API
    fetch("http://127.0.0.1:8000/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(response => {
        if (response.ok) {
          setRegistrationSuccess(true); // Registration successful
          // Reset form fields
          setEnteredUsername("");
          setEnteredEmail("");
          setEnteredPassword("");
          setEmailBlurred(false);
          setPasswordBlurred(false);
          // Navigate to login after 4 seconds
          setTimeout(() => {
            navigate('/login');
          }, 4000);
        } else {
          throw new Error("Registration failed. Please try again.");
        }
      })
      .catch(error => {
        setRegistrationError(error.message); 
      });
  };

  return (
    <div className="backdrop">
      <div className="back-icon" onClick={() => navigate('/')}>
            <FaArrowLeft />
      </div>
      <div className="my-modal">
        <div className="container">
          <h1 className="text-center">Registration Form</h1>
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
                onBlur={emailBlurHandler}
              />
              <label htmlFor="username">Username</label>
              {usernameIsInvalid && (
                <p className="alert alert-danger">Username is required</p>
              )}
            </div>

            {/* Email Input Field */}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder=""
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              <label htmlFor="email">Email</label>
              {emailIsInvalid && (
                <p className="alert alert-danger">Email is not in proper format</p>
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
                <p className="alert alert-danger">Password should have at least 6 characters</p>
              )}
            </div>

            {registrationError && (
              <div className="alert alert-danger">{registrationError}</div>
            )}

            {registrationSuccess && (
              <div className="registration-success">You have been registered successfully!</div>
            )}

            {/* Submit Button */}
            <button
              className="btn btn-primary"
              type="button"
              onClick={registerHandler}
              disabled={emailIsInvalid || passwordIsInvalid || usernameIsInvalid}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
