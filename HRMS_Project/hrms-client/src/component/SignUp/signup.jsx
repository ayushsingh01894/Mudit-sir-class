import "./sign.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  let [data, setData] = useState({});
  let [error, setError] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target; //destucturing use here for name into name and value into value

    setData({ ...data, [name]: value });
  };

  let handleValidate = (data) => {
    let inputError = {};

    if (!data.name) {
      inputError.name = "Full name is required";
    }

    if (!data.email) {
      inputError.email = "Email is required";
    }

    if (!data.password) {
      inputError.password = "Password is required";
    }

    if (!data.confirmPassword) {
      inputError.confirmPassword = "Please confirm your password";
    } else if (data.password !== data.confirmPassword) {
      inputError.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(inputError).length === 0) {
      console.log(data);
    }

    setError(inputError);
  };

  let handleClick = () => {
    handleValidate(data);
  };

  return (
    <div className="signup-page">
      <div className="signup-shell">
        <div className="signup-card">
          <div className="signup-brand">
            <div className="signup-badge">HR</div>
            <h1>Create Account</h1>
            <p>Join the HRMS platform and manage your team efficiently.</p>
          </div>

          <div className="signup-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                name="name"
                onChange={handleChange}
              />
              <p className="error-style">{error.name}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                onChange={handleChange}
              />
              <p className="error-style">{error.email}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a password"
                name="password"
                onChange={handleChange}
              />
              <p className="error-style">{error.password}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your password"
                name="confirmPassword"
                onChange={handleChange}
              />
              <p className="error-style">{error.confirmPassword}</p>
            </div>

            <button type="button" className="signup-btn" onClick={handleClick}>
              Sign Up
            </button>

            <Link to="/" className="login-link">
              Already have an account? <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
