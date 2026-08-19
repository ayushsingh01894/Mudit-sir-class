import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  let [data, setData] = useState({});
  let [error, setError] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  let inputError = {};

  let handleValidate = (data) => {
    if (!data.email) {
      inputError.email = "Email is required";
    } else if (!data.password) {
      inputError.password = "Password is required";
    } else {
      console.log(data);
    }

    setError(inputError);
  };

  console.log(error);

  let handleClick = () => {
    handleValidate(data);
  };

  return (
    <div className="login-page">
      <div className="login-shell">
        <div className="login-card">
          <div className="login-brand">
            <div className="brand-badge">HR</div>
            <h1>Welcome Back</h1>
            <p>Sign in to continue to your HRMS dashboard.</p>
          </div>

          <div className="login-form">
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
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
              />
              <p className="error-style">{error.password}</p>
            </div>

            <button type="button" className="login-btn" onClick={handleClick}>
              Login
            </button>

            <Link to="/SignUp" className="signup-link">
              Don&apos;t have an account? <span>Sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
